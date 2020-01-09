import React from 'react';

import styles from './styles.module.css';

interface IMarkdownProps {
  htmlAst: string;
  renderAst: any;
}

function Markdown({ htmlAst, renderAst }: IMarkdownProps) {
  return <div className={styles.wrapper}>{renderAst(htmlAst)}</div>;
}

export default Markdown;
