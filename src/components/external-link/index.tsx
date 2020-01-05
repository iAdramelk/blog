import React from 'react';

import styles from '../markdown/styles.module.css';

interface IExternalLinkProps {
  title: string;
  href: string;
  description: string;
  picture: string;
}

function getHostName(url: string) {
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

function ExternalLink({
  title,
  href,
  description,
  picture
}: IExternalLinkProps) {
  return (
    <div className={styles.wrapper}>
      <a key={href} href={href} className="external-link-preview">
        <section className="elp-content-holder">
          <div className="elp-description-holder">
            <h4 className="elp-title">{title}</h4>
            <div className="elp-description">{description}</div>
            <div className="elp-link">{getHostName(href)}</div>
          </div>
          <div className="elp-image-holder">
            <img src={picture} />
          </div>
        </section>
      </a>
    </div>
  );
}

export default ExternalLink;
