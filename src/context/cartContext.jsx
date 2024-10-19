import { createContext, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    const arr = cartItems;
    const findIndex = cartItems.findIndex((data) => data.id === item.id);

    if (findIndex === -1) {
      arr.push({ ...item, quantity: 1 }); // Ensure quantity starts at 1 when adding a new item
      toast.success("Item added to cart!");
    } else {
      arr[findIndex].quantity++;
      toast.info("Item quantity updated!");
    }
    setCartItems([...arr]);
  };

  const incrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    toast.info("Item quantity increased!");
  };

  const decrementQuantity = (id) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

      // If the quantity reaches 1 and the item is decremented, show a message
      const itemDecremented = prevItems.find((item) => item.id === id);
      if (itemDecremented && itemDecremented.quantity === 1) {
        toast.warning("Quantity cannot be less than 1.");
      }

      return updatedItems;
    });
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    toast.error("Item removed from cart!");
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        incrementQuantity,
        decrementQuantity,
        removeItem,
        setCartItems,
        totalPrice,
      }}
    >
      {children}
      <ToastContainer />
    </CartContext.Provider>
  );
}
