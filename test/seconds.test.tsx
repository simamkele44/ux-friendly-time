import TimeElapsed from '../src/TimeElapsed';
import { past_dates, future_dates } from '../data/testdata';

describe('Past Seconds', () => {
  it('Seconds', () => {
    const ask_time = new Date(past_dates.seconds.past);
    const now_time = new Date(past_dates.seconds.future);
    expect(TimeElapsed({time: ask_time}, now_time)).toBe(past_dates.seconds['ux-friendly-time']);
  });
});

describe('Future Seconds', () => {
  it('Seconds', () => {
    const ask_time = new Date(future_dates.seconds.future);
    const now_time = new Date(future_dates.seconds.now);
    expect(TimeElapsed({time: ask_time}, now_time)).toBe(future_dates.seconds['ux-friendly-time']);
  });
});