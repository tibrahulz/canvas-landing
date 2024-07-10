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

const Gateway = () => {
  const { scrollYProgress } = useViewportScroll();
  const containerRef = useRef(null);
  const rightContentRef = useRef(null);
  const tabsRef = useRef([]);
  const rightElementsRef = useRef([]);

  let activeTab = undefined;

  useEffect(() => {
    const tabs = gsap.utils.toArray(tabsRef.current);
    const amount = tabs.length;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=100%',
        pin: true,
        scrub: true,
        markers: false,
      },
    });

    tl.to(rightContentRef.current, {
      y: () => window.innerHeight - (rightContentRef.current?.scrollHeight + 400 || 0),
      ease: 'none',
      duration: 3,
    });

    tabs.forEach((tab, i) => {
      const position = i / (amount - 1);
      const link = tab.querySelector('a');
      const st = tl.scrollTrigger;

      tl.add(`tab-${i + 1}`, position - 50).call(
        () => {
          if (activeTab !== undefined) {
            tabs[activeTab].classList.toggle('selected');
          }
          tab.classList.toggle('selected');
          activeTab = i;
        },
        undefined,
        position
      );

      link?.addEventListener('click', (e) => {
        e.preventDefault();
        gsap.to(window, {
          scrollTo: {
            y: st.start + (st.end - st.start) * (position / tl.duration()),
          },
          duration: 0.4,
          ease: 'power1.inOut',
        });
      });
    });

    tl.to({}, { duration: 0.1 });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      tl.kill();
    };
  }, []);

  return (
    <div style={{ height: '165vh', marginTop: '-10px' }}>
      <div ref={containerRef} style={{ position: 'relative', paddingTop: 64 }}>
        <Title level={2} style={{ textAlign: 'center' }}>The Stripe For The World Of Micro Gateway</Title>
        <div className="getway-container">
          <div className="left-container">
            <div className="left-content">
              <ul>
                {sections.map((section, index) => (
                  <li key={index} ref={(el) => (tabsRef.current[index] = el)}>
                    <Title level={2}>{section.title}</Title>
                    <Paragraph>{section.description}</Paragraph>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="right-container bg-right">
            <div className="right-content" ref={rightContentRef}>
              {sections.map((num, index) => (
                <div
                  className="right-element"
                  key={index}
                  ref={(el) => (rightElementsRef.current[index] = el)}
                >
                  <ReactPlayer url={num.image} height={'100%'} width={'100%'}
                    playing
                    loop
                    autoPlay
                    muted />
                  {/* <img src={num.image} alt="" height={450} width={385} /> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gateway
