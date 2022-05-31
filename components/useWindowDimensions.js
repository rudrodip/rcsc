import { useState, useEffect } from 'react';

function getWindowDimensions() {
  if (typeof window != 'undefined'){
    const { innerWidth: width, innerHeight: height } = window
    return {
      width,
      height
    }
  } else {
    return {
      width: 0,
      height: 0
    }
  }

}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({width: 0, height: 0})

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize);
    setTimeout(handleResize, 500)
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}