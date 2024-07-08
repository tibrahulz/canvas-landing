'use client'
import styles from './page.module.scss'
import { Suspense, useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis'
import LandingHeader from '@/components/LandingHeder';
import Gateway from '@/components/Gateway';
import CaseStudyCard from '@/components/CaseStudy';
import CardContainer from '@/components/CardContainer';
import { Button } from 'antd';
import Footer from '@/components/Footer';
import TopSection from '@/components/TopSection';
import EarlyAccess from '@/components/EarlyAccess';

export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <>
      <TopSection />
      <Gateway />
      <CaseStudyCard />
      <div style={{
        height: "80vh"
      }}>
        <div style={{
          width: '100%',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '80%',
        }} className="bg-discover">
          <h2 style={{ fontWeight: 'bolder', color: '#000' }}>DISCOVER THE MICRO ADVANTAGE</h2>
          <CardContainer />
          <div>
            <h2 style={{ fontWeight: 'bolder', color: '#000' }}>The Future of Content Unlocking with Micro Precision Is Here</h2>
            <Button type="primary" onClick={() => setIsModalOpen(true)}>
              Get Early Access
            </Button>
          </div>
        </div>
        <EarlyAccess setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
      </div>
    </>
  )
}
