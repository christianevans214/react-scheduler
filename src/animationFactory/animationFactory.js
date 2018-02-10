import React from 'react';
import PropTypes from 'prop-types';

export default function animationFactory(family) {
  class Animation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
      console.log('CONTEXT', this.context);
      return <div />;
    }
  }

  Animation.contextTypes = {
    [family]: PropTypes.object.isRequired,
  };

  return Animation;
}




