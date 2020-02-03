const visit = require('unist-util-visit');
const unified = require('unified');
const parse = require('rehype-parse');
const stringify = require('rehype-stringify');
const { selectAll, select } = require('hast-util-select');

/** HAST - Hypertext Abstract Syntax Tree */
function convertHtmlToHast(htmlString) {
  return unified()
    .use(parse)
    .parse(htmlString);
}

function convertHastToHtml(htmlAst) {
  return unified()
    .use(stringify)
    .stringify(htmlAst);
}

module.exports = ({ markdownAST }) => {

  visit(markdownAST, 'html', node => {
    const hast = convertHtmlToHast(node.value);

    const wrapperImageList = selectAll('.gatsby-resp-image-wrapper', hast);

    wrapperImageList.forEach(wrapperImage => {
      const image = select('.gatsby-resp-image-image', wrapperImage)

      const title = image
        .properties
        .title
        .trim()
        .replace(/=\d{2,4}/gi, ' ')
        .trim();

      const resize = image
        .properties
        .title
        .trim()
        .match(/=\d{2,4}/gi);

      const maxWidth = wrapperImage
        .properties
        .style
        .match(/max-width: (\d{0,5})px/gi)[0]
        .replace(/\D/gi, ' ')
        .trim();

      if (!!resize) {
        const width = resize[0].replace(/^(.)/g, '');

        image.properties.title = title ? title : image.properties.alt

        wrapperImage.properties.style = wrapperImage
          .properties
          .style
          .replace(/(max-width: \d{0,5}px)/g, `max-width: ${Number(width) > Number(maxWidth) ? maxWidth : width}px`);
      }
    })
    node.value = convertHastToHtml(hast)
  })
};
