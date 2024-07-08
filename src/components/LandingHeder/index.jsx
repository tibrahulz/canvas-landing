'use client'
import React, { useState } from 'react';
import CanvasLogo from '../../../public/images/logo.svg';
import { FaPowerOff } from 'react-icons/fa';
import { Layout, Menu, Button, Card, Row, Col, Space, MenuProps, Modal, Form, Input, Flex } from 'antd';
import { PiCaretDownBold } from 'react-icons/pi';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import EarlyAccess from '@/components/EarlyAccess';


// import 'antd/dist/antd.css';
// type MenuItem = Required<MenuProps>['items'][number];

const { Header: AntHeader, Content } = Layout;

const LandingHeader = () => {
  const router = useRouter();

  const [current, setCurrent] = useState('mail');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigateTo = (path) => {
    console.log(path);
    router.push(path)
  }

  const onClick = (e) => {
    setCurrent(e.key);
  };
  const menuItems = (naviagteTo) => ([
    {
      label: 'Solutions',
      key: 'solutions',
      onClick: () => naviagteTo('/solution')
    },
    {
      label: 'Pricing',
      key: 'pricing',
    },
    {
      key: 'wallet',
      label: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span>Resource</span>
          <PiCaretDownBold style={{ marginLeft: 10 }} />
        </div>
      ),
    },
  ]);

  return (
    <AntHeader className="header" style={{
      background: '#fff',
      borderBottom: 0,
      position: 'fixed',
      width: '100%',
      zIndex: 999999,
      fontFamily: 'Nunito, sans-serif',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '22px',
      padding: '0 20px',
      height: '64px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 9
    }}>
      <Image
        src={CanvasLogo}
        alt="image"
        style={{
          height: 40,
          width: 40,
          paddingTop: 10,
          cursor: 'pointer'
        }}
        onClick={() => router.push('/')}
      />
      <Flex align='center' style={{ paddingRight: 40 }}>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={menuItems(navigateTo)} style={{
          padding: '0 50px', background: 'transparent', borderBottom: 0, fontFamily: 'Nunito, sans-serif',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: '22px',
        }} />
        <Button type="primary" style={{ color: '#fff', height: 40, width: 150, fontSize: '16px' }}
          onClick={() => setIsModalOpen(true)}>Get Early Access</Button>
      </Flex>
      <EarlyAccess setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
    </AntHeader>
  )
}

export default LandingHeader