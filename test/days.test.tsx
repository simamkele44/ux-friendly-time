import TimeElapsed from '../src/TimeElapsed';
import { past_dates, future_dates } from '../data/testdata';

describe('Past Days', () => {
  it('Days', () => {
    const ask_time = new Date(past_dates.days.past);
    const now_time = new Date(past_dates.days.future);
    expect(TimeElapsed({time: ask_time}, now_time)).toBe(past_dates.days['ux-friendly-time']);
  });
});


describe('Future Days', () => {
  it('Days', () => {
    const ask_time = new Date(future_dates.days.future);
    const now_time = new Date(future_dates.days.now);
    expect(TimeElapsed({time: ask_time}, now_time)).toBe(future_dates.days['ux-friendly-time']);
  });
});