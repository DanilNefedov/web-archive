'use client'

import { useEffect, useState } from "react";

export function FrameComponent() {
    const [hasError, setHasError] = useState(false);
  
    const handleFrameError = () => {
      setHasError(true);
    };
  
    return (
      <div>
        {hasError ? (
          <div>Сайт недоступен для отображения.</div>
        ) : (
          <iframe
            src="https://www.dota2.com/home"
            title="Rozetka Frame"
            onError={handleFrameError}
          ></iframe>
        )}
      </div>
    );
  }