import TimeElapsed from '../src/TimeElapsed';
import { past_dates, future_dates } from '../data/testdata';

describe('Past Minutes', () => {
  it('Minutes', () => {
    const ask_time = new Date(past_dates.minutes.past);
    const now_time = new Date(past_dates.minutes.future);
    expect(TimeElapsed({time: ask_time}, now_time)).toBe(past_dates.minutes['ux-friendly-time']);
  });
});


describe('Future Minutes', () => {
  it('Minutes', () => {
    const ask_time = new Date(future_dates.minutes.future);
    const now_time = new Date(future_dates.minutes.now);
    expect(TimeElapsed({time: ask_time}, now_time)).toBe(future_dates.minutes['ux-friendly-time']);
  });
});