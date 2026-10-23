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
