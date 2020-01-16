const visit = require('unist-util-visit');

const re = /((\S+)=((?:.(?!["]?\s+(?:\S^=+)=|["]))+..))/g;
const attrKeyArray = ['href=', 'title=', 'description=', 'link='];

function stripquotes(value) {
  if (
    value.charAt(0) === '"' ||
    (value.charAt(0) === "'" && value.charAt(value.length - 1) === '"') ||
    value.charAt(value.length - 1) === "'"
  ) {
    return value.substr(1, value.length - 2);
  }
  return value;
}

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

module.exports = ({ markdownAST }) => {
  visit(markdownAST, 'html', node => {
    if (node.value.includes('<external-link')) {
      const found = node.value.match(re);
      if (isCorrectExternalLinkAttr(found)) {
        let isImage = false;
        const attrs = found.reduce((res, item) => {
          const firstSignNumber = item.indexOf('=');
          const key = item.substring(0, firstSignNumber);
          if (key.toLowerCase() === 'image') {
            isImage = true;
          }
          return {
            ...res,
            [key]: stripquotes(item.substring(firstSignNumber + 1))
          };
        }, {});

        node.type = 'html';
        node.value = renderTag(isImage, attrs);
      } else {
        console.log(found, found.length);
        throw new Error(
          `No correct tag <external-link /> or not all nested tags in ${node.value}`
        );
      }
    }
  });
};
