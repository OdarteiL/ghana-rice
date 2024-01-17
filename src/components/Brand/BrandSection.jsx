import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function BrandSection() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <>
      <div className="w-full md:px-[15%] md:font-semibold">
        <h1 className="text-[12px] font-bold px-5 md:text-[30px] mb-6">
          BRANDS
          <hr />
        </h1>

        <div >
          <Carousel responsive={responsive} className="w-full h-[250px] mb-[50px]">
            <div className="w-[250px] h-full">
              <Link>
                <img
                  src="https://res.cloudinary.com/dlcqoiyb1/image/upload/v1705514930/Ghana%20Rice/Rice%20brands/Aduanehene-perfume-rice_fatlbe.jpg"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </Link>
            </div>
            <div className="w-[250px] h-full">
              <Link>
                <img
                  src="https://res.cloudinary.com/dlcqoiyb1/image/upload/v1705514922/Ghana%20Rice/Rice%20brands/Mr-Rabbit-Jasmine-Rice_bigse8.jpg"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </Link>
            </div>
            <div className="w-[250px] h-full">
              <Link>
                <img
                  src="https://res.cloudinary.com/dlcqoiyb1/image/upload/v1705514924/Ghana%20Rice/Rice%20brands/Edwumawura-rice_zrpldf.jpg"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </Link>
            </div>
            <div className="w-[250px] h-full">
              <Link>
                <img
                  src="https://res.cloudinary.com/dlcqoiyb1/image/upload/v1705514924/Ghana%20Rice/Rice%20brands/Royal-Farmers-Rice_jj5b6z.jpg"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </Link>
            </div>
            <div className="w-[250px] h-full">
              <Link>
                <img
                  src="https://res.cloudinary.com/dlcqoiyb1/image/upload/v1705514921/Ghana%20Rice/Rice%20brands/Champion-Long-grain-rice_p0swzp.jpg"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </Link>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default BrandSection;
