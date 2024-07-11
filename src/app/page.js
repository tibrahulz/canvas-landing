'use client'
import styles from './page.module.scss'
import { Suspense, useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis'
import LandingHeader from '../components/LandingHeder';
import Gateway from '../components/Gateway';
import CaseStudyCard from '../components/CaseStudy';
import Discover from '../components/Discover';
import DiscoverMobile from '../components/DiscoverMobile';
import CaseStudyCardMobile from '../components/CaseStudyCardMobile';
import { Button } from 'antd';
import Footer from '../components/Footer';
import Featured from '../components/Featured';
import TopSection from '../components/TopSection';
import TopSectionMobile from '../components/TopSectionMobile';
import EarlyAccess from '../components/EarlyAccess';
import GatewayMobile from '../components/GatewayMobile'
import { useResponsive } from '../hooks/useResponsive';
import { Helmet } from "react-helmet";

export default function Home() {

  const [domLoaded, setDomLoaded] = useState(false);
  const { isTablet, isMobile } = useResponsive();

  useEffect(() => {
    const lenis = new Lenis()

    setDomLoaded(true);

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  const getTopSectionComp = () => {
    if (isTablet) {
      return <TopSection />
    }
    if (isMobile) {
      return <TopSectionMobile />
    }
    return <></>
  }

  const getGatewayComp = () => {
    if (isTablet) {
      return <Gateway />
    }
    if (isMobile) {
      return <GatewayMobile />
    }
    return <></>
  }

  const getTestimonialComp = () => {
    if (isTablet) {
      return <CaseStudyCard />
    }
    if (isMobile) {
      return <CaseStudyCardMobile />
    }
    return <></>
  }

  const getDiscoverComp = () => {
    if (isTablet) {
      return <Discover />
    }
    if (isMobile) {
      return <DiscoverMobile />
    }
    return <></>
  }

  if (!domLoaded) {
    return <div style={{ height: '100vh' }}></div>
  }

  return (
    <>
      {/* <Helmet>
        <title>Your Micro Gateway to Untapped Content Potential</title>
      </Helmet> */}
      {getTopSectionComp()}
      {getGatewayComp()}
      {getTestimonialComp()}
      {getDiscoverComp()}
      {/* <Featured /> */}
    </>
  )
}
