'use client'
import React from 'react'
import SolutionsContent from '../../components/SolutionsContent';
import SolutionsContentMobile from '../../components/SolutionsContentMobile';
import TopSolutions from '../../components/TopSolutions';
import { useResponsive } from '../../hooks/useResponsive';

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
      <TopSolutions />
      {getContentComp()}
    </>
  )
}

export default Solutions