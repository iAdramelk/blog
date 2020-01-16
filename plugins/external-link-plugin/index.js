const visit = require('unist-util-visit');
const unified = require('unified');
const parse = require('rehype-parse');
const _ = require('lodash');

const attrKeyArray = ['href', 'title', 'description', 'link'];

function isCorrectExternalLinkAttr(elem) {
  return (
    attrKeyArray.filter(item => elem.some(value => value.includes(item)))
      .length >= attrKeyArray.length
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

function getExternalLinkTag(collection, childKeys, iteratee) {
  const each = _.partial(_.each, _, (value, index) => {
    iteratee(value, index);
    _(value)
      .pick(childKeys)
      .each(each);
  });
  each(collection);
}

module.exports = ({ markdownAST }) => {
  visit(markdownAST, 'html', node => {
    const data = unified()
      .use(parse)
      .parse(node.value);
    getExternalLinkTag(data.children, ['children'], value => {
      if (_.includes(['external-link'], value.tagName)) {
        const { properties } = value;
        if (isCorrectExternalLinkAttr(Object.keys(properties))) {
          let isImage = Boolean(properties.image);
          node.type = 'html';
          node.value = renderTag(isImage, properties);
        } else {
          throw new Error(
            `No correct tag <external-link /> or not all nested tags in ${node.value}`
          );
        }
      }
    });
  });
};
