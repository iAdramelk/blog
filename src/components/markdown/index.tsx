import ExternalLink from '../external-link';
import { MDXProvider } from '@mdx-js/react'; // tslint:disable-line: ordered-imports
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import styles from './styles.module.css';

const shortcodes = { ExternalLink };

interface IMarkdownProps {
  html: string;
}

function Markdown({ html }: IMarkdownProps) {
  return (
    <div className={styles.wrapper}>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{html}</MDXRenderer>
      </MDXProvider>
    </div>
  );
}

export default Markdown;
