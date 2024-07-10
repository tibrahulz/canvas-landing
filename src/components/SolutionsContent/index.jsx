import React, { useEffect, useRef } from 'react'
import { Typography } from 'antd'
import { useViewportScroll } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import styles from './solutions.module.scss';
import ReactPlayer from 'react-player';

const { Title, Paragraph } = Typography;

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const sections = [
  { title: 'UPLOAD', description: 'Drag, drop, add descriptions & upload.', image: '/videos/upload.mov' },
  { title: 'ADD THE MICRO LOGIC', description: 'Lock the peaks of your content & build unique interactions.', image: '/videos/lap-gif.mp4' },
  { title: 'CUSTOMIZE', description: 'Select from micro payments, promocodes, forms & more', image: '/videos/customize.mov' },
  { title: 'EMBED', description: 'Extract your unique embed code to add on your website.', image: '/videos/embed-sol.mov' },
  { title: 'EARN ', description: 'Earn audience engagement & build new revenue channels.', image: '/videos/earn.mov' },
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

    // tl.to(rightContentRef.current, {
    //   y: () => window.innerHeight - (rightContentRef.current?.scrollHeight + 700 || 0),
    //   ease: 'animate__animated animate__fadeOutUp ',
    //   duration: 3,
    // });

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
          if (activeTab != undefined) {
            rightElementsRef.current.forEach((tab, index) => {
              console.log(":   activeTab === index", activeTab, index)
              if (activeTab === index) {
                rightElementsRef.current[index].style.display = "flex";
              } else {
                rightElementsRef.current[index].style.display = "none";
              }
            })
            if (rightElementsRef.current[activeTab].classList.contains('animate__fadeInUpBig')) {
              rightElementsRef.current[activeTab].classList.add('animate__animated', 'animate__fadeInDownBig');
            } else {
              rightElementsRef.current[activeTab].classList.add('animate__animated', 'animate__fadeInUpBig');
            }
            rightElementsRef.current[activeTab].scrollIntoView();
          }
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
                  // style={{ display: 'hidden' }}
                  ref={(el) => (rightElementsRef.current[index] = el)}
                >
                  <ReactPlayer url={num.image} height={400} width={500}
                    playing
                    loop
                    autoPlay
                    muted />
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
