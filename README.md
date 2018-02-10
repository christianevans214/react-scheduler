Basic Idea:

```
<Scheduler
  family="a"
  timeline={[{key: 'batman', duration: 200}, { key: 'next', duration: 200, start: -100}]}
  on
>
  <Animation family="a" key="batman">
    {
      () => <Batman />
    }
  </Animation>
</Scheduler>
```
