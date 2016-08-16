import React from 'react';

export const MainLayout= ({content}) => (
  <div className="main-layout">
    <header>
      <h2>Mis Articulos</h2>
      <nav>
        <a href="/">Resolutions</a>
        <a href="/articulos">Articulos</a>
        <a href="/about">About</a>
      </nav>
    </header>
    <main>
      {content}
    </main>
  </div>
)
