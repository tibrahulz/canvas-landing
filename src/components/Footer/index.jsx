import { Button, Col, Row } from 'antd';
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { SiYoutubemusic } from "react-icons/si";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="waves">
        <div class="wave" id="wave1"></div>
        <div class="wave" id="wave2"></div>
        <div class="wave" id="wave3"></div>
        <div class="wave" id="wave4"></div>
      </div>

      <div className="footer-wrap">
        <Row>
          <Col lg={10} sm={24} xs={24}>
            <ul class="menu-list">
              <div>
                <h2 style={{ color: '#fff', fontSize: '26px', fontWeight: 600, marginBottom: 0 }}>Get Started for free</h2>
                <li class="menu__item">
                  <p style={{ marginTop: '10px' }}>About</p>
                </li>
                <li class="menu__item">
                  <p style={{ marginTop: '10px' }}>Contact us</p>
                </li>
                <li class="menu__item">
                  <p style={{ marginTop: '10px' }}>Watch demo</p>
                </li>
                <Button type="primary" style={{ marginTop: '5px', height: 40, width: 150, fontSize: 16 }}>
                  Join Waitlist
                </Button>
              </div>
            </ul>
          </Col>
          <Col lg={4} sm={24} xs={24} />
          <Col lg={10} sm={24} xs={24}>
            <ul class="menu-list" >
              <div>
                <h2 style={{ color: '#fff', fontSize: '26px', fontWeight: 600, marginBottom: 0 }}>24/7 customer support</h2>
                <p style={{ marginTop: '10px' }}> Our customer support team is available to help 24/7. </p>
                <Button className='ct-btn' style={{ marginTop: '70px', height: 40, width: 150, fontSize: 16 }}>
                  Contact Us
                </Button>
              </div>
            </ul>
          </Col>
        </Row>
      </div>
      <ul class="menu" style={{ marginTop: 25 }}>
        <li class="menu__item"><a class="menu__link" href="#">Terms & Conditions</a></li>
        <li class="menu__item"><a class="menu__link" href="#">Privacy Policy</a></li>
        <li class="menu__item"><a class="menu__link" href="#">Terms of Use</a></li>
      </ul>
      <ul class="social-icon">
        <li class="social-icon__item"><a class="social-icon__link" href="#">
          <div style={{ height: 35, width: 35, borderRadius: 100, background: "transparent", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <FaFacebook />
          </div>
        </a></li>
        <li class="social-icon__item"><a class="social-icon__link" href="#">
          <div style={{ height: 35, width: 35, borderRadius: 100, background: "transparent", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <FaXTwitter />
          </div>
        </a></li>
        <li class="social-icon__item"><a class="social-icon__link" href="#">
          <div style={{ height: 35, width: 35, borderRadius: 100, background: "#777", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <FaYoutube size={20} />
          </div>
        </a></li>
        <li class="social-icon__item"><a class="social-icon__link" href="#">
          <div style={{ height: 35, width: 35, borderRadius: 100, background: "#777", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <FaLinkedinIn size={20} />
          </div>
        </a></li>
      </ul>
      <p>&copy;2024 Canvas Space Inc. All rights reserved</p>
    </footer>
  )

}

export default Footer;