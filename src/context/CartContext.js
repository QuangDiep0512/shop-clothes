import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const configToast = {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    // transition: Slide,
  };
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const amount = cart.reduce((item, index) => {
      return item + index.amount;
    }, 0);
    setItemAmount(amount);
  }, [cart]);

  useEffect(() => {
    const total = cart.reduce((item, index) => {
      return item + index.price * index.amount;
    }, 0);
    setTotal(total);
  }, [cart]);

  //Xoá tất cả các sản phẩm trong giỏ hàng
  const removeAllProduct = () => {
    setCart([]);
  };

  //Thêm vào Giỏ Hàng
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
    toast.success("Thêm vào giỏ hàng thành công!", configToast);
  };

  //Xoá Sản phẩm trong giỏ hàng
  const removeCart = (id) => {
    const removeItem = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(removeItem);
  };

  //Tăng số lượng sản phẩm trong giỏ hàng
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    addToCart(cartItem, id);
  };

  //Giảm số lượng sản phẩm trong giỏ hàng
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeCart(id);
    }
  };
  return (
    <CartContext.Provider
      value={{
        addToCart,
        cart,
        setCart,
        removeCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        removeAllProduct,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
