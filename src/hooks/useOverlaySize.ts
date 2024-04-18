import { useState, useEffect } from "react";

interface Size {
  overlaySize: number | undefined;
}

export const useOverlaySize = (): Size => {
  const [overlaySize, setOverlaySize] = useState<Size>({ overlaySize: 0 })
  
  useEffect(() => {
    const handleResize = () => {
      setOverlaySize({ overlaySize: Math.round(Math.sqrt( window.innerWidth ** 2 + window.innerHeight ** 2) * 1.2) })
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return overlaySize
}
