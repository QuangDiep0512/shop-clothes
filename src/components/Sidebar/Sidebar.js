import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faTrashCan,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.scss";
import { SidebarContext } from "../../context/SidebarContext";
import { CartContext } from "../../context/CartContext";
export const Sidebar = () => {
  const {
    cart,
    removeCart,
    increaseAmount,
    decreaseAmount,
    itemAmount,
    removeAllProduct,
    total,
  } = useContext(CartContext);
  const { isClose, toggleSidebar } = useContext(SidebarContext);

  return (
    isClose === false && (
      <div className="sideBar">
        <div className="sideBar--headder">
          <h3 className="sideBar--headder-heading">{`Shopping Bag (${itemAmount})`}</h3>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="arrow"
            onClick={() => toggleSidebar()}
          />
        </div>
        {cart.map((item) => {
          return (
            <div className="product-lists" key={item.id}>
              <div className="product-lists--item">
                <div className="image">
                  <img src={item.image} alt="" />
                </div>
                <div className="information">
                  <p className="information-title">{item.title}</p>
                  <div className="amount">
                    <div className="amount--quantity">
                      <div
                        className="prev"
                        onClick={() => decreaseAmount(item.id)}
                      >
                        -
                      </div>
                      <span className="quantum">{item.amount}</span>
                      <div
                        className="increase"
                        onClick={() => increaseAmount(item.id)}
                      >
                        +
                      </div>
                    </div>
                    <div className="amount--pice">${item.price}</div>
                  </div>
                </div>
              </div>
              <div className="product-lists--right">
                <FontAwesomeIcon
                  icon={faXmark}
                  className="close"
                  onClick={() => removeCart(item.id)}
                />
                <div className="total-price">
                  ${parseFloat(item.price * item.amount).toFixed(2)}
                </div>
              </div>
            </div>
          );
        })}
        <div className="sideBar--footer">
          <p className="sideBar--footer-total">
            Total: ${parseFloat(total).toFixed(2)}
          </p>
          <div className="bin" onClick={() => removeAllProduct()}>
            <FontAwesomeIcon icon={faTrashCan} className="" />
          </div>
        </div>
      </div>
    )
  );
};
