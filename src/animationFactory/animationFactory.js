import React from 'react';
import PropTypes from 'prop-types';

export default function animationFactory(family) {
  class Animation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
      const familyContext = this.context[family];
      const { children: renderChildren } = this.props;
      const currentKey = familyContext.currentAnimation.key;
      const hasPlayed = familyContext.keysPlayed[this.props.timelineKey];
      return (
        <React.Fragment>
          {currentKey === this.props.timelineKey || hasPlayed ? renderChildren({}) : <div />}
        </React.Fragment>
      );
    }
  }

  Animation.contextTypes = {
    [family]: PropTypes.object.isRequired,
  };

  Animation.defaultProps = {
    children: () => <div />,
  };

  Animation.propTypes = {
    children: PropTypes.func,
    timelineKey: PropTypes.string.isRequired,
  };
  return Animation;
}




