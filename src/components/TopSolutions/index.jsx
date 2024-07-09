import styles from './styles.module.scss';
import Picture1 from '../../../public/images/sec1.png';
import Laptop from '../../../public/images/laptop-bg.png'
import AudioGif from '../../../public/images/gifs/audio.gif'
import VideoGif from '../../../public/images/gifs/video.gif'
import TextGif from '../../../public/images/gifs/text.gif'
import ImageGif from '../../../public/images/gifs/image.gif'

import FirstSection from '../../../public/images/solution-1.gif'
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button, Flex, Tooltip, Typography } from 'antd';
import { RiPlayLargeFill } from "react-icons/ri";
import { IoImagesOutline } from "react-icons/io5";
import { TbSquareLetterT } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa";
import { BsFillMicFill, BsPlayFill } from "react-icons/bs";

const { Title } = Typography;

const tabs = [
  {
    name: 'podcasts', label: 'Podcasts', icon: <BsFillMicFill size={25} />, info: {
      header: 'Audio',
      descriptionLine1: 'Sell seconds, melody, or high points.',
      descriptionLine2: 'Make every second count.',
      imageUrl: AudioGif
    }
  },
  {
    name: 'video', label: 'Video', icon: <RiPlayLargeFill size={25} />, info: {
      header: 'Video',
      descriptionLine1: 'Sell exclusive vlog or film sections. ',
      descriptionLine2: 'Make your stories compelling.',
      imageUrl: VideoGif
    }
  },
  {
    name: 'photos', label: 'Photos', icon: <IoImagesOutline size={25} />, info: {
      header: 'Image',
      descriptionLine1: 'Frame a focal point. Sell the heart of your art.',
      descriptionLine2: '',
      imageUrl: ImageGif
    }
  },
  {
    name: 'blogs', label: 'Blogs', icon: <TbSquareLetterT size={25} />, info: {
      header: 'Text',
      descriptionLine1: 'Sell the best parts of your blog, research, or story cliffhangers.',
      descriptionLine2: 'Make every word matter.',
      imageUrl: TextGif
    }
  },
  {
    name: 'webPages', label: 'Web Pages', icon: <FaLaptopCode size={25} />, info: {
      header: 'HTML',
      descriptionLine1: 'Sell specific document sections. Customize every detail',
      descriptionLine2: '',
      imageUrl: FirstSection
    }
  }
];



const Contact = ({
  info: {
    header,
    descriptionLine1,
    descriptionLine2,
    imageUrl
  }
}) => <div key={header} className="content-car animate__animated animate__fadeInUp">
    <Flex vertical={false} align='center' justify='center' gap={'5vw'} style={{ textAlign: 'left' }}>
      <Flex vertical={true} style={{ maxWidth: "368px" }}>
        <Title level={3} style={{ fontWeight: 'bolder' }}>{header}</Title>
        <Title level={4} style={{ marginTop: 0, marginBottom: 30 }}>{descriptionLine1} {descriptionLine2}</Title>
        <Flex vertical={false} gap={10}>
          <Button type='primary'>Get Early Access</Button>
          <Tooltip placement="top" title={`Coming soon...`}>
            <Button disabled style={{ border: '1px solid #ccc', marginLeft: 10, height: 40, width: 150, fontSize: 16, borderRadius: 100, color: '#777' }}>
              {`Explore APIs`}
            </Button>
          </Tooltip>
        </Flex>
      </Flex>
      <Image
        src={imageUrl}
        alt={header}
        unoptimized={true}
        style={{
          height: 400,
          width: 500,
          objectFit: 'contain',
          borderRadius: 20
        }}
      />
    </Flex>
  </div>;

export default function TopSolutions() {
  const [activeTab, setActiveTab] = useState('podcasts');

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 8.5]);

  const getContentComponent = (tabName) => {
    const info = tabs.find(t => t.name === tabName) || { info: { header: '', descriptionLine1: '', descriptionLine2: '', imageUrl: '' } };
    return <Contact info={info.info} />
  };

  return (
    <div className={styles.solutionMainDiv}>
      <div ref={container} className={styles.container}>
        <div className={styles.header}>
          <h1>Explore our solutions</h1>
        </div>
        <div className={styles.sticky}>
          <div className={styles.tabNav} >
            {tabs.map(tab => (
              <div
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`${styles.tabCircle} ${activeTab === tab.name ? styles.active : ''}`}
              >
                <div className={styles.iconContainer}>
                  {tab.icon}
                </div>
                <span>{tab.label}</span>
              </div>
            ))}
          </div>
          {getContentComponent(activeTab)}
        </div>
      </div>
    </div>
  )
}
