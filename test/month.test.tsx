import TimeElapsed from '../src/TimeElapsed';
import { past_dates, future_dates } from '../data/testdata';

describe('Past Month', () => {
  it('Month', () => {
    const ask_time = new Date(past_dates.months.past);
    const now_time = new Date(past_dates.months.future);
    expect(TimeElapsed({time: ask_time}, now_time)).toBe(past_dates.months['ux-friendly-time']);
  });
});


describe('Future Months', () => {
  it('Months', () => {
    const ask_time = new Date(future_dates.months.future);
    const now_time = new Date(future_dates.months.now);
    expect(TimeElapsed({time: ask_time}, now_time)).toBe(future_dates.months['ux-friendly-time']);
  });
});