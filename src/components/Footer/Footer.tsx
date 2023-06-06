import React from "react";
import logo from "../../assets/image/logo-macbook.svg";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/">
        <img src={logo} alt="" className="footer__logo" />
      </Link>
      <div className="footer-box">
        <div className="footer__socials wrapper">
          <div className="icon facebook">
            <div className="tooltip">Facebook</div>
            <span>
              <i className="fab fa-facebook-f"></i>
            </span>
          </div>
          <div className="icon twitter">
            <div className="tooltip">Telegram</div>
            <span>
              <i className="fab fa-telegram"></i>
            </span>
          </div>
          <div className="icon instagram">
            <div className="tooltip">Instagram</div>
            <span>
              <i className="fab fa-instagram"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
