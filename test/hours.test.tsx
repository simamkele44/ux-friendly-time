import TimeElapsed from '../src/TimeElapsed';
import { past_dates, future_dates } from '../data/testdata';

describe('Past Hour', () => {
  it('Hour', () => {
    const ask_time = new Date(past_dates.hours.past);
    const now_time = new Date(past_dates.hours.future);
    expect(TimeElapsed({time: ask_time}, now_time)).toBe(past_dates.hours['ux-friendly-time']);
  });
});


describe('Future Hours', () => {
  it('Hours', () => {
    const ask_time = new Date(future_dates.hours.future);
    const now_time = new Date(future_dates.hours.now);
    expect(TimeElapsed({time: ask_time}, now_time)).toBe(future_dates.hours['ux-friendly-time']);
  });
});