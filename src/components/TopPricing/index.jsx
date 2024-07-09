import styles from './styles.module.scss';
import Picture1 from '../../../public/images/sec1.png';
import Laptop from '../../../public/images/laptop-bg.png'
import FirstSection from '../../../public/images/solution-1.gif'
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button, Col, Flex, Row, Typography } from 'antd';
import { RiPlayLargeFill } from "react-icons/ri";
import { IoImagesOutline } from "react-icons/io5";
import { TbSquareLetterT } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa";
import { BsFillMicFill, BsPlayFill } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";


const pricing = [{
  id: 1,
  priceType: "Free",
  price: 0,
  benefits: [{
    id: 'b-1',
    name: "One team per user",
  }, {
    id: 'b-2',
    name: "One lock per canvas",
  }, {
    id: 'b-3',
    name: "5 cavases per user",
  }]
}, {
  id: 2,
  priceType: "Pro",
  price: 80,
  benefits: [{
    id: 'b-4',
    name: "Multiple teams",
  }, {
    id: 'b-5',
    name: "More Canvases",
  }, {
    id: 'b-6',
    name: "More Storage",
  }, {
    id: 'b-7',
    name: "More locks",
  }]
}]

export default function TopPricing() {

  return (
    <div className={styles.solutionMainDiv}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Canvas is built to protect & prioritize your interest</h1>
        </div>

        <div className={styles.sticky}>
          {pricing.map((price) => <div key={price.id} className={styles.card}>
            <span className={styles.text1}>
              {price.priceType}
            </span>
            <span className={styles.text}>
              <BsCurrencyDollar size={24} /> {price.price}
            </span>
            <div style={{ margin: '40px 0', display: 'flex', flexDirection: 'column' }}>
              {price.benefits.map((b) => <span key={b.id}>
                ✓ {b.name}
              </span>)}
            </div>
            <Button type='primary' className={styles.buttonBottom}>
              Upgrade
            </Button>
          </div>)}
        </div>
      </div>
    </div>
  )
}
