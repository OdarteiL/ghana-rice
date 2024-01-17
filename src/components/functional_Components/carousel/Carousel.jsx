import rice from "../../../assets/images/carousel/jollof.jpg";
import bali from "../../../assets/images/carousel/rice-spoon.jpg";
import rice1 from "../../../assets/images/carousel/rice-arm.jpg";
import rice2 from "../../../assets/images/carousel/rice-farm.jpg";
import rice3 from "../../../assets/images/carousel/rice-bowl.jpg";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { useEffect, useState } from "react";

function Carousel() {
  const slides = [
    `url(${rice})`,
    `url(${bali})`,
    `url(${rice1})`,
    `url(${rice2})`,
    `url(${rice3})`,
  ];

  console.log(slides);

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    // Automatically move to the next slide every minute
    const interval = setInterval(() => {
      nextSlide();
    }, 40000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, nextSlide]);
  

  return (
    <>
      <div className="w-full h-[200px] md:h-[500px] relative group mb-24">
        <div
          style={{ backgroundImage: slides[currentIndex] }}
          className="w-full h-full bg-center bg-cover duration-500"
        ></div>
        {/* left arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={window.innerWidth <= 768 ? 10 : 30} />
        </div>

        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={window.innerWidth <= 768 ? 10 : 30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-2xl cursor-pointer">
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Carousel;
