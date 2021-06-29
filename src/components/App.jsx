import Carousel from "./Carousel.jsx";
import useWindowSize from "../utils/useWindowSize";
import React from "react";
import Data from "./Data";

const App = () => {
  const { width } = useWindowSize();
  const length = Data.length;

  const renderHandler = () => {
    return (
      <>
        {length === 1 && (
          <>
            {width < 520 && <Carousel show={1} />}
            {width > 520 && width < 850 && <Carousel show={1} />}
            {width > 850 && width < 1600 && <Carousel show={1} />}
            {width > 1600 && <Carousel show={1} />}
          </>
        )}
        {length === 2 && (
          <>
            {width < 520 && <Carousel show={1} />}
            {width > 520 && width < 850 && <Carousel show={2} />}
            {width > 850 && width < 1600 && <Carousel show={2} />}
            {width > 1600 && <Carousel show={2} />}
          </>
        )}
        {length > 3 && (
          <>
            {width < 520 && <Carousel show={1} />}
            {width > 520 && width < 850 && <Carousel show={2} />}
            {width > 850 && width < 1600 && <Carousel show={3} />}
            {width > 1600 && <Carousel show={4} />}
          </>
        )}
      </>
    );
  };

  return (
    <div
      style={{
        maxWidth: 1200,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 64,
      }}
    >
      <h2 style={{ paddingBottom: "20px" }} className="container">
        Simple Carousel
      </h2>

      {renderHandler()}
    </div>
  );
};

export default App;
