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
import { useResponsive } from '../../hooks/useResponsive';
import ReactPlayer from 'react-player';
import EarlyAccess from '../EarlyAccess';

const { Title } = Typography;

const tabs = [
  {
    name: 'podcasts', label: 'Podcasts', icon: <BsFillMicFill size={25} />, info: {
      header: 'Audio',
      descriptionLine1: 'Sell seconds, melody, or high points.',
      descriptionLine2: 'Make every second count.',
      imageUrl: '/videos/audio-main-sol.mov'
    }
  },
  {
    name: 'video', label: 'Video', icon: <RiPlayLargeFill size={25} />, info: {
      header: 'Video',
      descriptionLine1: 'Sell exclusive vlog or film sections. ',
      descriptionLine2: 'Make your stories compelling.',
      imageUrl: '/videos/video-main-sol.mov'
    }
  },
  {
    name: 'photos', label: 'Photos', icon: <IoImagesOutline size={25} />, info: {
      header: 'Image',
      descriptionLine1: 'Frame a focal point. Sell the heart of your art.',
      descriptionLine2: '',
      imageUrl: '/videos/image-main-sol.mov'
    }
  },
  {
    name: 'blogs', label: 'Blogs', icon: <TbSquareLetterT size={25} />, info: {
      header: 'Text',
      descriptionLine1: 'Sell the best parts of your blog, research, or story cliffhangers.',
      descriptionLine2: 'Make every word matter.',
      imageUrl: '/videos/text-main-sol.mov'
    }
  },
  {
    name: 'webPages', label: 'Web Pages', icon: <FaLaptopCode size={25} />, info: {
      header: 'HTML',
      descriptionLine1: 'Sell specific document sections. Customize every detail',
      descriptionLine2: '',
      imageUrl: '/videos/web.mov'
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
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div key={header} className="content-car animate__animated animate__fadeInUp">
      <Flex vertical={false} align='center' justify='center' gap={'5vw'} style={{ textAlign: 'left' }}>
        <Flex vertical={true} style={{ maxWidth: "368px" }}>
          <Title level={3} style={{ fontWeight: 'bolder' }}>{header}</Title>
          <Title level={4} style={{ marginTop: 0, marginBottom: 30 }}>{descriptionLine1} {descriptionLine2}</Title>
          <Flex vertical={false} gap={10}>
            <Button type='primary' onClick={() => setIsModalOpen(true)}>Get Early Access</Button>
            <Tooltip placement="top" title={`Coming soon...`}>
              <Button disabled style={{ border: '1px solid #ccc', marginLeft: 10, height: 40, width: 150, fontSize: 16, borderRadius: 5, color: '#777' }}>
                {`Explore API's`}
              </Button>
            </Tooltip>
          </Flex>
        </Flex>
        <ReactPlayer url={imageUrl} height={400} width={500}
          playing
          loop
          autoPlay
          muted />
      </Flex>
      <EarlyAccess setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
    </div>
  )
};

const ContactMobile = ({
  info: {
    header,
    descriptionLine1,
    descriptionLine2,
    imageUrl
  }
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return <div key={header} className="content-car animate__animated animate__fadeInUp" style={{ paddingTop: 5 }}>
    <Flex vertical={true} align='center' justify='center' style={{ textAlign: 'center', padding: '0 25px' }}>
      <Title level={3} style={{ fontWeight: 'bolder' }}>{header}</Title>
      <Title level={4} style={{ marginTop: 0, marginBottom: 0, fontWeight: 400 }}>{descriptionLine1} {descriptionLine2}</Title>
      <ReactPlayer url={imageUrl} height={'100%'} width={'100%'} style={{ margin: '20px 0' }}
        playing
        loop
        autoPlay
        muted />
      <Flex vertical={false} gap={10}>
        <Button type='primary' onClick={() => setIsModalOpen(true)}>Get Early Access</Button>
        <Tooltip placement="top" title={`Coming soon...`}>
          <Button disabled style={{ border: '1px solid #ccc', marginLeft: 10, height: 40, width: 150, fontSize: 16, borderRadius: 5, color: '#777' }}>
            {`Explore API's`}
          </Button>
        </Tooltip>
      </Flex>
    </Flex>
    <EarlyAccess setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
  </div>
}

export default function TopSolutions() {
  const [activeTab, setActiveTab] = useState('podcasts');
  const tabsRef = useRef([]);

  const { isMobile, isTablet, isDesktop } = useResponsive();
  console.log("isMobileisMobileisMobile", isMobile, isTablet)

  const container = useRef(null);

  const getContentComponent = (tabName) => {
    const info = tabs.find(t => t.name === tabName) || { info: { header: '', descriptionLine1: '', descriptionLine2: '', imageUrl: '' } };
    if (isTablet) {
      return <Contact info={info.info} />
    }
    if (isMobile) {
      return <ContactMobile info={info.info} />
    }
    return <></>
  };

  return (
    <div className={styles.solutionMainDiv}>
      <div ref={container} className={styles.container} style={{ height: !isTablet ? 'auto' : '' }}>
        <div className={styles.header}>
          <h1>Explore our solutions </h1>
        </div>
        <div className={styles.sticky}>
          <div className={styles.tabNav} style={{ justifyContent: isTablet ? "center" : 'flex-start' }}>
            {tabs.map((tab, index) => (
              <div
                key={tab.name}
                ref={(el) => (tabsRef.current[index] = el)}
                onClick={() => {
                  setActiveTab(tab.name);
                  tabsRef.current[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
                }}
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
