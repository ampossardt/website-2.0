import React from 'react';
import './app.scss';

import content from './assets/content';
import Animation from './components/animation/animation';
import Header from './components/header/header';
import Router from './components/router/router';

function App() {
  return (
    <article>
      <Animation />
      <main>
        <Header />
        <Router
          content={content} />
      </main>
    </article>
  );
}

export default App;