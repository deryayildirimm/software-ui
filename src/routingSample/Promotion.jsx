import React from "react";
import "./Promotion.css"; // Stil dosyanızın yolunu belirtin
import { Button, Menu } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const menuItems = [
  {
    key: "home",
    label: <Link to="/home">Home</Link>,
  },
  {
    key: "about",
    label: <Link to="/about">About</Link>,
  },
  {
    key: "table",
    label: <Link to="/tablee">CategoryTable</Link>,
  },
];

export const Promotion = () => {
  return (
    <>
      <header>
        <div className="header-wrapper">
          <div className="logo">
            <a href="">Bootstrap</a>
          </div>

          <ul>
            <li class="active">
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/tablee">CategoryTable</Link>
            </li>
          </ul>

          <div className="btn-wrapper">
            <Button type="link">Link</Button>
            <Button type="primary">Primary</Button>
          </div>
        </div>
      </header>

      <div className="hero-section">
        <div className="container">
          <h1>Yetenekli Danışmanlarla Büyüyün ve Büyütün!!</h1>
          <p>
            Bootstrap utility classes are used to create this jumbotron since
          </p>
          <Button type="primary">Primary</Button>
        </div>
      </div>

      <div className="main">
        <h3>szmlfdgnslkabgkjsbhfsb </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, totam.
          Consequuntur ullam consequatur perferendis repudiandae rem eveniet
          quibusdam iure laborum.
        </p>
      </div>
      <footer>
        <div className="footer-wrapper">Copyright © Your Website 2023</div>
      </footer>
    </>
  );
};

export default Promotion;
