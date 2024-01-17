import brand1 from "../../assets/images/Rice-brands/Aduanehene-perfume-rice.jpg";
import brand2 from "../../assets/images/Rice-brands/Copa-Jasmine-Rice.jpg";
import brand3 from "../../assets/images/Rice-brands/Champion-Long-grain-rice.jpg";
import brand4 from "../../assets/images/Rice-brands/Mr-Rabbit-Jasmine-Rice.jpg";
import brand5 from "../../assets/images/Rice-brands/Edwumawura-rice.jpg";
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
        <h1 className="text-[30px] mb-6">
          BRANDS
          <hr />
        </h1>

        <div >
          <Carousel responsive={responsive} className="w-full h-[250px] mb-[50px]">
            <div className="w-[250px] h-full">
              <Link>
                <img
                  src={brand1}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </Link>
            </div>
            <div className="w-[250px] h-full">
              <Link>
                <img
                  src={brand2}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </Link>
            </div>
            <div className="w-[250px] h-full">
              <Link>
                <img
                  src={brand4}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </Link>
            </div>
            <div className="w-[250px] h-full">
              <Link>
                <img
                  src={brand3}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </Link>
            </div>
            <div className="w-[250px] h-full">
              <Link>
                <img
                  src={brand5}
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
