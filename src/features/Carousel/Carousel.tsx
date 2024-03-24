import React, { FC, useState, useEffect } from "react";
import styles from "./Carousel.module.css";
import first from "../../assets/first.png";
import second from "../../assets/second.png";
import third from "../../assets/third.png";
import fourth from "../../assets/fourth.png";
import fiveth from "../../assets/fiveth.png";

import right from "../../assets/arrowRight.svg";
import { ImageObject } from "./module";
import Like from "../../shared/Like/Like";

const imagesArray: ImageObject = {
  first,
  second,
  third,
  fourth,
  fiveth,
};

const Carousel: FC = () => {
  const [images, setImages] = useState<string>(first);
  const [imageArray, setImageArray] = useState<string[]>([]);

  const handleNext = () => {
    const index = imageArray.indexOf(images);
    if (index === imageArray.length - 1) {
      setImages(imageArray[0]);
    } else {
      setImages(imageArray[index + 1]);
    }
  };

  const handlePrev = () => {
    const index = imageArray.indexOf(images);
    if (index === 0) {
      setImages(imageArray[imageArray.length - 1]);
    } else {
      setImages(imageArray[index - 1]);
    }
  };

  useEffect(() => {
    setImageArray(Object.values(imagesArray));
  }, []);

  return (
    <div className={`${styles.carousel} container`}>
      <img className={styles.main_pic} src={images} alt="" />
      <div className={styles.pictures}>
        <Like
          onClick={handlePrev}
          size="medium"
          style={{
            transform: "rotate(180deg)",
            padding: "8px 0px",
            minHeight: "70px",
          }}>
          <img src={right} alt="" />
        </Like>
        {imageArray.map((item, index) => (
          <img key={index} src={item} alt="" />
        ))}
        <Like
          onClick={handleNext}
          size="medium"
          style={{ padding: "8px 0px", minHeight: "70px" }}>
          <img src={right} alt="" />
        </Like>
      </div>
    </div>
  );
};

export default Carousel;
