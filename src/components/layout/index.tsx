import React from 'react';

import './fonts/fonts.css';
import './base.css'; // tslint:disable-line: ordered-imports

import Footer from '../footer';
import HamburgerMenu from '../hamburger-menu';
import Header from '../header';
import Subscribe from '../subscribe';

import styles from './styles.module.css';

interface ILayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Header />
      <HamburgerMenu />
      <div className={styles.content}>{children}</div>
      <Subscribe />
      <Footer />
    </>
  );
}

export default Layout;
