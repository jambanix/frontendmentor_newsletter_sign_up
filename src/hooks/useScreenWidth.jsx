
import { useState, useEffect } from "react"

const getScreenWidth = () => window.innerWidth;
const CUTOFF = 768;

export const useScreenWidth = () => {
  const [width, setWidth] = useState(getScreenWidth());
  
  const handleWidthChange = () => setWidth(width => getScreenWidth());

  useEffect(() => { 
    window.addEventListener("resize", handleWidthChange);
    return () => window.removeEventListener("resize", handleWidthChange);
  }, []);

  return (width < CUTOFF ? "mobile" : "desktop");

}