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
      <div className="w-full md:h-[200px] bg-white shadow-lg">
        <div className="flex flex-col justify-center w-full h-full px-3 ">
          <div  className="w-full gap-16 md:flex md:px-[10%] mb-6 ">

            <div className="flex items-center pt-5 md:w-[20%]">
              <div className="md:hidden lg:hidden mr-1">
                <img src={menu} alt="menu bar" className="w-4" />
              </div>
              <Link to={"/"}>
                <LogoButton />
              </Link>
            </div>

            <div className="md:w-[60%] mt-7">
              <SearchButton />
            </div>
            <div className="md:w-[20%] flex items-center gap-6">
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
