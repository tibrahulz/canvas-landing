'use client'
import { Button, Col, Row } from 'antd';
import React, { useState } from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { SiYoutubemusic } from "react-icons/si";
import EarlyAccess from '../EarlyAccess';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>

      <div className="footer-wrap">
        <Row>
          <Col lg={10} sm={24} xs={24}>
            <ul className="menu-list">
              <div>
                <h2 style={{ color: '#fff', fontSize: '26px', fontWeight: 600, marginBottom: 0 }}>Get Started for free</h2>
                <li className="menu__item">
                  <p style={{ marginTop: '10px' }}>About</p>
                </li>
                <li className="menu__item">
                  <p style={{ marginTop: '10px' }}>Contact us</p>
                </li>
                <li className="menu__item">
                  <p style={{ marginTop: '10px' }}>Watch demo</p>
                </li>
                <Button type="primary" style={{ marginTop: '5px', height: 40, width: 150, fontSize: 16 }}
                  onClick={() => setIsModalOpen(true)}>
                  Get Early Access
                </Button>
              </div>
            </ul>
          </Col>
          <Col lg={4} sm={24} xs={24} />
          <Col lg={10} sm={24} xs={24}>
            <ul className="menu-list" >
              <div>
                <h2 style={{ color: '#fff', fontSize: '26px', fontWeight: 600, marginBottom: 0, lineHeight: '32px' }}>5548, Abington Drive, Newark,<br />California, 94560</h2>
                <p style={{ marginTop: '10px' }}>Email: Hello@canvas.space</p>
                <Button className='ct-btn' style={{ marginTop: '35px', height: 40, width: 150, fontSize: 16 }}>
                  Contact Us
                </Button>
              </div>
            </ul>
          </Col>
        </Row>
      </div>
      <ul className="menu" style={{ marginTop: 25 }}>
        <li className="menu__item"><a className="menu__link" href="#">Terms & Conditions</a></li>
        <li className="menu__item"><a className="menu__link" href="#">Privacy Policy</a></li>
        <li className="menu__item"><a className="menu__link" href="#">Terms of Use</a></li>
      </ul>
      <ul className="social-icon">
        <li className="social-icon__item"><a className="social-icon__link" href="#">
          <div style={{ height: 35, width: 35, borderRadius: 100, background: "transparent", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <FaFacebook />
          </div>
        </a></li>
        <li className="social-icon__item"><a className="social-icon__link" href="#">
          <div style={{ height: 35, width: 35, borderRadius: 100, background: "transparent", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <FaXTwitter />
          </div>
        </a></li>
        <li className="social-icon__item"><a className="social-icon__link" href="#">
          <div style={{ height: 35, width: 35, borderRadius: 100, background: "#777", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <FaYoutube size={20} />
          </div>
        </a></li>
        <li className="social-icon__item"><a className="social-icon__link" href="#">
          <div style={{ height: 35, width: 35, borderRadius: 100, background: "#777", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <FaLinkedinIn size={20} />
          </div>
        </a></li>
      </ul>
      <p>&copy;2024 Canvas Space Inc. All rights reserved</p>
      <EarlyAccess setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
    </footer>
  )

}

export default Footer;