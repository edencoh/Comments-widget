import React from 'react';
import ReactDOM from 'react-dom';
import Comments from './components/Comments/Comments';
import './layout.scss';

import 'font-awesome-sass-loader';

var App = React.createClass({
  render() {
    return <Comments />;
  }
});

ReactDOM.render(<App />, document.getElementById('root'));