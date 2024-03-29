import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import "./ProductDetail.scss";
import { CartContext } from "../../context/CartContext";
import img from "../../img/logo.PNG";
export const ProductDetail = () => {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const productDetail = products.find((item) => {
    return item.id === parseInt(id);
  });
  return (
    <div className="detail">
      <div className="detail--img">
        <img
          src={productDetail && productDetail.image ? productDetail.image : img}
          alt="abc"
        />
      </div>
      <div className="detail--information">
        <p className="title">{productDetail.title}</p>
        <p className="price">${productDetail.price}</p>
        <p className="description">{productDetail.description}</p>
        <button
          className="btn-submit"
          onClick={() => addToCart(productDetail, productDetail.id)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
