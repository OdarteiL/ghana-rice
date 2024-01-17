import { Link } from "react-router-dom";
import basket from "../../../assets/images/basket.png"

function CartButton() {
  return(
    <>
      <div className="hidden md:flex">
        <Link>
          <img src={basket} alt="shopping basket" className="w-10 md:48 lg:64" />
        </Link>
      </div>
    </>
  )
}

export default CartButton;
