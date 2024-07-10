import React, { useState } from 'react'
import CardContainer from './CardContainer'
import EarlyAccess from '../EarlyAccess'
import { Button } from 'antd'
import Featured from '../Featured'

const Discover = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div style={{
      // height: "80vh",
      paddingBottom: 90
    }}>
      <div style={{
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }} className="bg-discover">
        <h2 style={{ fontWeight: 'bolder' }}>Discover The Micro Advantage</h2>
        <CardContainer />

        <Featured />

        <div>
          <h2 style={{ fontWeight: 'bolder', color: '#000', marginBottom: 40 }}>The Future of Content Unlocking with Micro Precision Is Here</h2>
          <Button type="primary" onClick={() => setIsModalOpen(true)}>
            Get Early Access
          </Button>
        </div>
      </div>
      <EarlyAccess setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
    </div>
  )
}

export default Discover