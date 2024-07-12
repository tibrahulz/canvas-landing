'use client';

// import { Button, Col, Flex, Row, Typography } from 'antd';
// import React, { useState } from 'react'
import EarlyAccess from '../../components/EarlyAccess';
// import Image from 'next/image';

// const { Title, Paragraph } = Typography;
// const AboutUs = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   return (
//     <div style={{ padding: '70px 25px 100px', textAlign: 'center' }}>

//       <Title level={1} style={{ textAlign: 'center', marginBottom: '50px' }}>About</Title>
//       <div className="content-section">
//         <Row gutter={[16, 24]} align="middle">
//           <Col xs={24} md={12}>
//             <Title level={2}>The New Standard in Content Interactions</Title>
//             <Paragraph>
//               Modern media & content-first businesses can unlock new revenue channels to boost audience engagement and conversion rates.
//             </Paragraph>
//           </Col>
//           <Col xs={24} md={12} className="video-icon">
//             <Image src={'/images/about-1.gif'} alt="about" height={250} width={400} style={{ height: 250, width: 400 }} />
//           </Col>
//         </Row>
//       </div>
//       <div className="content-section">
//         <Row gutter={[16, 24]} align="middle">
//           <Col xs={24} md={12} className="video-icon">
//             <Image src={'/images/about-1.gif'} alt="about" height={250} width={400} style={{ height: 250, width: 400 }} />
//           </Col>
//           <Col xs={24} md={12}>
//             <Title level={2}>Revolutionizing Content Interactions & Revenues with The Micro Gateway</Title>
//             <Paragraph>
//               In an era of subscription fatigue and the need for instant gratification, our moonshot vision at Canvas transforms revenues & audience interactions for content-first businesses.
//               We're pioneering an augmented revenue channel beyond traditional methods & supporting unique content interactions to engage your audiences. Simply put, we are the Micro Content Gateway for the attention economy!
//             </Paragraph>
//           </Col>
//         </Row>
//       </div>

//       <div>
//         <h2 style={{ fontWeight: 'bolder', color: '#000', marginBottom: 40 }}>The Future of Content Unlocking with Micro Precision Is Here</h2>
//         <Button type="primary" onClick={() => setIsModalOpen(true)}>
//           Get Early Access
//         </Button>
//       </div>
//       <EarlyAccess setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
//     </div>
//   )
// }

// export default AboutUs;

// import { Collapse, Menu } from 'antd/lib';
import Parser from 'html-react-parser';
import Head from 'next/head';
// import Image from 'next/image';
// import { useRouter } from 'next/router';
import { useState } from 'react';
import { Fragment } from 'react';

// import { userService } from 'src/services';
import { PrimaryGradientButton } from '../../components/Buttons';
// import StaticPageLayout from '../../components/StaticPageLayout';
// import StudioModal from '../../components/StudioModal';
// import TestimonialCard from '@/components/TestimonialCard';

// import { appRoutes } from '@/utils/constants/app_constants';
import { AboutPage } from '../../components/StyledPages';
import { ThemeProvider } from 'styled-components';
// import backersBeliversData from './backersBeliversData';
import theme from '../../utils/theme';
import { Button } from 'antd';

function RenderContentData({ data }) {
  return (
    <div className="secondryBackground">
      <div
        className={`content-row-about wrapper ${data?.imagePosition === 'left' ? 'row-reverse' : ''
          }`}
      >
        <div className="content-text">
          <h2>{data?.title}</h2>
          <p>{Parser(data?.content)}</p>
        </div>

        <div className="content-img">

          <video
            width="100%"
            height="100%"
            controls={true}
            loop
            autoplay
            muted
            alt=""
          >
            <source src={data?.image} type="video/mp4"></source>
          </video>
        </div>
      </div>
    </div>
  );
}

