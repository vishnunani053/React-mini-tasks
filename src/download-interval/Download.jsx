import React, { useState, useEffect, useRef } from 'react';

const Download = () => {
  const [timer, setTimer] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const fileLink = 'your_file_link_here';
  const downloadInterval = useRef(null);

  useEffect(() => {
    if (isDownloading && timer > 0) {
      downloadInterval.current = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0 && isDownloading) {
      clearInterval(downloadInterval.current);
      window.location.href = fileLink;
      alert('Your file is ready to be downloaded');
      setIsDownloading(false);
    }

    return () => clearInterval(downloadInterval.current);
  }, [timer, isDownloading, fileLink]);

  const handleDownload = () => {
    setTimer(5);
    setIsDownloading(true);
  };

  return (
    <div>
      {isDownloading ? (
        <h2>Your download will start in {timer} seconds</h2>
      ) : (
        <h2>Click the button to start downloading</h2>
      )}
      <button onClick={handleDownload} disabled={isDownloading}>
        {isDownloading ? 'Downloading...' : 'Download'}
      </button>
    </div>
  );
};

export default Download;
