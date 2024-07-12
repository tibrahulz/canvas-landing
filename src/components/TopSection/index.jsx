import styles from './styles.module.scss';
import Picture1 from '../../../public/images/sec1.png';
import Laptop from '../../../public/images/laptop-bg-new.png'
import Mobile from '../../../public/images/mobile.png'
import LockText from '../../../public/images/gifs/lap-gif.gif'
// import * as VideoLockText from '/lap-gif.mp4';

import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Button, Tooltip } from 'antd';
import EarlyAccess from '../EarlyAccess';
import ReactPlayer from 'react-player'
import { useResponsive } from '../../hooks/useResponsive';

export default function TopSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { isTablet, isMobile, isDesktop } = useResponsive();

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 8.5]);

  const pictures = [
    {
      src: LockText,
      scale: scale4,
      zIndex: 2
    },
    {
      src: (isDesktop || isTablet) ? Laptop : isMobile ? Mobile : <></>,
      scale: scale5,
      zIndex: 1
    }
  ]

  return (
    <div style={{ paddingTop: 64 }}>
      <div ref={container} className={styles.container}>
        <div className={(isDesktop || isTablet) ? styles.header : styles.headerMobile}>
          <h1 style={{ textAlign: 'center', marginBottom: 7, fontSize: '32px' }}>Unlocking Dynamic Content Interactions</h1>
          <h4 style={{ textAlign: 'center', marginTop: 0, fontSize: '20px', fontWeight: 500 }}>Elevate Revenues and Engagement with the Micro Gateway</h4><div style={{ marginTop: 15 }}>
            <Button type="primary"
              style={{ color: '#fff', height: 40, minWidth: 150 }}
              onClick={() => setIsModalOpen(true)}>
              Get Early Access
            </Button>
            <Tooltip placement="top" title={`Coming soon...`}>
              <Button disabled style={{ border: '1px solid #ccc', marginLeft: 20, height: 40, width: 150, borderRadius: 5, color: '#777' }}>
                {`Explore API's`}
              </Button>
            </Tooltip>
          </div>
        </div>
        <div className={styles.sticky}>
          {
            pictures.map(({ src, scale, zIndex }, index) => {
              return <motion.div key={index} style={{ scale, zIndex }} className={styles.el}>
                <div className={index === 0 ? styles.imageContainer : styles.imageContainer1} >
                  {index === 0 ? <ReactPlayer url={'/videos/lap-gif.mp4'} height={'100%'} width={'100%'}
                    playing
                    loop
                    autoPlay
                    muted /> : <Image
                    src={src}
                    fill
                    alt="image"
                    style={{ objectFit: index > 0 ? 'contain' : 'cover' }}
                  />}
                </div>
              </motion.div>
            })
          }
        </div>
      </div>
      <EarlyAccess setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
    </div>
  )
}