function About() {

  const contentData = [
    {
      title: 'Revolutionizing Content Interactions & Revenues with The Micro Gateway',
      content:
        "In an era of subscription fatigue and the need for instant gratification, our moonshot vision at Canvas transforms revenues & audience interactions for content-first businesses. We're pioneering an augmented revenue channel beyond traditional methods & supporting unique content interactions to engage your audiences. Simply put, we are the <b>Micro Content Gateway</b> for the attention economy!",
      image: '/videos/Enterprise-Video.mp4',
      imagePosition: 'left',
      imageWidth: 445,
      imegeHeight: 270,
      ref: ''
    }
  ];


  const [showStudioModal, setShowStudioModal] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        <title>Canvas - For the creative entrepreneur</title>
        <meta
          name="description"
          content="One virtual face to create and micro-monetize, your way!"
        />

        <meta
          itemProp="name"
          content="Canvas - For the creative entrepreneur"
        />
        <meta
          itemProp="description"
          content="One virtual face to create and micro-monetize, your way!"
        />
        <meta
          itemProp="image"
          content="https://canvas-dev-gallery.s3.us-east-2.amazonaws.com/canvas/Group+34584.png"
        />

        <meta property="og:type" content="website" key="type" />
        <meta
          property="og:title"
          content="Canvas - For the creative entrepreneur"
        />
        <meta
          property="og:description"
          content="One virtual face to create and micro-monetize, your way!"
        />
        <meta
          property="og:image"
          content="https://canvas-dev-gallery.s3.us-east-2.amazonaws.com/canvas/Group+34584.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Canvas - For the creative entrepreneur"
        />
        <meta
          name="twitter:description"
          content="One virtual face to create and micro-monetize, your way!"
        />
        <meta
          name="twitter:image"
          content="https://canvas-dev-gallery.s3.us-east-2.amazonaws.com/canvas/Group+34584.png"
        />
      </Head>
      {/* <StaticPageLayout contentClassName="w-100vw"> */}
      <ThemeProvider theme={theme}>
        <AboutPage>
          <div className="navBackground"></div>
          <section className="section-AboutUs">
            <div className="heroSection">
              {/* <div className="heading w-80vw">
                <h2>About</h2>
              </div> */}
              <div
                className="content-row-about wrapper w-80vw"
                style={{ marginTop: 0 }}
              >
                <div className="content-text">
                  <h2>The New Standard in Content Interactions</h2>
                  <p>
                    Modern media & content-first businesess can unlock new revenue channels to boost audience engagement and conversion rates.
                  </p>
                </div>

                <div className="content-img">
                  {/* <video
                    playsinline
                    width="480px"
                    src="/images/enterprise-hero-video.mp4"
                    alt=""
                    autoPlay={true}
                    controls={false}
                    muted
                    loop */}
                  {/* ></video> */}
                  <img
                    src="/images/about-1.gif"
                    style={{ borderRadius: '8px' }}
                    width="100%"
                    height="100%"
                    alt=""
                  />
                </div>
              </div>
            </div>

            {contentData.map(data => {
              return <RenderContentData key={data.title} data={data} />;
            })}


            <div className="section4-aboutUs">
              <p className="creatingCanvasText">
                Unleash your fragments, set your rules, redefine your profits.
              </p>

              {/* <PrimaryGradientButton
                text="Get Access"
                onClick={() => {
                  setShowStudioModal(!showStudioModal);
                }}
              /> */}
              <Button type="primary" onClick={() => setIsModalOpen(true)}>
                Get Early Access
              </Button>
            </div>
          </section>
        </AboutPage>
      </ThemeProvider>

      {/* </StaticPageLayout> */}

      {/* <StudioModal
        isModal={showStudioModal}
        showCountry={false}
        onClose={() => {
          setShowStudioModal(!showStudioModal);
        }}
      /> */}
      <EarlyAccess setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
    </Fragment>
  );
}

export default About;

// export async function getServerSideProps() {
//   // Pass data to the page via props
//   return {
//     props: {
//       title: 'Canvas - Micro Monetize Any Creation ',
//       description:
//         'Enabling a non traditional revenue channel through micro content monetizatio.',
//       ogImage:
//         'https://canvas-dev-gallery.s3.us-east-2.amazonaws.com/canvas/Group+34584.png'
//     }
//   };
// }