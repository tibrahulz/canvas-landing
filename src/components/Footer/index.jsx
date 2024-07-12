'use client'
import { Button, Col, Row } from 'antd';
import React, { useState } from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { SiYoutubemusic } from "react-icons/si";
import EarlyAccess from '../EarlyAccess';
import { useResponsive } from '../../hooks/useResponsive';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const footerInfo = {
  // navList: [
  //   { text: 'About', route: appRoutes.ABOUT },
  //   { text: 'Report Issue', route: 'mailto:support@canvas.space' },
  //   { text: 'Blogs', route: appRoutes.BLOGS },
  //   { text: 'Terms & Condition', route: appRoutes.PRIVACY },
  //   { text: 'Privacy Policy', route: appRoutes.PRIVACY },
  //   {
  //     text: 'Terms of Use',
  //     route:
  //       'https://drive.google.com/file/d/1eiNbNjT0eSofdUyvLulrfy6Ov4NrABjn/view'
  //   }
  // ],
  // customClassName: '',
  // footer_logo,
  // subDomain: false,
  termsOfUse: 'https://drive.google.com/file/d/1eiNbNjT0eSofdUyvLulrfy6Ov4NrABjn/view',
  facebook: 'https://www.facebook.com/canvsspace/',
  twitter: 'https://x.com/CanvasSpace',
  linkedIn: 'https://www.linkedin.com/company/canvas-space/',
  youtube: 'https://www.youtube.com/@canvas_space/playlists'
}

const Footer = () => {
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isTablet } = useResponsive();

  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>

      <div className="footer-wrap">
        <Row style={{ textAlign: isTablet ? 'left' : 'center', padding: isTablet ? 0 : '0 25px' }}>
          <Col lg={10} sm={24} xs={24}>
            <ul className="menu-list" style={{ padding: isTablet ? '0 20px' : 0 }}>
              <div>
                <h2 style={{ fontSize: '26px', fontWeight: 600, marginBottom: 0, lineHeight: '32px' }}>Get Started for free</h2>
                {/* <h2 style={{ fontSize: '26px', fontWeight: 600, marginBottom: 0 }}>Get Started for free</h2> */}
                <li className="menu__item" style={{ marginTop: '10px' }} >
                  <Link className='footer__link' href={'/about'} type=''>{`About`}</Link>
                  {/* <p style={{ marginTop: '10px' }} onClick={() => router('/about')}>About</p> */}
                </li>
                <li className="menu__item">
                  <p style={{ marginTop: '10px' }}>Contact us</p>
                </li>
                <li className="menu__item" style={{ marginTop: '10px' }} >
                  <Link className='footer__link' href={'/moonshot'} type=''>{`Moonshot`}</Link>
                  {/* <p style={{ marginTop: '10px' }} onClick={() => router('/about')}>About</p> */}
                </li>
                {/* <li className="menu__item" onClick={() => window.open("https://canvas.space/moonshot")}>
                  <p style={{ marginTop: '10px' }}>Moonshot</p>
                </li> */}
                <Button type="primary" style={{ marginTop: '25px', height: 40, minWidth: 150 }}
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
                <h2 style={{ fontSize: '26px', fontWeight: 600, marginBottom: 0, lineHeight: '32px' }}>Canvas Space Inc.</h2>
                <p style={{ marginTop: '10px', fontSize: 16 }}>5548, Abington Drive, Newark,<br />California, 94560</p>
                {/* <h2 style={{ fontSize: '26px', fontWeight: 600, marginBottom: 0, lineHeight: '32px' }}></h2> */}
                <p style={{ marginTop: '10px' }}>hello@canvas.space</p>
                <ul className="social-icon">
                  <li className="social-icon__item"><a href={footerInfo.facebook} className="social-icon__link">
                    <div style={{ height: 35, width: 35, borderRadius: 100, background: "transparent", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <FaFacebook />
                    </div>
                  </a></li>
                  <li className="social-icon__item"><a href={footerInfo.twitter} className="social-icon__link">
                    <div style={{ height: 35, width: 35, borderRadius: 100, background: "transparent", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <FaXTwitter />
                    </div>
                  </a></li>
                  <li className="social-icon__item"><a href={footerInfo.youtube} className="social-icon__link">
                    <div style={{ height: 35, width: 35, borderRadius: 100, background: "#777", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <FaYoutube size={20} />
                    </div>
                  </a></li>
                  <li className="social-icon__item"><a href={footerInfo.linkedIn} className="social-icon__link">
                    <div style={{ height: 35, width: 35, borderRadius: 100, background: "#777", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <FaLinkedinIn size={20} />
                    </div>
                  </a></li>
                </ul>
                <Button className='ct-btn' style={{ marginTop: '10px', height: 40, minWidth: 150, fontSize: 16 }} onClick={() => window.open("mailto:hello@canvas.space")}>
                  Contact Us
                </Button>
              </div>
            </ul>
          </Col>
        </Row>
      </div>

      <ul className="menu" style={{ marginTop: 25 }}>
        <li className="menu__item" style={{ marginBottom: 0 }}><a className="menu__link" href="/privacy">Terms & Conditions</a></li>
        <li className="menu__item" style={{ marginBottom: 0 }}><a className="menu__link" href="/privacy">Privacy Policy</a></li>
        <li className="menu__item" style={{ marginBottom: 0 }}><a className="menu__link" href={footerInfo.termsOfUse}>Terms of Use</a></li>
      </ul>

      <p style={{ marginTop: 0 }}>&copy;2024 Canvas Space Inc. All rights reserved</p>
      <EarlyAccess setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
    </footer>
  )

}

export default Footer;