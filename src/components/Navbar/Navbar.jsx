import { Link } from "react-router-dom";
import SearchButton from "../functional_Components/SearchButton/SearchButton";
import CartButton from "../functional_Components/CartBotton/CartButton";
import LogoButton from "../functional_Components/logoButton/LogoButton";
import AccountButton from "../functional_Components/Login_SignUp_Button/AccountButton";
import menu from "../../assets/images/menu.png";
import NavLinks from "../functional_Components/NavLinks/NavLinks";

function Navbar() {
  return (
    <>
      <div className="w-full h-full md:h-[200px] bg-white shadow-lg">
        <div className=" py-5 md:px-[4%] lg:px-[4%] flex flex-col justify-center items-center w-full h-full">
          <div  className=" md:flex justify-between md:max-w-[1248px] gap-16 mb-6">
            <div className="flex">
              <div className="w-7 md:hidden lg:hidden mr-1">
                <img src={menu} alt="menu bar" />
              </div>
              <Link to={"/"}>
                <LogoButton />
              </Link>
            </div>

            <div className="mt-5">
              <SearchButton />
            </div>
            <div className="flex justify-between items-center gap-6">
              <div>
                <Link to={"/login"}>
                  <AccountButton />
                </Link>
              </div>
              <div>
                <Link>
                  <CartButton />
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden md:flex lg:flex">
              <NavLinks />
            </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
