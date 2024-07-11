import React, { useEffect, useRef } from 'react'
import { Typography } from 'antd'
import { useViewportScroll } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import CotentLock from '../../../public/images/gifs/content-suite-gif.gif';
import MicroLock from '../../../public/images/micro-lock.gif';
import EmbedLock from '../../../public/images/gifs/embed-gif.gif';
import Image from 'next/image';
import ReactPlayer from 'react-player';

const { Title, Paragraph } = Typography;

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const sections = [
  { title: 'Content Suite', description: 'Earn from best parts of your text, audio, video, & images.', image: '/videos/content-suite.mov' },
  { title: 'Micro Lock Logic', description: 'Maximize value for your content peaks using micro payments, promocodes or any other business logic.', image: '/videos/lock-logic.mov' },
  { title: 'Embed & Analytics', description: 'Extract data & customize consumer engagement, your way!', image: '/videos/embed.mov' },
];

const GatewayMobile = () => {

  return (
    <div>
      <div style={{ padding: '0 25px' }}>
        <Title level={2} style={{ textAlign: 'center', fontSize: 28, color: '#3a3939' }}>Your Micro Gateway to Untapped Content Potential</Title>
        {sections.map(section => <div key={section.id}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: 20 }}
        >
          <Title level={2}>{section.title}</Title>
          <Paragraph>{section.description}</Paragraph>
          <ReactPlayer url={section.image} height={'100%'} width={'100%'}
            playing
            loop
            autoPlay
            muted />
        </div>)}
      </div>
    </div>
  )
}

export default GatewayMobile;
