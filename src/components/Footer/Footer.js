import React from "react";
import "./Fotter.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSkype,
  faSquareFacebook,
  faSquareInstagram,
  faSquareTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane, faRegistered } from "@fortawesome/free-solid-svg-icons";
import imgFotter from "../../img/fotter.PNG";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="fotter">
      <div className="fotter-list">
        <h3 className="fotter-list--heading">HOTLINE:028.36222 999</h3>
        <div className="fotter-list--title">
          <p>CTY TNHH KHANG KHÔI</p>
          <p>Địa chỉ: 213 Lê Quang Định, P7, Bình Thạnh, TPHCM</p>
          <p>
            GPKD: 0309910540 do sở kế Hoạch và Đầu Tư TPHCM cấp ngày 05/04/2010
          </p>
          <p>
            <FontAwesomeIcon icon={faRegistered} /> Bản quyền thuộc thời trang
            K&K Fashion
          </p>
        </div>
      </div>
      <div className="fotter-list">
        <h3 className="fotter-list--heading">THÔNG TIN LIÊN HỆ</h3>
        <div className="fotter-list--title">
          <Link to="/" className="link">
            <p>Về chúng tôi</p>
          </Link>
          <Link to="/" className="link">
            <p>Liên hệ</p>
          </Link>
          <Link to="/" className="link">
            <p>Hệ thống 13 Showrooms</p>
          </Link>
          <Link to="/" className="link">
            <p>Thời trang, phụ kiện Nam-Nữ</p>
          </Link>
          <Link to="/" className="link">
            <p>Fashion 2024</p>
          </Link>
        </div>
      </div>
      <div className="fotter-list">
        <h3 className="fotter-list--heading">HỖ TRỢ KHÁCH HÀNG</h3>
        <div className="fotter-list--title">
          <Link to="/" className="link">
            <p>Chính sách bảo mật thông tin khách hàng</p>
          </Link>
          <Link to="/" className="link">
            <p>Chính sách đổi trả sản phẩm</p>
          </Link>
          <Link to="/" className="link">
            <p>Chính sách bảo hành sản phẩm</p>
          </Link>
          <Link to="/" className="link">
            <p>Chính sách giao nhận, vận chuyển</p>
          </Link>
          <Link to="/" className="link">
            <p>Phương thức thanh toán</p>
          </Link>
          <Link to="/" className="link">
            <p>Chính sách khách hàng thân thiết</p>
          </Link>
        </div>
      </div>
      <div className="fotter-list">
        <div className="social-network">
          <FontAwesomeIcon icon={faSquareFacebook} className="fotter-icon" />
          <FontAwesomeIcon icon={faSquareInstagram} className="fotter-icon" />
          <FontAwesomeIcon icon={faSquareTwitter} className="fotter-icon" />
          <FontAwesomeIcon icon={faYoutube} className="fotter-icon" />
          <FontAwesomeIcon icon={faSkype} className="fotter-icon" />
        </div>
        <p>Đăng ký để nhận bản tin ưu đãi từ K&K Fashion</p>
        <div className="input-email">
          <input
            type="text"
            placeholder="Địa chỉ email của bạn"
            className="text-email"
          />
          <FontAwesomeIcon icon={faPaperPlane} className="send" />
        </div>
        <img src={imgFotter} alt="" />
      </div>
    </div>
  );
};
