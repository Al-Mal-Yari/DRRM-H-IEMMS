import { useState, useEffect } from "react";

const RotatingText = ({ texts, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const changeText = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);

    return () => clearInterval(changeText);
  }, [texts, interval]);

  return <p className="text-md italic tracking-wide mt-4">{texts[currentIndex]}</p>;
};

export default RotatingText;
