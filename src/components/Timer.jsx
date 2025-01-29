import React from 'react';

export default Timer;

function Timer(props) {
  const minutes = Math.floor((props.time / 60000) % 60);
  const seconds = Math.floor((props.time / 1000) % 60);
  const milliseconds = Math.floor((props.time / 10) % 100);

  return (
    <div className="relative flex items-center justify-center" style={{ marginTop: '1cm' }}>
      {/* Timer Card */}
      <div className="rounded-[50px] bg-gradient-to-br from-orange-600 to-yellow-300 px-16 py-6 shadow-lg shadow-orange-300/50 w-[300px] text-center">
        <div className="text-4xl font-bold text-gray-800 flex items-center justify-center">
          {minutes > 0 && (
            <>
              <span>{("0" + minutes).slice(-2)}:</span>
            </>
          )}
          <span>{("0" + seconds).slice(-2)}.</span>
          <span>{("0" + milliseconds).slice(-2)}</span>
        </div>
      </div>
    </div>
  );
}
