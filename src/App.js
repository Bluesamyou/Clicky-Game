import React, { useState, useEffect } from "react";
import "./App.css";
import uuid from "uuid";
import Card from "./components/Cards";
import Header from "./components/Header";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = () => {
    var imagesArray = [];
    for (var i = 0; i <= 10; i++) {
      imagesArray.push(`https://picsum.photos/seed/${uuid.v4()}/500/500`);
    }
    setImages(imagesArray);
  };

  const clickHandler = e => {
    e.preventDefault();

    var randScore = Math.floor(Math.random() * 2);
    if (randScore) {
      var newScore = score + 1;
      setScore(newScore);

      if (newScore > highScore) {
        setHighScore(newScore);
      }

      getImages();
    } else {
      setScore(0);
      getImages();
    }
  };
  return (
    <div className="App">
      <Header score={score} highScore={highScore} />
      <Card cardImage={images} clickHandler={clickHandler} />
    </div>
  );
}

export default App;
