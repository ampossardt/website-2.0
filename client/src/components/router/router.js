import React from 'react';

import Projects from '../projects/projects';
import ProjectDetail from '../projects/detail';
import Photos from '../photos/photos';

class Router extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hash: 'projects',
      query: '',
      photos: []
    };

    this.initHashChangeListener();
  }

  componentDidMount() {
    fetch('http://localhost:3500/photos')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ photos: data });
      });
  }

  initHashChangeListener = () => {
    window.addEventListener("hashchange", this.handleHashChange);
    
    // initialize projects container on page load
    window.location.hash = 'projects';
  }

  handleHashChange = (event) => {
    const hash = event.newURL.substring(event.newURL.lastIndexOf('/') + 1);
    const query = hash.indexOf('?') > -1 && hash.split('?')[1].split('=');

    console.log(hash);
    console.log(query);

    this.setState({ hash: hash.split('?')[0].replace('#', ''), query });
  }

  getRoutedComponent = () => {
    switch(this.state.hash) {
      case 'projects':
        if(this.state.query && this.state.query[0] === 'id') {
          return <ProjectDetail
                    content={this.props.content.find(x => x.key === this.state.query[1]) } />
        } else {
          return <Projects
                    content={this.props.content} />
        }
      case 'photos':
        return <Photos content={ this.state.photos } />;
      default:
        return null;
    }
  }

  render() {
    return (
      this.getRoutedComponent()
    );
  }
}

export default Router;