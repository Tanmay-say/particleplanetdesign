import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const onLoad = (spline: any) => {
    console.log('Spline scene loaded successfully!');
    setIsLoading(false);
    
    // Access the camera for adjustments
    const camera = spline.camera;
    console.log('Current camera position:', camera.position);
    console.log('Current camera rotation:', camera.rotation);
    
    // UNCOMMENT AND ADJUST THESE VALUES AS NEEDED:
    
    // 🔍 ZOOM CONTROLS:
    // camera.position.multiplyScalar(0.7);  // Zoom IN (closer) - use values < 1
    // camera.position.multiplyScalar(1.3);  // Zoom OUT (farther) - use values > 1
    
    // 📍 POSITION CONTROLS:
    // camera.position.set(100, 200, 300);   // Set exact position (x, y, z)
    // camera.position.x += 50;              // Move RIGHT
    // camera.position.x -= 50;              // Move LEFT
    // camera.position.y += 30;              // Move UP
    // camera.position.y -= 30;              // Move DOWN
    // camera.position.z += 100;             // Move FORWARD
    // camera.position.z -= 100;             // Move BACKWARD
    
    // 👀 LOOK AT CONTROLS:
    // camera.lookAt(0, 0, 0);               // Look at center
    // camera.lookAt(50, 0, 0);              // Look at point to the right
    
    // 🎯 COMMON HOMEPAGE ADJUSTMENTS:
    // camera.position.multiplyScalar(0.8);  // Slight zoom in
    // camera.position.y += 20;              // Lift camera up slightly
    // camera.lookAt(0, 0, 0);               // Ensure looking at center
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

export default App;
