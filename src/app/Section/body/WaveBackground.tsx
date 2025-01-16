import { useEffect, useRef } from 'react';
import './WaveBackground.css';

const WaveBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="wave-container">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
        <div className="wave wave5"></div>
      </div>
    </div>
  );
};

export default WaveBackground;