import { useEffect, useState } from "react";
import { db } from "../data/db";

const useCart = () => {

  const initialCart = () => {
    const localStoreCart = localStorage.getItem("cart");
    return localStoreCart ? JSON.parse(localStoreCart) : [];
  }
  const data = db;

  const [cart, setCart] = useState(initialCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(item) {
    const itmeExists = cart.findIndex((automovil) => automovil.id === item.id);

    if (itmeExists >= 0) {
      const updatedCart = [...cart];
      updatedCart[itmeExists]. quantity += 1;
      setCart(updatedCart);
    } else {
      item.quantity = 1;
      setCart([...cart, item]);
    }
  }

  function removeFromCart(idEliminar) {
    setCart(preCart => preCart.filter(automovil => automovil.id !== idEliminar));
  }

  function decreseQuantity(id) {
    const updatedCart = cart.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }

      return item
    })
    setCart(updatedCart);
  }

  function increaseQuantity(id) {
    const updatedCart = cart.map(item=> {
      if (item.id=== id) {
        return { ...item, quantity: item.quantity + 1 };
      }

      return item;
    })
    setCart(updatedCart);
  }

  function clearCart() {
    setCart([]);
  }

  const total = cart.reduce((total, { quantity, price }) => {
    return total + quantity * price;
  }, 0);

  return {
    data,
    cart,
    addToCart,
    removeFromCart,
    decreseQuantity,
    increaseQuantity,
    clearCart,
    total
  };
}

export {useCart}