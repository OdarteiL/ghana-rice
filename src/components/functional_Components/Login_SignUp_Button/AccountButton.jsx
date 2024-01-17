import userIcon from "../../../assets/images/user.png";
import basket from "../../../assets/images/basket.png";
import { Link } from "react-router-dom";

function AccountButton() {
  return (
    <>
      <div className="flex gap-1 absolute top-5 left-[327px]">
        <div>
          <Link to={"/user-account"}>
            <img
              src={userIcon}
              alt="user icon"
              className="w-9 md:hidden lg:hidden"
            />
          </Link>
        </div>
        <div>
          <Link to={"/cart"}>
            <img
              src={basket}
              alt="user icon"
              className="w-9 md:hidden lg:hidden"
            />
          </Link>
        </div>
      </div>
      <div className="hidden md:flex">
        Login / SignUp <br />
        My Account
      </div>
    </>
  );
}

export default AccountButton;
