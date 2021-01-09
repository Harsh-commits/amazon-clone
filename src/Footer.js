import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer_top">
        <div className="foooter_div">
          <h3>Get to know us</h3>
          <a href="https://www.amazon.jobs/en-gb/teams/in" target="_blank">
            <p>Careers</p>
          </a>
          <a href="https://blog.aboutamazon.in/" target="_blank">
            <p>Blog</p>
          </a>
          <a href="https://www.aboutamazon.com/" target="_blank">
            <p>About Amazon</p>{" "}
          </a>
          <p>Investor Relation</p>
          <p>Amazon Devices</p>
          <p>Amazon Tours</p>
        </div>
        <div className="foooter_div">
          <h3>Make Money with Us</h3>
          <p>Sell products on Amazon</p>
          <p>Sell apps on Amazon</p>
          <p>Become an Affiliate</p>
          <p>Advertise Your Products</p>
          <p>Self-Publish with Us</p>
        </div>
        <div className="foooter_div">
          <h3>Amazon Payment Products</h3>
          <p>Amazon Business Card</p>
          <p>Shop with Points</p>
          <p>Reload Your Balance</p>
          <p>Amazon Currency Converter</p>
        </div>
        <div className="foooter_div">
          <h3>Let Us Help You</h3>
          <a href="https://covidterror.herokuapp.com/index.php" target="_blank">
            <p>Amazon and COVID-19</p>
          </a>
          <Link to="/orders">
            <p>Your Orders</p>
          </Link>
          <p>Your Account</p>
          <p>Manage Your Content and Devices</p>
        </div>
      </div>
      <div className="footer_end">
        <p>© 2021: Harsh Kumar</p>
        <p>
          Made in India with <span style={{ color: "red" }}>❤</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;
