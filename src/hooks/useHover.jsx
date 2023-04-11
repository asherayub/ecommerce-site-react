
import React from "react";
import { useRef } from "react";
const useHover = () => {
  const ref = useRef(null);
  const [hovered, setHovered] = React.useState(false);
  const enter = () => setHovered(true);
  const leave = () => setHovered(false);
  React.useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseenter", enter);
      node.addEventListener("mouseleave", leave);
      return () => {
        node.removeEventListener("mouseenter", enter);
        node.removeEventListener("mouseleave", leave);
      };
    }
  }, [ref.current]);
  return [ref, hovered];
};

export default useHover;
