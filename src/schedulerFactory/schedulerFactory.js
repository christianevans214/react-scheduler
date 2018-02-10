import React from 'react';
import PropTypes from 'prop-types';

export default function schedulerFactory(family) {
  class Scheduler extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    getChildContext() {
      return {
        [family]: {},
      };
    }

    render() {
      return (
        <React.Fragment>
          {this.props.children}
        </React.Fragment>
      );
    }
  }

  Scheduler.propTypes = {
    timeline: PropTypes.array.isRequired,
  };

  Scheduler.childContextTypes = {
    [family]: PropTypes.string.isRequired,
  };

  return Scheduler;
}
