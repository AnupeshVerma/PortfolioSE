import { useEffect, useRef } from "react";
import { useInView, useAnimation } from "framer-motion";

function useAnimationInView() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  return { ref, mainControls, slideControls };
}

export default useAnimationInView;
