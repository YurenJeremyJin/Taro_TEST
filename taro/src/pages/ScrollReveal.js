import React, { useRef, useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Sr = ({ children, style }) => {
  const sectionRef = useRef(null);
  useEffect(() => {
    if (sectionRef.current)
      ScrollReveal().reveal(sectionRef.current, {
        reset: true,
        delay: 500,
        duration: 700,
        easing: 'ease-in',
        opacity: 0,
      });
  }, []);

  return <section ref={sectionRef} style={style}>{children}</section>;
};

export default Sr;