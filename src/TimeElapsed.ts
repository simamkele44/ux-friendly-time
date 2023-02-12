import { ask_time } from "./types/fulltime";
import { TimeTense } from "./calculations/TimeTense";
import { Past } from "./calculations/Past";
import { Present } from "./calculations/Present";
import { Future } from "./calculations/Future";

export const TimeElapsed = (asktime: ask_time, nowtime: Date = (new Date())): string => {
    const time_tense: string = (new TimeTense(asktime.time, nowtime)).timeTense();
    let time: Past = new Past(asktime.time, nowtime);


    // We used a year to determine if the date is in the past, present or future. Past being a year in the past
    // present being same year as the year on the Datetime object received
    // Future is the years ahead of the current year
    switch(time_tense) {
        case "past":
          time = new Past(asktime.time, nowtime);
          break;
        case "present":
          time = new Present(asktime.time, nowtime);
          break;
        case "future":
            time = new Future(asktime.time, nowtime);
            break;
    }
    

    return time.CalcTime();

};

export default TimeElapsed;