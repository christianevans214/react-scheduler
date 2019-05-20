import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Scheduler({
  children, on, timeline, FamilyContext,
}) {
  const [currentAnimation, setCurrentAnimation] = useState({});
  const [keysPlayed, setKeysPlayed] = useState({});
  const [currentTimeout, setCurrentTimeout] = useState(null);


  useEffect(() => {
    if (on) {
      const executeTimeBlock = (remainingTimeline) => {
        const remainingTimelineCopy = [...remainingTimeline];
        const thisAnimation = remainingTimelineCopy.shift();
        setCurrentAnimation(thisAnimation);
        setKeysPlayed(Object.assign({}, keysPlayed, { [thisAnimation.key]: true }));
        setCurrentTimeout(setTimeout(() => {
          if (remainingTimelineCopy.length) {
            executeTimeBlock(remainingTimeline);
          } else {
            setCurrentAnimation(null);
          }
        }, thisAnimation.duration));
      };
    } else {
      // just reset everything for now.
      setCurrentAnimation(null);
      setKeysPlayed({});
      clearTimeout(currentTimeout);
      setCurrentTimeout(null);
    }
  }, [on]);

  const contextValue = {
    currentAnimation,
    keysPlayed,
    timeline,
  };

  return (
    <FamilyContext.Provider value={contextValue}>
      {children}
    </FamilyContext.Provider>
  );
}

Scheduler.propTypes = {
  on: PropTypes.bool,
  children: PropTypes.node,
  timeline: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    duration: PropTypes,
  })).isRequired,
  FamilyContext: PropTypes.shape({
    Provider: PropTypes.node.isRequired,
  }).isRequired,
};

Scheduler.defaultProps = {
  on: false,
  children: null,
};

function schedulerFactory(FamilyContext) {
  return props => (
    <Scheduler {...props} FamilyContext={FamilyContext} />
  );
}

export default schedulerFactory;
