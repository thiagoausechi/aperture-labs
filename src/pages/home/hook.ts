import { getScreenAspect } from "@/utils/get-screen-aspect";
import { useEffect, useState } from "react";
import { PerspectiveCamera } from "three";

export const useHomePageLogic = () => {
  const [aspect, setAspect] = useState(getScreenAspect());
  const camera = new PerspectiveCamera(45, aspect, 0.1, 1000);

  useEffect(() => {
    const handleResize = () => setAspect(getScreenAspect());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { camera };
};
