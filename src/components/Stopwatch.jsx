import React, { useState } from 'react';
import Timer from './Timer';
import Controlbuttons from './Controlbuttons';

function Stopwatch({ startStopwatch }) {
  const [isActive, setActive] = useState(false);
  const [isPaused, setPaused] = useState(true);
  const [time, setTime] = useState(0);

  // Keep track of the total lap time
  const [totalLapTime, setTotalLapTime] = useState(0);
  const [laps, setLaps] = useState([]); // Track individual laps

  React.useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setActive(true);
    setPaused(false);
    startStopwatch(); // Notify App to change background when stopwatch starts
  };

  const handlePauseResume = () => {
    setPaused(!isPaused);
  };

  const handleReset = () => {
    setActive(false);
    setTime(0);
    setTotalLapTime(0); // Reset the total lap time
    setLaps([]); // Reset the laps
  };

  const handleLap = () => {
    setLaps((prevLaps) => [...prevLaps, time]); // Add the current time as a lap time
    setTotalLapTime(totalLapTime + time); // Update total lap time
  };

  return (
    <div className="w-full max-w-md bg-gradient-to-b from-teal-400 to-teal-50 flex flex-col items-center justify-between p-6 rounded-lg shadow-lg shadow-orange-600/50">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6 mt-4" style={{ fontFamily: 'Poppins, sans-serif', textTransform: 'uppercase' }}>
       Stopwatch⏱️
      </h1>
      <Timer time={time} />
      
      {/* Add space between timer and buttons */}
      <div className="mb-4"></div>

      {/* Control Buttons */}
      <Controlbuttons
        active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
        handleLap={handleLap}
        time={time}
      />

      {/* Display Total Lap Time and Laps */}
      {laps.length > 0 && (
        <div className="mt-6 w-full text-black text-center">
          {/* Total Lap Time First */}
          <div className="mt-4 text-xl">
            <strong>Total Lap Time: </strong>
            {("0" + Math.floor(totalLapTime / 60000) % 60).slice(-2)}:
            {("0" + Math.floor(totalLapTime / 1000) % 60).slice(-2)}.
            {("0" + Math.floor(totalLapTime / 10) % 100).slice(-2)}
          </div>

          {/* Laps Display */}
          <h4 className="font-semibold text-2xl mt-6 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Laps:
          </h4>
          <ul className="list-none pl-0">
            {laps.map((lap, index) => (
              <li key={index} className="mb-2 text-lg">
                Lap {index + 1}: {("0" + Math.floor(lap / 60000) % 60).slice(-2)}:
                {("0" + Math.floor(lap / 1000) % 60).slice(-2)}.
                {("0" + Math.floor(lap / 10) % 100).slice(-2)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Stopwatch;
