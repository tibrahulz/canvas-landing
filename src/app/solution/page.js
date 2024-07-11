'use client'
import React from 'react'
import SolutionsContent from '../../components/SolutionsContent';
import SolutionsContentMobile from '../../components/SolutionsContentMobile';
import TopSolutions from '../../components/TopSolutions';
import { useResponsive } from '../../hooks/useResponsive';
import Head from 'next/head';

const Solutions = () => {
  const { isTablet, isMobile } = useResponsive();

  const getContentComp = () => {
    if (isTablet) {
      return <SolutionsContent />
    }
    if (isMobile) {
      return <SolutionsContentMobile />
    }
    return <></>
  }

  return (
    <>
      <Head>
        <title>Elevating Content Interactions through Micro Gateway</title>
      </Head>
      <TopSolutions />
      {getContentComp()}
    </>
  )
}

export default Solutions