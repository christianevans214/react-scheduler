import animationFactory from './animationFactory';
import schedulerFactory from './schedulerFactory';

export default function generateAnimationFamily(family) {
  return {
    Animation: animationFactory(family),
    Scheduler: schedulerFactory(family),
  }
}
