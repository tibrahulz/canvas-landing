import styles from './styles.module.scss';
import Picture1 from '../../../public/images/sec1.png';
import Laptop from '../../../public/images/laptop-bg-new.png'
import Mobile from '../../../public/images/mobile-main.png'
import LockText from '../../../public/images/gifs/lap-gif.gif'
// import * as VideoLockText from '/lap-gif.mp4';

import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Button, Tooltip } from 'antd';
import EarlyAccess from '../EarlyAccess';
import ReactPlayer from 'react-player'
import { useResponsive } from '../../hooks/useResponsive';

export default function TopSectionMobile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isTablet, isMobile, isDesktop } = useResponsive();

  const container = useRef(null);

  const pictures = [
    {
      src: LockText,
      zIndex: 2
    },
    {
      src: Mobile,
      zIndex: 1
    }
  ]

  return (
    <div style={{ paddingTop: 64 }}>
      <div ref={container} className={styles.container}>
        <div className={(isDesktop || isTablet) ? styles.header : styles.headerMobile}>
          <h1 style={{ textAlign: 'center', marginBottom: 7, fontSize: '32px' }}>Unlocking Dynamic Content Interactions</h1>
          <h4 style={{ textAlign: 'center', marginTop: 0, fontSize: '20px', fontWeight: 500 }}>Elevate Revenues and Engagement with the Micro Gateway</h4><div style={{ marginTop: 15 }}>
            {/* <Button type="primary"
              style={{ color: '#fff', height: 40, width: 150, fontSize: 16 }}
              onClick={() => setIsModalOpen(true)}>
              Get Early Access
            </Button>
            <Tooltip placement="top" title={`Coming soon...`}>
              <Button disabled style={{ border: '1px solid #ccc', marginLeft: 20, height: 40, width: 150, fontSize: 16, borderRadius: 5, color: '#777' }}>
                {`Explore APIs`}
              </Button>
            </Tooltip> */}
          </div>
        </div>
        <div className={styles.sticky}>
          {
            pictures.map(({ src, zIndex }, index) => {
              return <div key={index} style={{ zIndex, position: index === 0 && 'relative' }} className={styles.el}>
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
              </div>
            })
          }
        </div>
      </div>
      <EarlyAccess setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
    </div>
  )
}
