***Q1. Build a progress bar that increases by 20% every second and resets***

```import React from 'react';

export default function App() {
  const [state, setState] = React.useState(0);

  React.useEffect(()=>{
    const timer = setInterval(()=>{
      setState(prev => (prev >= 100 ? 0 : prev + 20));
    }, 1000),
    return ()=> clearInterval(timer)
  },[])
  return (
    <div style={{ display: 'flex', flexDirection: 'column', margin: '20px' }}>
      Progress: {state} %
      <div
        style={{
          width: "300px",
          height: "20px",
          background: "#ddd"
        }}
      >
      <div style={{height:'100%', background:'green', width:`${state}%`}} />
        </div>
    </div>
  );
}```
---------------------------------------------------------------------------
## Q2
*** Create a counter with increment, decrement, and reset ***

```
import React from 'react';

export default function App() {
  const [counter, setCounter] = React.useState(0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', margin: '20px' }}>
      Counter = {counter}
      <div>
        <button onClick={() => setCounter((prev) => prev + 1)}> + </button>
        <button onClick={() => setCounter((prev) => prev - 1)}> - </button>
        <button onClick={() => setCounter(0)}> Reset </button>
      </div>
    </div>
  );
}

```
***Implement a custom useToggle hook***

```
import React, { useState } from 'react';

function useToogle(initialValue) {
  const [toggle, setToggle] = useState(initialValue);

  const handleToggle = () => setToggle((toggle) => !toggle);

  return [toggle, handleToggle];
}
export default function App() {
  const [toggle, handleToggle] = useToogle(false);
  console.log(toggle);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', margin: '20px' }}>
      Toggle = {String(toggle)}
      <div>
        <button onClick={() => handleToggle()}> Toggle </button>
      </div>
    </div>
  );
}
```


```
Implement a custom useDebounce hook
import React, { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  const [debounce, setDebounce] =  useState(value);

  useEffect(()=> {
    const timer = setTimeout(()=> {
      setDebounce(value)
    }, delay),
    return ()=>{clearTimeout(timer)}
  }, [value, delay])

  return [debounce]
}

export default function App() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 5000);

  return (
    <div>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <p>Search value: {debouncedQuery}</p>
    </div>
  );
}

```
