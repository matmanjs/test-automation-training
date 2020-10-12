import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.less';

export default class PageAbc extends Component {
  render() {
    return (
      <div className="page-abc">
        <h2 id="say-hello">hello, {this.props.match.params.pageName}</h2>
      </div>
    );
  }
}

PageAbc.propTypes = {
  match: PropTypes.object,
};
