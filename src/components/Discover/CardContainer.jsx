import React from 'react';
import { Card, Typography } from 'antd';
// import './App.css';
// import Revnue from '../../public/images/revenue.svg';
import Image from 'next/image';

const { Title, Paragraph } = Typography;

const cardData = [
  {
    title: 'Enhanced Revenues & Interactions',
    description: 'Monetize smallest sections or complete files across currencies or any business logics beyond subscriptions & ads.',
    icon: require('../../../public/images/revenue-main.svg'),
  },
  {
    title: 'Reduced \n Churn Rate',
    description: 'Boost audience conversion by tapping into their instant gratification needs.',
    icon: require('../../../public/images/rate-main.svg'),
  },
  {
    title: 'Plugin-Ready APIs & Embeds',
    description: 'Discover the future of content engagements through a seemless modular API integration.',
    icon: require('../../../public/images/embed.svg'),
  },
];

const CardContainer = () => {
  return (
    <div className="card-container">
      {cardData.map((card, index) => (
        <Card key={index} className="custom-card" >
          <div>
            <Image src={card.icon} alt={card.title} />
          </div>
          <pre className="card-title" style={{ textWrap: 'balance', marginTop: 20 }}>
            <h2 style={{ lineHeight: '22px' }}>{card.title}</h2>
          </pre>
          <Paragraph className="card-description" style={{
            padding: '0 20px'
          }}>{card.description}</Paragraph>
        </Card>
      ))}
    </div>
  );
};

export default CardContainer;
