import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



function CategorySection() {

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
      <div className="w-full mb-[200px] md:px-[15%] md:font-semibold">
        <h1 className="text-[16px] font-bold px-5 md:text-[30px] mb-6">
          CATEGORIES
          <hr />
        </h1>

        <div >
          <Carousel responsive={responsive} className="w-full h-[250px] mb-[50px] gap-10">
            <div className="w-[250px] h-full">
              <Link>
                <img
                  src="https://res.cloudinary.com/dlcqoiyb1/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1705514885/Ghana%20Rice/carousel/rice-bowl_tbz8ap.jpg"
                  alt="White Rice"
                  className="w-full h-full object-contain"
                />
              </Link>
              <h2 className="z-10">White Rice</h2>
            </div>
            <div className="w-[250px] h-full">
              <Link>
                <img
                  src="https://res.cloudinary.com/dlcqoiyb1/image/upload/v1705573552/Ghana%20Rice/category/close-up-rice-texture_ewbgvw.jpg"
                  alt="Red rice"
                  className="w-full h-full object-contain"
                />
                <h2>Red Rice</h2>
              </Link>
            </div>
            <div className="w-[250px] h-full">
              <Link>
                <img
                  src="https://res.cloudinary.com/dlcqoiyb1/image/upload/v1705573552/Ghana%20Rice/category/oats-peeled_e618mf.jpg"
                  alt="Brown Rice"
                  className="w-full h-full object-contain"
                />
              </Link>
              <h2>Brown Rice</h2>
            </div>
            <div className="w-[250px] h-full">
              <Link>
                <img
                  src="https://res.cloudinary.com/dlcqoiyb1/image/upload/v1705514885/Ghana%20Rice/carousel/rice-bowl_tbz8ap.jpg"
                  alt="White Rice"
                  className="w-full h-full object-contain"
                />
              </Link>
              <h2>White Rice</h2>
            </div>
            <div className="w-[250px] h-full">
              <Link>
                <img
                  src="https://res.cloudinary.com/dlcqoiyb1/image/upload/v1705575743/Ghana%20Rice/category/black-rice-scattered-from-sack_syxyte.jpg"
                  alt="Black Rice"
                  className="w-full h-full object-contain"
                />
              </Link>
              <h2>Black Rice</h2>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default CategorySection;
