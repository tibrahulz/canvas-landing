
'use client'
import { Button, Carousel } from 'antd';
import Head from 'next/head';
import React from 'react';
import { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import { PrimaryGradientButton } from '../../components/Buttons';
import CanvasCard from '../../components/CanvasCard';
import { StyledMoonshot } from '../../components/StyledPages';
import { ThemeProvider } from 'styled-components';
// import backersBeliversData from './backersBeliversData';
import theme from '../../utils/theme';
import EarlyAccess from '../../components/EarlyAccess';

const canvasesData = {
  "canvasesData": [
    {
      "title": "Convetry side Guide Including conventry Hotels",
      "type": "NFT",
      "price": "NFT",
      "description": "Travelling during covid has become so dangerous but  we assure safety",
      "subCanvas": [],
      "userImage": "/images/user_icon.svg",
      "userName": "thecanvasblog",
      "image": "https://picsum.photos/200/300",
      "language": "English",
      "userId": "60b48d1bc2bd37001771de5c",
      "id": "63945a947d8801bdf25fe329"
    },
    {
      "title": "Convetry side Guide Including conventry Hotels",
      "type": "NFT",
      "price": "NFT",
      "description": "Travelling during covid has become so dangerous but  we assure safety",
      "subCanvas": [],
      "userImage": "/images/user_icon.svg",
      "userName": "thecanvasblog",
      "image": "https: //picsum.photos/200/300",
      "language": "English",
      "userId": "60b48d1bc2bd37001771de5c",
      "id": "639461027d8801bdf25fe48d"
    },
    {
      "title": "Convetry side Guide Including conventry Hotels",
      "type": "NFT",
      "price": "NFT",
      "description": "Travelling during covid has become so dangerous but  we assure safety",
      "subCanvas": [],
      "userImage": "/images/user_icon.svg",
      "userName": "thecanvasblog",
      "image": "https: //picsum.photos/200/300",
      "language": "English",
      "userId": "5fd1e4324c589a001738bbd1",
      "id": "639462637d8801bdf25fe526"
    }
  ]
}

function Moonshot() {
  const carouselData = [
    {
      videoLink: 'https://www.youtube.com/embed/SLkO3NyFHZY',
      title: 'What is Canvags?',
      autoplay: true
    },
    {
      videoLink: 'https://www.youtube.com/embed/RN-dfdgd5To',
      title: 'Micro Monetize any part'
    },
    {
      videoLink: 'https://www.youtube.com/embed/9Ka3EuJw3yE',
      title: 'Micro Monetize with complete control'
    },
    {
      videoLink: 'https://www.youtube.com/embed/JyskB09x-hs',
      title: 'What is Canvags?'
    },

    {
      videoLink: 'https://www.youtube.com/embed/V5EBgefjqiY',
      title: 'What is Cafdgdfgnvags?'
    }
  ];
  const [showStudioModal, setShowStudioModal] = useState(false);

  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function onClickSubmitModal() {
    setShowStudioModal(false);
    setShowSubmitModal(!showSubmitModal);
  }

  function onClickLetsConnect() {
    setShowStudioModal(!showStudioModal);
  }

  return (
    <>
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
      <ThemeProvider theme={theme}>
        <StyledMoonshot>
          {/* <div className="navSeperate"></div> */}
          <section className="hero wrapper">
            <h2>Welcome to the future of content monetization</h2>

            <div className="canvasCards rowFlex">
              {canvasesData.canvasesData.map((data, index) => {
                return (
                  <CanvasCard
                    key={index}
                    title={data.title}
                    type={data.type}
                    price={data.price}
                    description={data.description}
                    subCanvas={data.subCanvas}
                    userImage={data.userImage}
                    userName={data.userName}
                    image="/images/defaultPicCanvasCard.png"
                    language={data.language}
                    userId={data.userId}
                    id={data.id}
                    format={data?.format}
                  />
                );
              })}
            </div>
          </section>

          <section className="creativeShot">
            <h2>Creative Shots from Canvas Space</h2>

            <section className="featuring">
              <div className="featuringWidth">
                <div className="featuring-carousel">
                  <Carousel
                    arrows
                    prevArrow={<AiOutlineLeft />}
                    nextArrow={<AiOutlineRight />}
                  >
                    {carouselData.map(item => {
                      return (
                        <iframe
                          key={item.videoLink}
                          src={item.videoLink}
                          title="What is Canvas?"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      );
                    })}
                  </Carousel>
                </div>
              </div>
            </section>

            {/* <h2 style={{ marginBottom: '0', paddingTop: '2rem' }}>
            Add a New Revenue Stream to Your Media Business.
          </h2>
          <p>Think Revenues. Think Micro. Think Canvas.</p> */}
          </section>

          <section className="endSection">
            <h2>Unleash your fragments, set your rules, redefine your profits</h2>
            <Button type="primary" onClick={() => setIsModalOpen(true)}>
              Get Early Access
            </Button>
            {/* <p>Free forever. No credit card required.</p> */}
          </section>

        </StyledMoonshot>
      </ThemeProvider>
      <EarlyAccess setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
    </>
  );
}

export default Moonshot;
