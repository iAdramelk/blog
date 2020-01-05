import CMS from 'netlify-cms-app';

function getHostName(url) {
  const match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
  if (
    match != null &&
    match.length > 2 &&
    typeof match[2] === 'string' &&
    match[2].length > 0
  ) {
    return match[2];
  } else {
    return null;
  }
}

function Wrapper({ widgetFor }) {
  return widgetFor('body');
}

CMS.registerPreviewStyle('/admin/styles.css');
CMS.registerPreviewTemplate('blog', Wrapper);
CMS.registerEditorComponent({
  // Internal id of the component
  id: 'external-link',
  // Visible label
  label: 'External Link',
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    { name: 'title', label: 'Title', widget: 'string' },
    { name: 'href', label: 'Link Url', widget: 'string' },
    { name: 'description', label: 'Description', widget: 'text' },
    { name: 'picture', label: 'Picture', widget: 'image' }
  ],
  // Pattern to identify a block as being an instance of this component
  pattern: /<ExternalLink(\s+[a-zA-Z]+\s*=\s*("([^"]*)"|'([^']*)'))\s(\s+[a-zA-Z]+\s*=\s*("([^"]*)"|'([^']*)'))\s(\s+[a-zA-Z]+\s*=\s*("([^"]*)"|'([^']*)'))\s(\s+[a-zA-Z]+\s*=\s*("([^"]*)"|'([^']*)'))*\s*\/>/,
  // Function to extract data elements from the regexp match
  fromBlock: function(match) {
    return {
      title: match[7],
      href: match[3],
      description: match[11],
      picture: match[15],
      domain: getHostName(match[3])
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: function(obj) {
    return `<ExternalLink
                  key="${obj.href}"
                  href="${obj.href}"
                  title="${obj.title}"
                  description="${obj.description}"
                  picture="${obj.picture}"
                />`;
  },
  // Preview output for this component. Can either be a string or a React
  // component
  // (component gives better render performance)
  toPreview: function(obj) {
    return `<a key="${obj.href}" href="${obj.href}" class="external-link-preview">
              <section class="elp-content-holder">
                <div class="elp-description-holder">
                  <h4 class="elp-title">${obj.title}</h4>
                  <div class="elp-description">${obj.description}</div>
                  <div class="elp-link">${obj.domain}</div>
                </div>
                <div class="elp-image-holder">
                  <img src="${obj.picture}" />
                </div>
              </section>
            </a>`;
  }
});
