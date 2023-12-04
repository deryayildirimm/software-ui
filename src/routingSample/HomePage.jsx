import React from 'react';
import { Link } from 'react-router-dom';
import "./Promotion.css"; // Stil dosyanızın yolunu belirtin
import { Button, Menu } from "antd";

const HomePage = () => {
    return (
        <>
        <header>
          <div className="header-wrapper">
            <div className="logo">
              <a href="">Homeee</a>
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
            <Button type="link" >
        Link
      </Button>
      <Button type="primary" >
        Primary
      </Button>
            </div>
          </div>
        </header>
  
  
        <div className="main">
          <div className="box">
            <h2>Fresh new layout</h2>
            <p>
              With Bootstrap 5, we've created a fresh new layout for this
              template!
            </p>
          </div>
          <div className="box">
            <h2>Fresh new layout</h2>
            <p>
              With Bootstrap 5, we've created a fresh new layout for this
              template!
            </p>
          </div>
          <div className="box">
            <h2>Fresh new layout</h2>
            <p>
              With Bootstrap 5, we've created a fresh new layout for this
              template!
            </p>
          </div>
          <div className="box">
            <h2>Fresh new layout</h2>
            <p>
              With Bootstrap 5, we've created a fresh new layout for this
              template!
            </p>
          </div>
          <div className="box">
            <h2>Fresh new layout</h2>
            <p>
              With Bootstrap 5, we've created a fresh new layout for this
              template!
            </p>
          </div>
          <div className="box">
            <h2>Fresh new layout</h2>
            <p>
              With Bootstrap 5, we've created a fresh new layout for this
              template!
            </p>
          </div>
        </div>
        <footer>
          <div className="footer-wrapper">Copyright © Your Website 2023</div>
        </footer>
        </>
    );
};

export default HomePage;
