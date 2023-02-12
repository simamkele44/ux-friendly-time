# Usage and Guide

This project seeks to display date to users in a more user friendly manner that reduces cognitive load to users. 

### Problem
> Reminder: Your next appointment is on `02/04/2023/10:00:00`.

### Solution
> Reminder: Your next appointment is `Happening in 2 hours at 10:00 AM`.



## Installation

On your  react project install. By default this project users current time in comparison to the given DateTime value.

```bash
npm i ux-friendly-time
```


### Example

The library uses a component called UXTime and take in time as a prop and returns a more user friendly format of that time relative to current time.

```bash
import React from 'react';
import { UXTime } from 'ux-friendly-time';


function App() {
  const time: Date = new Date("2023-02-12T16:55:00");
  
  return (
    <div className="App">
      <UXTime time={time}/>
    </div>
  );
}

export default App;

```



## Thank you



