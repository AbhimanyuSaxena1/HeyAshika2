import React, { useState, useRef } from 'react';
import { FaHeart } from "react-icons/fa";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import ILY from "../assets/ILY.mp3";

function Cards() {
  const [val, setVal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [img1, img2, img3, img4];
  const audioRef = useRef(null);

  const handleSpanClick = () => {
    setVal(!val);
    if (audioRef.current) {
      audioRef.current.src = ILY;
      audioRef.current.play();
    }
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className='p-4 w-full relative h-screen bg-zinc-200 flex justify-center items-center'>
      <audio ref={audioRef}></audio>
      <img 
        src={images[currentImageIndex]} 
        className='absolute h-full w-full object-cover blur-lg transition-all duration-1000' 
        alt="" 
        style={{ filter: 'blur(10px)' }}
      />
      <h1
        className={`${val === false ? "text-[#f75590]" : "text-[#FCE4DB]"} z-20 text-7xl stroke-black font-["Salita"] absolute top-[13%] lg:top-[20%] lg:text-8xl lg:left-[10%]`} 
        style={{ textShadow: `${val === false ? '2px 2px 0 #FCE4DB, -2px -2px 0 #FCE4DB' : '2px 2px 0 #f75590, -2px -2px 0 #f75590'}` }}
      >
        Hey
      </h1>
      <h1
        className={`${val === false ? "text-[#FCE4DB]" : "text-[#f75590]"} z-20 text-8xl rounded-full font-["Salita"] absolute top-[20%] lg:top-[30%] lg:text-9xl lg:left-[10%]`}
        style={{ textShadow: `${val === false ? '2px 2px 0 #f75590, -2px -2px 0 #f75590' : '2px 2px 0 #FCE4DB, -2px -2px 0 #FCE4DB'}` }}
      >
        Palak
      </h1>
      <h1
        className={`${val === false ? "text-[#FCE4DB]" : "text-[#f75590]"} z-20 text-4xl rounded-full font-["Salita"] absolute bottom-[18%] lg:top-[45%] lg:text-4xl lg:left-[10%]`}
      >
        I love you so much❤️
      </h1>
      <div
        className={`rounded-xl w-75 h-100 ${
          val === false ? "border-[#f75590]" : "border-[#FCE4DB]"
        } border-6 border-dashed relative overflow-hidden flex justify-center items-center`}
      >
        <div
          className='w-full h-full flex transition-transform duration-1000 transform'
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              className='object-cover h-full w-full transition-all duration-1000'
              alt={`image-${index}`}
            />
          ))}
        </div>
        <span
          onClick={handleSpanClick}
          className={`${
            val === false ? "scale-100" : "scale-150"
          } w-10 h-10 rounded-full -translate-x-[50%] flex items-center justify-center text-xl absolute bottom-10 left-1/2 ${
            val === false ? "bg-[#f991cc] text-[#ffdafc]" : "bg-[#ffdafc] text-[#f991cc]"
          }`}
        >
          <FaHeart />
        </span>
      </div>
    </div>
  );
}

export default Cards;
