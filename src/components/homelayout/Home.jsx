import { useState } from "react";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const thumbnails = [img1, img2, img4, img3];
  const totalSlides = thumbnails.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative lg:w-screen lg:h-[600px] h-[400px] w-full overflow-hidden bg-black text-white">
      {/* Slider Images */}
      <div className="absolute inset-0 w-full h-full">
        {thumbnails.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 lg:w-full lg:h-full transition-opacity duration-1000 ${
              currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img src={image} alt="slide" className="lg:w-full  lg:h-full lg:object-cover" />
          </div>
        ))}
      </div>

      {/* Thumbnails */}
      <div className=" absolute bottom-[50px] left-280 transform -translate-x-1/2 flex gap-5 z-[100]">
        {thumbnails.map((image, index) => (
          <div
            key={index}
            className={`w-[150px] h-[220px] relative cursor-pointer rounded-2xl ${
              currentIndex === index ? "ring-4 ring-red-400" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <img
              src={image}
              alt="thumbnail"
              className=" lg:w-full lg:h-full object-cover rounded-[20px] shadow-[5px_0_15px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-[40%] right-[12%] z-[100] max-w-[30%] lg:w-[300px] flex gap-2 items-center">
        <button
          onClick={prevSlide}
          className="lg:w-[60px] w-[30px] h-[30px]  lg:h-[60px] rounded-full bg-secondary border-none text-white font-bold hover:bg-white hover:text-black transition-all duration-500"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="lg:w-[60px] w-[30px] h-[30px]  lg:h-[60px] rounded-full bg-secondary border-none text-white font-bold hover:bg-white hover:text-black transition-all duration-500"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Home;
