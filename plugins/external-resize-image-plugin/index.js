const visit = require('unist-util-visit');
const { selectAll, select } = require('hast-util-select');

const { convertHastToHtml, convertHtmlToHast } = require('../utils/convertHast');

const regexMaxWidth = /max-width: \d{1,5}px/g
const regexResize = /=\d{2,4}/g

module.exports = ({ markdownAST }) => {

  visit(markdownAST, 'html', node => {
    const hast = convertHtmlToHast(node.value);

    const wrapperImageList = selectAll('.gatsby-resp-image-wrapper', hast);

    wrapperImageList.forEach(wrapperImage => {
      const image = select('.gatsby-resp-image-image', wrapperImage)

      const title = image
        .properties
        .title
        .replace(regexResize, '')
        .trim()

      const resize = image
        .properties
        .title
        .match(regexResize);

      const maxWidth = wrapperImage
        .properties
        .style
        .match(regexMaxWidth)[0]
        .replace(/\D/g, '')

      if (resize) {
        const width = resize[0].replace(/=/, '');

        image.properties.title = title ? title : image.properties.alt

        wrapperImage.properties.style = wrapperImage
          .properties
          .style
          .replace(
            regexMaxWidth,
            `max-width: ${Math.min(width, maxWidth)}px`
          );
      }
    })
    node.value = convertHastToHtml(hast)
  })
};
