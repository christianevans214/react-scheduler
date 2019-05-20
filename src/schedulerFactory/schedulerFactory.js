import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

function Scheduler({
  children, on, timeline, FamilyContext,
}) {
  const [currentAnimation, setCurrentAnimation] = useState(null);
  const [keysPlayed, setKeysPlayed] = useState({});
  const [currentTimeout, setCurrentTimeout] = useState(null);


  useEffect(() => {
    if (on) {
      const executeTimeBlock = (remainingTimeline) => {
        const remainingTimelineCopy = [...remainingTimeline];
        const thisAnimation = remainingTimelineCopy.shift();
        setCurrentAnimation(thisAnimation);
        setCurrentTimeout(setTimeout(() => {}, thisAnimation.duration));
      };
    } else {
      // just reset everything for now.
      setCurrentAnimation(null);
      setKeysPlayed({});
      clearTimeout(currentAnimation);
      setCurrentTimeout(null);
    }
  }, [on]);


  return (
    <FamilyContext.Provider>
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
