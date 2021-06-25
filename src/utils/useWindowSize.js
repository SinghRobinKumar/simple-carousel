import React from "react";

const useWindowState = () => {
  const [width, setWidth] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleWidth = () => {
    setWidth({ width: window.innerWidth, height: window.innerHeight });
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWidth);

    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  return width;
};

export default useWindowState;
