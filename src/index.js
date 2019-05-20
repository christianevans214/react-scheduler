import React from 'react';
import animationFactory from './animationFactory';
import schedulerFactory from './schedulerFactory';

export default function generateAnimationFamily(family) {
  const FamilyContext = React.createContext(null);
  return {
    Animation: animationFactory(family),
    Scheduler: schedulerFactory(FamilyContext),
  };
}
