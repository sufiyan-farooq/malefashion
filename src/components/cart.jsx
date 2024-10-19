import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { cartItems, incrementQuantity, decrementQuantity, removeItem, totalPrice } = useContext(CartContext);

  return (
    <>
      <div className="cart-container">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item  flex-col md:flex-row items-center justify-between py-4 border-b border-gray-200">
              <div className="w-24 h-24">
                <img src={item.image} alt={item.title} className="object-contain w-full h-full" />
              </div>
              <div className="flex flex-col flex-1 mx-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <button onClick={() => removeItem(item.id)} className="text-red-500 text-sm mt-2">Remove</button>
              </div>
              <div className="flex items-center">
                <button onClick={() => decrementQuantity(item.id)} className="px-2 py-1 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200">-</button>
                <span className="px-4">{item.quantity}</span>
                <button onClick={() => incrementQuantity(item.id)} className="px-2 py-1 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200">+</button>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold">${item.price}</p>
                <p className="text-sm text-gray-500">Total: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        )}
      </div>
      <div className="mt-6">
        <h4 className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</h4>
        <NavLink to="/products">
          <button className="mt-4 w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">Continue Shopping</button>
        </NavLink>
      </div>
    </>
  );
};

export default Cart;
