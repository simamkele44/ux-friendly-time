import TimeElapsed from '../src/TimeElapsed';
import { past_dates, future_dates } from '../data/testdata';

describe('Past Week', () => {
  it('Week', () => {
    const ask_time = new Date(past_dates.minutes.past);
    const now_time = new Date(past_dates.minutes.future);
    expect(TimeElapsed({time: ask_time}, now_time)).toBe(past_dates.minutes['ux-friendly-time']);
  });
});

describe('Future Weeks', () => {
  it('Weeks', () => {
    const ask_time = new Date(future_dates.weeks.future);
    const now_time = new Date(future_dates.weeks.now);
    expect(TimeElapsed({time: ask_time}, now_time)).toBe(future_dates.weeks['ux-friendly-time']);
  });
});