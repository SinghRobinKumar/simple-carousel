import React, { useState } from "react";
import "./css/carousel.css";
import Card from "./Card";
import Data from "./Data";

const Carousel = props => {
  const [show, setShow] = useState(props.show);
  const [posts, setPosts] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showing, setShowing] = useState(1);
  const [nextShow, setNextShow] = useState(show);
  const [length, setLength] = useState();
  const [touchPosition, setTouchPosition] = useState(null);

  React.useEffect(() => {
    setPosts(Data);
    setLength(Data.length);
  }, []);

  const handleTouchStart = e => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = e => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  const buttons = () => {
    return (
      <div className="buttons">
        {currentIndex > 0 && (
          <button onClick={prev} className="left-arrow">
            &lt;
          </button>
        )}
        <span>
          Showing {showing} - {nextShow} of {length}
        </span>
        {currentIndex < length - show && (
          <button onClick={next} className="right-arrow">
            &gt;
          </button>
        )}
      </div>
    );
  };

  const next = () => {
    if (currentIndex < length - show) {
      setCurrentIndex(prevState => prevState + 1);
      setShowing(showing + 1);
      setNextShow(nextShow + 1);
    } else {
      setCurrentIndex(prevState => prevState + 0.5);
      setTimeout(() => {
        setCurrentIndex(prevState => prevState - 0.5);
      }, 100);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1);
      setShowing(showing - 1);
      setNextShow(nextShow - 1);
    } else {
      setCurrentIndex(prevState => prevState - 1);
      setTimeout(() => {
        setCurrentIndex(prevState => prevState + 0.5);
      }, 100);
    }
  };

  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <div className="carousel-container container">
      <div className="carousel-wrapper">
        <div
          className="carousel-content-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className={`carousel-content show-${show}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
            }}
          >
            <Card posts={posts} />
          </div>
        </div>
      </div>
      {buttons()}
    </div>
  );
};

export default Carousel;
