import { Button, Divider, Flex, Typography } from 'antd'
import React from 'react'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Image from 'next/image';
import CanvasLogo from '../../../public/images/logo.svg';

const { Title, Text } = Typography;


const Content = ({
  title,
  description,
  descFooter,
  count1,
  count1Label,
  count2,
  count2Label,
  totalLength,
  setCurrentIndex,
  image
}) => {
  return (
    <>
      <Flex vertical={true} style={{
        // height: 'calc(100% - 70px)',
        padding: '40px'
      }}>
        <Flex flex={1.5}>
          <div style={{ textAlign: 'left', paddingRight: 20 }}>
            <div style={{
              width: 160,
              height: 160,
              borderRadius: '50%',
              // backgroundColor: '#e0e0e0',
              marginBottom: '20px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Image src={image} alt="Logo" height={150} width={150} style={{ objectFit: 'contain' }} />
            </div>
            <Title level={4}>
              <b>{title}</b>
            </Title>
            <Text>{description}</Text>
            <br />
            <br />
            <br />
            <Text type="secondary" style={{ color: '#000' }}>{descFooter}</Text>
          </div>
        </Flex>
        <Divider type='vertical' style={{ height: 'calc(100% - 20px)' }} />
        <Flex vertical={true} flex={1} align='center' justify='flex-start'>
          <div >
            < Title level={2} className='my-t my-t-mobile' style={{
              marginBottom: 0, marginTop: 20
            }}>{count1}</Title>
            <Title level={4} style={{ marginTop: 0, fontSize: '20px' }}>
              <b>{count1Label}</b>
            </Title>
            <Title level={2} className='my-t my-t-mobile' style={{ marginBottom: 0, marginTop: 20 }}>{count2}</Title>
            <Title level={4} style={{ marginTop: 0, fontSize: '20px' }}>
              <b>{count2Label}</b>
            </Title>
          </div>

          <div style={{
            marginTop: 20
          }}>
            <Button type="default" icon={<LeftOutlined />} shape="circle" style={{ marginRight: 8, backgroundColor: '#CCD8F9' }} onClick={() => setCurrentIndex(prev => {
              if (prev === 1) {
                return totalLength
              } else {
                return prev - 1
              }
            })} />

            <Button type="default" icon={<RightOutlined />} shape="circle" style={{ backgroundColor: '#CCD8F9' }} onClick={() => setCurrentIndex(prev => {
              if (prev === totalLength) {
                return 1
              } else {
                return prev + 1
              }
            })} />
          </div>

        </Flex>
      </Flex>
    </>
  )
}
export default Content