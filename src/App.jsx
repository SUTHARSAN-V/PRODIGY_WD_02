import React, { useState } from 'react';
import Stopwatch from './components/Stopwatch';

function App() {
  const [isStarted, setIsStarted] = useState(false);

  const startStopwatch = () => {
    setIsStarted(true); // Change the background when stopwatch starts
  };

  const stopStopwatch = () => {
    setIsStarted(false); // Revert the background when stopwatch stops
  };

  // Dynamic background style based on stopwatch state
  const backgroundStyle = {
    backgroundImage: isStarted
      ? 'url("https://png.pngtree.com/thumb_back/fh260/background/20241013/pngtree-colorful-pastel-gradient-background-texture-in-shades-of-pink-purple-blue-image_16381316.jpg")'
      : 'url("https://cdn.pixabay.com/photo/2017/08/01/18/29/background-2567158_1280.jpg")',
    backgroundSize: 'contain', // Reduce size of the image
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed', // Keep it in place while scrolling
    height: '100vh',
    width: '100%',
    margin: 0,
    transition: 'background 0.5s ease-in-out',
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={backgroundStyle}
    >
      <Stopwatch startStopwatch={startStopwatch} stopStopwatch={stopStopwatch} />
    </div>
  );
}

export default App;
