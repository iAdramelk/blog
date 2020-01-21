const visit = require('unist-util-visit');
const unified = require('unified');
const parse = require('rehype-parse');
const select = require('hast-util-select').select;

const attrKeyArray = ['href', 'title', 'description', 'link'];

function isCorrectExternalLinkAttr(attrsKeyTagArray) {
  return (
    attrKeyArray.filter(key => attrsKeyTagArray.indexOf(key) !== -1).length >=
    attrKeyArray.length
  );
}

function renderTag(withImage, attrs) {
  return `
    <section class="elp-content-holder">
      <a href=${attrs.href} class="external-link-preview">
          <div class="elp-description-holder">
            <h4 class="elp-title">${attrs.title}</h4>
            <div class="elp-description">${attrs.description}</div>
            <div class="elp-link">${attrs.link}</div>
          </div>
           ${
             withImage
               ? `<div class="elp-image-holder">
                <img src="${attrs.image}" alt="${attrs.title}"/>
            </div>`
               : ``
           }
      </a>
    </section>
    `;
}

module.exports = ({ markdownAST }) => {
  visit(markdownAST, 'html', node => {
    const data = unified()
      .use(parse)
      .parse(node.value);
    const externalLink = select('external-link', data);
    if (externalLink) {
      const { properties } = externalLink;
      if (isCorrectExternalLinkAttr(Object.keys(properties))) {
        const isImage = Boolean(properties.image);
        node.type = 'html';
        node.value = renderTag(isImage, properties);
      } else {
        throw new Error(
          `No correct tag <external-link /> or not all nested tags in ${node.value}`
        );
      }
    }
  });
};
