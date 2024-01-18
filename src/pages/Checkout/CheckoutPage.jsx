import { useSelector } from "react-redux"

function CheckoutPage() {

    const cartItems = useSelector(state => state.cart.cart)

  return (
    <div>CheckoutPage</div>
  )
}

export default CheckoutPage