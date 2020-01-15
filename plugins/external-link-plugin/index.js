const visit = require('unist-util-visit');

const re = /((\S+)=((?:.(?!["]?\s+(?:\S^=+)=|["]))+..))/g;
const attrKeyArray = ['href', 'title', 'description', 'link', 'image'];

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

function isExternalLinkAttr(elem) {
  return attrKeyArray.some(item => elem.includes(item));
}

function renderTag(withImage, attrs) {
  return `
    <div>
      <a href=${attrs.href} class="external-link-preview">
        <section class="elp-content-holder">
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
        </section>
      </a>
    </div>`;
}

module.exports = ({ markdownAST }) => {
  visit(markdownAST, 'html', node => {
    if (node.value.includes('<external-link')) {
      const found = node.value.match(re);
      if (found.every(isExternalLinkAttr)) {
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
        throw new Error(`No correct tag <external-link /> in ${node.value}`);
      }
    }
  });
};
