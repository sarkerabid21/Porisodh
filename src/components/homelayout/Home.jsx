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
   <div>
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
          className="lg:w-[60px] w-[30px] h-[30px]  lg:h-[60px] rounded-full bg-secondary border-none text-white font-bold hover:bg-white hover:text-black transition-all duration-500 cursor-pointer"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="lg:w-[60px] w-[30px] h-[30px]  lg:h-[60px] rounded-full bg-secondary border-none text-white font-bold hover:bg-white hover:text-black transition-all duration-500 cursor-pointer"
        >
          &gt;
        </button>
        
      </div>
    </div>
    <div>
    <section className="py-12 bg-gray-100">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6">Our Services</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {['Water Bill', 'Electricity Bill', 'Gas Bill', 'Internet', 'Mobile Recharge', 'Educational Fee'].map((item, idx) => (
        <div key={idx} className="bg-[#BEFEA8] p-6 shadow rounded-xl hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">{item}</h3>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
    <div className="bg-gray-100">
    <section className="py-12">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-10">How It Works</h2>
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
      {['Register','Login', 'Select Bill', 'Input Info', 'Make Payment'].map((step, i) => (
        <div key={i} className="bg-[#BEFEA8] p-5 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-2">{`Step ${i + 1}`}</h3>
          <p>{step}</p>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>

    <div>
    <section className="py-12 bg-gray-200">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[1, 2, 3].map((_, idx) => (
        <div key={idx} className="bg-primary text-amber-100 p-6 rounded-lg shadow">
          <p className="italic">"Great experience! Fast and reliable."</p>
          <h4 className="mt-4 font-semibold">— User {idx + 1}</h4>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
    <div>
    <section className="py-20  bg-gray-100">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
    <div className="space-y-4">
      <details className="bg-white p-4 rounded-lg shadow cursor-pointer">
        <summary className="font-semibold">Is this service safe?</summary>
        <p className="mt-2 text-gray-600">Yes, we use encrypted payment gateways.</p>
      </details>
      <details className="bg-white p-4 rounded-lg shadow cursor-pointer">
        <summary className="font-semibold">Can I pay from mobile?</summary>
        <p className="mt-2 text-gray-600">Absolutely. Our site is mobile responsive.</p>
      </details>
    </div>
  </div>
</section>

    </div>
   </div>
  );
};

export default Home;
