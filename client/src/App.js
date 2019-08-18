import React from 'react';
import './app.scss';

import content from './assets/content';

import Animation from './components/animation/animation';
import Header from './components/header/header';
import Projects from './components/projects/projects';
import Router from './components/router/router';

function App() {
  return (
    <article>
      <Animation />
      <svg className="animations"></svg>
      <div className="content">
        <Header />
        <Router
          content={content} />
      </div>
    </article>
  );
}

export default App;