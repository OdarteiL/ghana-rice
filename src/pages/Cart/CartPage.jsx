import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/cartSlice';

function CartPage() {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    // You can dispatch an action to update the quantity in the store here
    console.log(`Update quantity of item ${itemId} to ${newQuantity}`);
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <section className="py-24 bg-gray-100 font-poppins light:bg-gray-700">
      <div className="px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
        <div>
          <h2 className="mb-8 text-4xl font-bold light:text-gray-400">Your Cart</h2>
          <div className="p-6 mb-8 border bg-gray-50 light:bg-gray-800 light:border-gray-800">
            <div className="flex-wrap items-center hidden mb-6 -mx-4 md:flex md:mb-8">
              <div className="w-full px-4 mb-6 md:w-3/6 lg:w-4/12 md:mb-0">
                <h2 className="font-bold text-gray-500 light:text-gray-400">Product Name</h2>
              </div>
              <div className="hidden px-4 lg:block lg:w-2/12">
                <h2 className="font-bold text-gray-500 light:text-gray-400">Price</h2>
              </div>
              <div className="w-auto px-4 md:w-1/6 lg:w-2/12 ">
                <h2 className="font-bold text-gray-500 light:text-gray-400">Quantity</h2>
              </div>
              <div className="w-auto px-4 text-right md:w-1/6 lg:w-2/12 ">
                <h2 className="font-bold text-gray-500 light:text-gray-400">Subtotal</h2>
              </div>
            </div>

            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <>
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center border-b border-gray-300 py-2">
                    <img src={item.imageSrc} alt={item.imageAlt} className="w-16 h-16 object-cover mr-4" />
                    <div className="w-3/6 lg:w-4/12">
                      <p className="font-bold">{item.name}</p>
                      <p className="text-gray-600">${item.price}</p>
                    </div>
                    <div className="w-1/6 lg:w-2/12 ">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, e.target.value)}
                        className="w-full px-2 py-1 text-gray-700 light:text-gray-400 border border-gray-300 light:border-gray-700"
                      />
                    </div>
                    <div className="w-1/6 text-right lg:w-2/12 ">
                      <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <button
                      className="ml-auto text-red-500 hover:text-red-700"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <div className="mt-4">
                  <p className="font-bold">Total: $ {totalAmount}</p>
                </div>
              </>
            )}
          </div>

          {/* Other sections remain unchanged */}
        </div>
      </div>
    </section>
  );
}

export default CartPage;
