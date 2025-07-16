import React from 'react';
import Spline from '@splinetool/react-spline';
import './App.css';

function App() {
  const onLoad = (spline: any) => {
    const camera = spline.camera;
    
    // Log current camera settings to help you adjust
    console.log('Current camera position:', camera.position);
    console.log('Current camera rotation:', camera.rotation);
    
    // UNCOMMENT AND ADJUST THESE VALUES AS NEEDED:
    
    // Option 1: Set specific camera position
    // camera.position.set(100, 200, 300); // Adjust x, y, z values
    
    // Option 2: Zoom in/out from current position
    // camera.position.multiplyScalar(0.7); // Zoom in (closer)
    // camera.position.multiplyScalar(1.3); // Zoom out (farther)
    
    // Option 3: Move camera relative to current position
    // camera.position.x += 50; // Move right
    // camera.position.y += 30; // Move up
    // camera.position.z += 100; // Move forward
    
    // Option 4: Change what the camera looks at
    // camera.lookAt(0, 0, 0); // Look at center
    // camera.lookAt(50, 0, 0); // Look at point to the right
    
    // Example: Common homepage adjustments
    // camera.position.multiplyScalar(0.8); // Zoom in slightly
    // camera.position.y += 20; // Move camera up a bit
  };

  return (
    <div className="App">
      <div className="spline-container">
        <Spline 
          scene="https://prod.spline.design/9E7HoXAsefMIS6Gc/scene.splinecode" 
          onLoad={onLoad}
        />
      </div>
    </div>
  );
}

export default App;
