import { useEffect, useRef, useState } from "react";
import Data from "../data/Data.json";

const CarouselImage = () => {
  const [data, setData] = useState(Data);
  const [index, setIndex] = useState(0);
  // console.log(data);

  const DATA_LENGTH = data.length;
  const ref = useRef(null);
  // console.log(ref);
  const handleNext = () => {
    setIndex((prev) => {
      if (prev == DATA_LENGTH - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  const handlePrev = () => {
    if (index == 0) {
      setIndex(DATA_LENGTH - 1);
    } else {
      setIndex(index - 1);
    }
  };

  useEffect(() => {
    ref.current = setInterval(handleNext, 1000);

    return () => {
      clearInterval(ref.current);
    };
  }, []);
  return (
    <div>
      <div
        className="container"
        onMouseEnter={() => clearInterval(ref.current)}
        onMouseLeave={() => (ref.current = setInterval(handleNext, 1000))}
      >
        <div onClick={handlePrev} className="left-arrow">
          {"<"}
        </div>
        <img src={data[index]?.download_url} alt="" />
        <div onClick={handleNext} className="right-arrow">
          {">"}
        </div>
      </div>
    </div>
  );
};

export default CarouselImage;
