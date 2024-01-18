import { Link } from "react-router-dom";
import basket from "../../../assets/images/basket.png"
import { useSelector } from 'react-redux'

function CartButton() {

  const cartItems = useSelector(state => state.cart.cart)

  return(
    <>
      <div className="hidden relative md:flex">
        <Link to={"/cart"}>
          <img src={basket} alt="shopping basket" className="w-10 md:48 lg:64" /> <small className="absolute left-9 top-0 p-1  bg-green-200 rounded-[50%]"> {cartItems.length} </small>
        </Link>
      </div>
    </>
  )
}

export default CartButton;
