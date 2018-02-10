import React from 'react';

import { storiesOf } from '@storybook/react';
import generateAnimationFamily from '../src';

const { Scheduler, Animation } = generateAnimationFamily('storybook');

storiesOf('Scheduler', module)
  .add('Default', () => (
    <Scheduler timeline={[]}>
      <Animation />
    </Scheduler>
  ));
