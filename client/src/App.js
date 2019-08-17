import React from 'react';
import './app.scss';
import Animation from './components/animation/animation';
import Header from './components/header/header';
import Projects from './components/projects/projects';

function App() {
  return (
    <article>
      <Animation />
      <svg className="animations"></svg>
      <div className="content">
        <Header />
        <Projects />
      </div>
    </article>
  );
}

export default App;