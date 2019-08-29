import React from 'react';
import './app.scss';

import content from './assets/content';
import Animation from './components/animation/animation';
import Header from './components/header/header';
import Router from './components/router/router';
import { getPhotos } from './helper/api';
import { getHashChange } from './helper/utility'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hideHeader: false,
      photos: [],
      hash: 'projects',
      query: null
    };

    this.registerOnHashChange();
  }

  componentDidMount() {
    getPhotos()
      .then(data => {
        this.setState({ photos: data.photos });
      });
  }

  registerOnHashChange = () => {
    window.location.hash = 'projects';

    window.addEventListener('hashchange', (event) => {
      getHashChange(event).then(data => {
        this.setState(
          Object.assign({}, this.state, data, { hideHeader: data.hash === 'about' })
        );
      });
    });
  }

  render() {
    return (
      <article>
        <Animation />
        <main>
          <Header 
            hide={this.state.hideHeader} />
          <Router
            content={content}
            hash={this.state.hash}
            query={this.state.query}
            photos={this.state.photos} />
        </main>
      </article>
    );
  }
}

export default App;