import React from 'react';

import { storiesOf } from '@storybook/react';
import generateAnimationFamily from '../src';

const { Scheduler, Animation } = generateAnimationFamily('storybook');
const TIMELINE = [
  { key: 'test1', duration: 200 },
  { key: 'test2', duration: 1000 },
  { key: 'test3', duration: 500 },
];


storiesOf('Scheduler', module)
  .add('Default', () => (
    <Scheduler timeline={TIMELINE} on>
      <Animation />
    </Scheduler>
  ));
