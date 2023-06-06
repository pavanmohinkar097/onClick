import { useEffect,useState } from 'react'

import './App.css'

/** Timers and Intervals */
let intervalId;

const App = () => {
  const [countdown, setCountdown] = useState(0);

  const start = () => {
    intervalId = setInterval(() => {
      setCountdown((prevState) => prevState + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(intervalId);
  };

  const reset = () => {
    stop();
    setCountdown(0);
    alert("Hi Ashish kaise hoo aap ???")
  };

  return (
    <main>
      <title>StopWatch</title>
      
      <h3>{countdown}</h3>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </main>
  );
};

// Named Export
export default App;