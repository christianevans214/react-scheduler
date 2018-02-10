import Scheduler from '../Scheduler';

describe('Scheduler', () => {
  describe('test', () => {
    it('should return true', () => {
      expect(Scheduler).toBeTruthy();
    });
  });
});

/*
<Scheduler
  family="a"
  timeline={[{}, {}]}
  on
>
  <Animation family="a" key={}>
    {
      () => {}
    }
  </Animation>
</Scheduler>
*/

