'use client'
import React from 'react'
import TopSolutions from '@/components/TopSolutions';
import SolutionsContent from '@/components/SolutionsContent';
import styles from '../page.module.scss'
import Footer from '@/components/Footer';

const Solutions = () => {
  return (
    <>
      <TopSolutions />
      <SolutionsContent />
    </>
  )
}

export default Solutions