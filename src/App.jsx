import React, { useEffect } from 'react';
import './App.css';
import ComingSoon from './components/comingSoon';

function App() {
  useEffect(() => {
    // This will only run in the browser
    if (typeof window !== "undefined") {
      console.log("window.innerHeight", window.innerHeight);
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="bg-black h-screen">
      <ComingSoon />
    </div>
  );
}

export default App;