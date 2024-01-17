import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { useCallback, useEffect, useState } from "react";

function Carousel() {
  const slides = [
    "https://res.cloudinary.com/dlcqoiyb1/image/upload/v1705515854/Ghana%20Rice/carousel/rice-arm_amyykz.jpg",
    "https://res.cloudinary.com/dlcqoiyb1/image/upload/v1705515765/Ghana%20Rice/carousel/rice-spoon_d3gdkh.jpg",
    "https://res.cloudinary.com/dlcqoiyb1/image/upload/v1705515813/Ghana%20Rice/carousel/rice-farm_rnwhnv.jpg",
    "https://res.cloudinary.com/dlcqoiyb1/image/upload/v1705514885/Ghana%20Rice/carousel/rice-bowl_tbz8ap.jpg",
    "https://res.cloudinary.com/dlcqoiyb1/image/upload/v1705515889/Ghana%20Rice/carousel/jollof_gzij9v.jpg",
  ];


  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  
  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

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
      <div className="w-full h-[200px] md:h-[500px] relative group mb-16">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex]})` }}
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
