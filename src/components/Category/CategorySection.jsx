import { Link } from "react-router-dom";

function CategorySection() {
  return (
    <>
      <div className="w-full md:px-[15%] md:font-semibold">
        <h1 className="text-[30px] mb-6">
          CATEGORIES
          <hr />
        </h1>

        <div className="w-full h-[250px] mb-[50px] grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 md:flex gap-7">
          <div className="w-[250px] h-full">
            <Link>
              <img src="" alt="" className="w-full h-full object-contain" />
            </Link>
          </div>
          <div className="w-[250px] h-full">
            <Link>
              <img src="" alt="" className="w-full h-full object-contain" />
            </Link>
          </div>
          <div className="w-[250px] h-full">
            <Link>
              <img src="" alt="" className="w-full h-full object-contain" />
            </Link>
          </div>
          <div className="w-[250px] h-full">
            <Link>
              <img src="" alt="" className="w-full h-full object-contain" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategorySection;
