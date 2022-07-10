import React, { FC } from 'react';
import Head from 'next/head';

import { Navbar } from '../ui';

type Props = {
  title?: string;
  children: React.ReactNode;
};

export const Layout: FC<Props> = ({ children, title = 'Pokemon App' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Anthony Acosta" />
        <meta
          name="description"
          content={`Información sobre el pokemon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>

      <Navbar />

      <main
        style={{
          padding: '0 20px',
        }}
      >
        {children}
      </main>
    </>
  );
};
