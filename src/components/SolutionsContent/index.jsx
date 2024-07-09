import React, { useEffect, useRef } from 'react'
import { Typography } from 'antd'
import { useViewportScroll } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import MicroLock from '../../../public/images/gifs/lap-gif.gif';
import EmbedLock from '../../../public/images/gifs/embed-gif.gif';
import UploadGif from '../../../public/images/gifs/upload-gif.gif';
// import UploadGif from '../../../public/images/uploaded.gif';
import EarnGif from '../../../public/images/gifs/earn-gif.gif';
import Custom from '../../../public/images/gifs/customize-gif.gif';
import Image from 'next/image';
import styles from './solutions.module.scss';

const { Title, Paragraph } = Typography;

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const sections = [
  { title: 'UPLOAD', description: 'Drag, drop, add descriptions & upload.', image: UploadGif },
  { title: 'ADD THE MICRO LOGIC', description: 'Lock the peaks of your content & build unique interactions.', image: MicroLock },
  { title: 'CUSTOMIZE', description: 'Select from micro payments, promocodes, forms & more', image: Custom },
  { title: 'EMBED', description: 'Extract your unique embed code to add on your website.', image: EmbedLock },
  { title: 'EARN ', description: 'Earn audience engagement & build new revenue channels.', image: EarnGif },
];


const SolutionsContent = () => {
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
      y: () => window.innerHeight - (rightContentRef.current?.scrollHeight + 700 || 0),
      ease: 'animate__animated animate__fadeOutUp ',
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
    <div className={styles.solutions} style={{ height: '185vh', marginTop: '-10px' }}>
      <div ref={containerRef} style={{ paddingTop: 64 }}>
        <Title level={2} style={{ textAlign: 'center' }}>THE STRIPE FOR THE WORLD OF MICRO GATEWAY</Title>
        <div className={styles.getwayContainer}>
          <div className={styles.rightContainer}>
            <div className={styles.rightContent} ref={rightContentRef}>
              {sections.map((num, index) => (
                <div
                  className={styles.rightElement}
                  key={index}
                  ref={(el) => (rightElementsRef.current[index] = el)}
                >
                  <Image
                    src={num.image}
                    style={{
                      height: 450,
                      width: 500,
                      objectFit: 'contain'

                    }}
                    alt={num.title}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.leftContainer}>
            <div className={styles.leftContent}>
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
        </div>
      </div>
    </div>
  )
}

export default SolutionsContent
