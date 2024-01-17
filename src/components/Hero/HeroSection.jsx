import { Link } from "react-router-dom"

function HeroSection() {
  return (
    <div className="ml-[60px] absolute top-[190px] md:absolute md:top-[300px] md:ml-[150px] font-bold">
        <h1 className="text-white shadow-2xl text-[16px] top-5 md:text-[40px] md:shadow-lg">
            Welcome to <br /> Ghana's No. 1 <br /> Shopping Center
        </h1>
        <button className="text-[9px] mr-3 mt-3 shadow-xl py-2 px-5 md:mt-5 md:mr-9 rounded-[50px] bg-white md:shadow-md md:text-[14px] md:py-4 md:px-9">
            <Link to={"/products"}>
                Shop Now
            </Link>
        </button>
        <button className="text-[9px] mt-3 shadow-xl py-2 px-5 md:mt-5 md:mr-9 rounded-[50px] bg-green-500 md:shadow-md md:text-[14px] md:py-4 md:px-9">
            <Link>
                Start Selling
            </Link>
        </button>
    </div>
  )
}

export default HeroSection