import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/ProductContext";
import "./Home.scss";
import { Link, NavLink, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faChevronDown,
  faEye,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/CartContext";
import ReactPaginate from "https://cdn.skypack.dev/react-paginate@7.1.3";
import getApiProduct from "../../api/getAPI";
import { SlideShow } from "../../components/SlideShow/SlideShow";
export const Home = () => {
  const { products, categoriesProduct } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const [allProduct, setAllProduct] = useState([]);
  const params = useParams();
  const categoryProduct = products.filter((item) => {
    return item.category === params.categories;
  });

  const filterCategories = async (id) => {
    const response = await getApiProduct.getSearchId(id);
    setAllProduct([response]);
  };

  const handlePageClick = () => {
    console.log("Click page");
  };

  useEffect(() => {
    if (params && params.categories) {
      setAllProduct(categoryProduct);
    } else if (params && params.id) {
      filterCategories(params.id);
    } else {
      setAllProduct(products);
    }
  }, [params, products]);
  return (
    <>
      <div className="home">
        <SlideShow />
        <div className="main">
          <div className="sidebar">
            <h3 className="sidebar-heading">
              Danh mục sản phẩm
              <FontAwesomeIcon className="icon-angle" icon={faChevronDown} />
            </h3>
            <div className="sidebar-menu">
              <ul>
                <li className="item-product">
                  <NavLink to="/all" className="link" activeclassname="active">
                    <FontAwesomeIcon
                      icon={faCaretRight}
                      className="iconCaretRight"
                    />
                    Tất cả
                  </NavLink>
                </li>
                {categoriesProduct.map((item, index) => {
                  return (
                    <li className="item-product" key={index}>
                      <NavLink
                        to={`/${item}`}
                        activeclassname="active"
                        className="link"
                      >
                        <FontAwesomeIcon
                          icon={faCaretRight}
                          className="iconCaretRight"
                        />
                        {item}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="content">
            {allProduct.map((item, index) => {
              return (
                <div className="content--product" key={index}>
                  <Link to={`/product/${item.id}`} className="link">
                    <div className="content--product-image">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="content--product-information">
                      <p className="category">{item.category}</p>
                      <p className="title">{item.title}</p>
                      <p className="price">${item.price}</p>
                    </div>
                  </Link>
                  <div className="function">
                    <div
                      className="addCart"
                      onClick={() => addToCart(item, item.id)}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </div>
                    <Link to={`/product/${item.id}`} className="link">
                      <div className="detailProduct">
                        <FontAwesomeIcon icon={faEye} />
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={5}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
};
