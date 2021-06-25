import Carousel from "./Carousel.jsx";
import useWindowSize from "../utils/useWindowSize";
import React from "react";

const App = () => {
  const { width } = useWindowSize();

  return (
    <div
      style={{
        maxWidth: 1200,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 64,
      }}
    >
      <h1>Simple Carousel</h1>
      {width < 520 && <Carousel show={1} />}
      {width > 520 && width < 850 && <Carousel show={2} />}
      {width > 850 && width < 1300 && <Carousel show={3} />}
      {width > 1300 && <Carousel show={4} />}
    </div>
  );
};

export default App;
