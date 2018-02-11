import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean} from '@storybook/addon-knobs/react';
import generateAnimationFamily from '../src';

const { Scheduler, Animation } = generateAnimationFamily('storybook');
const TIMELINE = [
  { key: 'test1', duration: 2000 },
  { key: 'test2', duration: 1000 },
  { key: 'test3', duration: 500 },
];


const stories = storiesOf('Scheduler', module);
stories.addDecorator(withKnobs);
stories.add('Default', () => (
    <Scheduler timeline={TIMELINE} on={boolean('ON', false)}>
      <Animation timelineKey="test1">
        {() => {
          return <div>test1</div>
        }}
      </Animation>
      <Animation timelineKey="test2">
        {() => {
          return <div>test2</div>
        }}
      </Animation>
      <Animation timelineKey="test3">
        {() => {
          return <div>test3</div>
        }}
      </Animation>
    </Scheduler>
  ));
