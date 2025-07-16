import React, { useState, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import './App.css';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const splineRef = useRef<any>(null);

  const onLoad = (spline: any) => {
    console.log('Spline scene loaded!');
    setIsLoading(false);
    splineRef.current = spline;
    
    // Simple approach - try to zoom out immediately
    setTimeout(() => {
      adjustCamera();
    }, 500);
  };
  
  const adjustCamera = () => {
    const spline = splineRef.current;
    if (!spline) return;
    
    console.log('Adjusting camera...');
    
    // Try to trigger zoom out via events
    try {
      // Method 1: Try to simulate mouse wheel events for zoom
      const canvas = document.querySelector('canvas');
      if (canvas) {
        // Create zoom out effect by dispatching wheel events
        for (let i = 0; i < 2; i++) {
          setTimeout(() => {
            const wheelEvent = new WheelEvent('wheel', {
              deltaY: 300, // Positive value for zoom out
              bubbles: true,
              cancelable: true
            });
            canvas.dispatchEvent(wheelEvent);
          }, i * 100);
        }
        console.log('Zoom out events dispatched');
      }
    } catch (error) {
      console.error('Error with zoom events:', error);
    }
  };

  const onError = (error: any) => {
    console.error('Spline scene failed to load:', error);
    setError('Failed to load 3D scene');
    setIsLoading(false);
  };

  return (
    <div className="App">
      {isLoading && (
        <div className="loading">
          <div className="loading-text">Loading 3D Scene...</div>
        </div>
      )}
      {error && (
        <div className="error">
          <div className="error-text">{error}</div>
        </div>
      )}
      <div className="spline-container">
        <Spline 
          scene="https://prod.spline.design/9E7HoXAsefMIS6Gc/scene.splinecode" 
          onLoad={onLoad}
          onError={onError}
        />
      </div>
    </div>
  );
}
