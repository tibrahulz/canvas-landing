import React, { useState } from 'react';
import { Card, Row, Col, Typography, Button, Divider, Flex } from 'antd';
import Content from './Content';
import PodCastImg from '../../../public/images/podcast.svg'
import MusicImg from '../../../public/images/music.svg'
import BloggerImg from '../../../public/images/blogger.svg'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const caseStudy = [{
  id: 1,
  title: "Canvas X Podcast Co, India",
  description: `"Monetizing segments, and unlocking huge value for independent podcasters within the community. Powering a few handpicked shows within the network to gauge reactions and have the creators experience micro engagements and understand their audiences and their listening patterns better"`,
  descFooter: "Founder, Podcast Production Company, India",
  count1: "80+",
  count1Label: "Shows",
  count2: "50+",
  count2Label: "increase in interactions",
  image: PodCastImg
}, {
  id: 2,
  title: "Canvas X Music Label, India",
  description: `"Independent artists are using micro gateways to understand audience consumption patterns and identify exciting content peaks with promo codes to engage their community,”Monetizing segments, and unlocking huge value for independent podcasters within the community. Powering a few handpicked shows within the network to gauge reactions and have the creators experience micro engagements and understand their audiences and their listening patterns better"`,
  descFooter: "CEO, Music Label & Studio in India.",
  count1: "15000+",
  count1Label: "Artists",
  count2: "12.5%",
  count2Label: "increase in revenue",
  image: MusicImg
}, {
  id: 3,
  title: "Canvas X Bloggers Community, India",
  description: `"The micro technology helped showcase the untapped potential within specific content segments & help creators earn more through innovative audience engagement."`,
  descFooter: "Head, CEG Bloggers Community (India).",
  count1: "10000+",
  count1Label: "Bloggers",
  count2: "15%",
  count2Label: "increase in revenue",
  image: BloggerImg
}]

const CaseStudyCardMobile = () => {

  const [currentIndex, setCurrentIndex] = useState(1);

  return (
    <div style={{ position: 'relative' }}>
      <div style={{
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // height: '80%',
        paddingTop: 120,
        position: 'relative'
      }} className="bg-case">

        <h2 style={{ fontWeight: 'bolder', color: '#000', marginBottom: '30px' }}>
          Unlocking New Possibilities with MICRO : Case Studies
        </h2>
        <div style={{
          // height: '100%',
          width: 'calc(100% - 50px)',
          marginTop: '40px',
          position: 'relative'
        }} className="card-bg">

          {caseStudy.filter(f => f.id === currentIndex).map(cas => <Content setCurrentIndex={setCurrentIndex} totalLength={caseStudy.length} key={cas.id} {...cas} />)}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCardMobile;
