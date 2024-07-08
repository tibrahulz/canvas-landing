import React from 'react';
import { Card, Typography } from 'antd';
// import './App.css';
import Revnue from '../../public/images/revenue.svg';
import Image from 'next/image';

const { Title, Paragraph } = Typography;

const cardData = [
  {
    title: 'Enhanced Revenues & Interactions',
    description: 'Monetize smallest sections or complete files across currencies beyond subscriptions & ads.',
    icon: Revnue, // Replace with the actual icon URL
  },
  {
    title: 'Reduced \n Churn Rate',
    description: 'Boost audience conversion by tapping into their instant gratification needs.',
    icon: require('../../public/images/rate.png'), // Replace with the actual icon URL
  },
  {
    title: 'Plugin-Ready APIs & Embeds',
    description: 'Discover the future of content engagements through our proprietary technology.',
    icon: require('../../public/images/plugin.png'), // Replace with the actual icon URL
  },
];

const CardContainer = () => {
  return (
    <div className="card-container">
      {cardData.map((card, index) => (
        <Card key={index} className="custom-card">
          <div>
            <Image src={card.icon} alt={card.title} />
          </div>
          <pre className="card-title" style={{ textWrap: 'balance' }}>
            <h2 style={{ lineHeight: '22px' }}>{card.title}</h2>
          </pre>
          <Paragraph className="card-description">{card.description}</Paragraph>
        </Card>
      ))}
    </div>
  );
};

export default CardContainer;
