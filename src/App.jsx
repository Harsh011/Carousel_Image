import { useState } from "react";
import "./App.css";
import CarouselImage from "./components/Carousel-Image";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CarouselImage />
    </>
  );
}

export default App;
