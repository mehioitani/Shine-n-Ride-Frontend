import { useContext } from "react";
import { CartContext } from "../context/cartContext.jsx";

export const useCart = () => {
  const {
    cartServices,
    setCartServices,
    addToCart,
    removeFromCart,
    handleIncrement,
    handleDecrement,
  } = useContext(CartContext);

  return {
    cartServices,
    setCartServices,
    addToCart,
    removeFromCart,
    handleIncrement,
    handleDecrement,
  };
};
