import TimeElapsed from '../src/TimeElapsed';
import { past_dates, future_dates } from '../data/testdata';

describe('Past Year', () => {
  it('Test if calculates year correctly', () => {
    const ask_time = new Date(past_dates.years.past);
    const now_time = new Date(past_dates.years.future);
    expect(TimeElapsed({time: ask_time}, now_time)).toBe(past_dates.years['ux-friendly-time']);
  });
});

describe('Future Year', () => {
  it('Test if calculates year correctly', () => {
    const ask_time = new Date(future_dates.years.future);
    const now_time = new Date(future_dates.years.now);
    expect(TimeElapsed({time: ask_time}, now_time)).toBe(future_dates.years['ux-friendly-time']);
  });
});