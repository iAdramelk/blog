import React from 'react';

interface IInlineBlockProps {
  href: string;
  title: string;
  description: string;
  picture: string;
  link: string;
}

function InlineBlock({
  href,
  title,
  description,
  picture,
  link
}: IInlineBlockProps) {
  return (
    <a href={href} target="_blank" className="external-link-preview">
      <section className="elp-content-holder">
        <div className="elp-description-holder">
          <h4 className="elp-title">{title}</h4>
          <div className="elp-description">{description}</div>
          <div className="elp-link">{link}</div>
        </div>
        <div className="elp-image-holder">
          <img src={picture} />
        </div>
      </section>
    </a>
  );
}

export default InlineBlock;
