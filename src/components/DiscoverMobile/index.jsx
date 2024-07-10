import React, { useState } from 'react'
import CardContainer from './CardContainer'
import EarlyAccess from '../EarlyAccess'
import { Button } from 'antd'
import Featured from '../Featured'

const DiscoverMobile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div >
      <div style={{
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        // height: '80%',
        marginTop: 20
      }} className="bg-discover">
        <h2 style={{ fontWeight: 'bolder' }}>Discover The Micro Advantage</h2>
        <CardContainer />
        <Featured />
        <div style={{ height: 300 }}>
          <h2 style={{ fontWeight: 'bolder', color: '#000' }}>The Future of Content Unlocking with Micro Precision Is Here</h2>
          <Button type="primary" onClick={() => setIsModalOpen(true)}>
            Get Early Access
          </Button>
        </div>
      </div>
      <EarlyAccess setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
    </div>
  )
}

export default DiscoverMobile