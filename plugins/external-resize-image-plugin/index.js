const visit = require('unist-util-visit');
const { selectAll, select } = require('hast-util-select');

const { convertHastToHtml, convertHtmlToHast } = require('../utils/convertHast');

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
        .replace(/=\d{2,4}/g, ' ')
        .trim();

      const resize = image
        .properties
        .title
        .trim()
        .match(/=\d{2,4}/g);

      const maxWidth = wrapperImage
        .properties
        .style
        .match(/max-width: (\d{0,5})px/g)[0]
        .replace(/\D/gi, ' ')
        .trim();

      if (resize !== null) {
        const width = resize[0].replace(/^./, '');

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
