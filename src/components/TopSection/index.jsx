import styles from './styles.module.scss';
import Picture1 from '../../../public/images/sec1.png';
import Laptop from '../../../public/images/laptop-bg.png'
import LockText from '../../../public/images/lock-text.gif'
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import { Button } from 'antd';

export default function TopSection() {

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
      src: Laptop,
      scale: scale5,
      zIndex: 1
    }
  ]

  return (
    <div style={{ paddingTop: 64 }}>
      <div ref={container} className={styles.container}>
        <div className={styles.header}>
          <h1 style={{ textAlign: 'center', marginBottom: 7, fontSize: '32px' }}>Unlocking Dynamic Content Interactions</h1>
          <h4 style={{ textAlign: 'center', marginTop: 0, fontSize: '20px', fontWeight: 500 }}>Elevate Revenues and Engagement with the Micro Gateway</h4><div style={{ marginTop: 15 }}>
            <Button type="primary" style={{ color: '#fff', height: 40, width: 150, fontSize: 16 }}>Join Waitlist</Button>
            <Button style={{ backgroundColor: 'transparent', border: '1px solid #000', marginLeft: 40, height: 40, width: 150, fontSize: 16 }}>
              Explore API's
            </Button>
          </div>
        </div>
        <div className={styles.sticky}>
          {
            pictures.map(({ src, scale, zIndex }, index) => {
              return <motion.div key={index} style={{ scale, zIndex }} className={styles.el}>
                <div className={index === 0 ? styles.imageContainer : styles.imageContainer1} style={{ paddingTop: index > 0 ? '120px' : 0, position: index > 0 ? 'absolute' : '', top: index > 0 && '25vh' }}>
                  <Image
                    src={src}
                    fill
                    alt="image"
                    style={{ objectFit: index > 0 ? 'contain' : 'cover' }}
                  />
                </div>
              </motion.div>
            })
          }
        </div>
      </div>
    </div>
  )
}
