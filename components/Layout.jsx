import React from 'react';
import Header from './Header';
import Head from 'next/head';

// Layout component is a component that will be used to wrap all the other components
// that will be displayed on the web page
function Layout({ children }) {
  return (
    <>
      <Head>
        <title>InfoBlock</title>
        <meta name="description" content="Blockchain and bitcoin" />
        <link rel="icon" href="/bitcoin-btc-logo.svg" />
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
}

export default Layout;
