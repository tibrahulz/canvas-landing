import React from 'react'
import { Typography } from 'antd'
import Image from 'next/image';
import ReactPlayer from 'react-player';

const { Title, Paragraph } = Typography;

const sections = [
  { title: 'UPLOAD', description: 'Drag, drop, add descriptions & upload.', image: '/videos/upload.mov' },
  { title: 'ADD THE MICRO LOGIC', description: 'Lock the peaks of your content & build unique interactions.', image: '/videos/lock-logic.mov' },
  { title: 'CUSTOMIZE', description: 'Select from micro payments, promocodes, forms & more', image: '/videos/customize.mov' },
  { title: 'EMBED', description: 'Extract your unique embed code to add on your website.', image: '/videos/embed-sol.mov' },
  { title: 'EARN ', description: 'Earn audience engagement & build new revenue channels.', image: '/videos/earn.mov' },
];

const SolutionsContentMobile = () => {
  return (
    <div style={{}}>
      <div style={{ padding: '40px 25px 120px' }}>
        <Title level={2} style={{ textAlign: 'center' }}>The Stripe For The World Of Micro Gateway</Title>
        {sections.map(section => <div key={section.id}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: 20 }}
        >
          <Title level={2}>{section.title}</Title>
          <Paragraph>{section.description}</Paragraph>
          <ReactPlayer url={section.image} height={"100%"} width={"100%"}
            playing
            loop
            autoPlay
            muted />
        </div>)}
      </div>
    </div>
  )
}

export default SolutionsContentMobile;
