import React, { useContext } from 'react';
import PropTypes from 'prop-types';

export default function animationFactory(FamilyContext) {
  function Animation(props) {
    const familyContext = useContext(FamilyContext);
    const { children: renderChildren } = props;
    const currentKey = familyContext.currentAnimation.key;
    const hasPlayed = familyContext.keysPlayed[props.timelineKey];
    return (
      <React.Fragment>
        {currentKey === props.timelineKey || hasPlayed ? renderChildren({}) : null }
      </React.Fragment>
    );
  }

  Animation.defaultProps = {
    children: () => <div />,
  };

  Animation.propTypes = {
    children: PropTypes.func,
    timelineKey: PropTypes.string.isRequired,
  };

  return Animation;
}

