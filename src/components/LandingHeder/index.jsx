'use client'
import React, { useState } from 'react';
import CanvasLogo from '../../../public/images/logo.svg';
import { Layout, Menu, Button, Flex, Dropdown, Divider, Space } from 'antd';
import { PiCaretDownBold } from 'react-icons/pi';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import EarlyAccess from '../EarlyAccess';
import MenuBtn from '../../../public/images/menu-top.svg';
import { useResponsive } from '../../hooks/useResponsive';
import Link from 'next/link';


const { Header: AntHeader } = Layout;

const LandingHeader = () => {
  const router = useRouter();

  const { isMobile, isTablet, isDesktop } = useResponsive();

  const [current, setCurrent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const

  const navigateTo = (path) => {
    console.log(path);
    router.push(path)
  }

  const onClick = (e) => {
    // console.log(e.target.value)
    setCurrent(e.key);
  };

  const menuItems = [
    {
      label: 'Solutions',
      key: 'solutions',
      url: '/solution'
      // onClick: () => naviagteTo('/solution')
    },
    {
      label: 'Pricing',
      key: 'pricing',
      url: '/pricing'
      // onClick: () => naviagteTo('/pricing')
    },
    {
      key: 'wallet',
      disabled: true,
      label: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span>Resource</span>
          <PiCaretDownBold style={{ marginLeft: 10 }} />
        </div>
      ),
    },
  ];

  const menu = (<Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" style={{
    padding: '0 50px', background: 'transparent', borderBottom: 0, fontFamily: 'Nunito, sans-serif',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '22px',
  }}>
    {menuItems.map((childNav) => (
      <Menu.Item key={childNav.key} title="" disabled={childNav.disabled} className={`${current === childNav.key ? 'text-fill' : ''}`}>
        <Link href={childNav.url || ''}>{childNav.label}</Link>
      </Menu.Item>
    ))}
  </Menu>)

  if (isDesktop || isTablet) {

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
        zIndex: 10
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
          onClick={() => {
            setCurrent('');
            router.push('/')
          }}
        />
        <Flex align='center' style={{ paddingRight: 40 }}>
          {menu}
          <Button type="primary" style={{ color: '#fff', height: 40, minWidth: 150, fontSize: '16px' }}
            onClick={() => setIsModalOpen(true)}>Get Early Access</Button>
        </Flex>
        <EarlyAccess setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
      </AntHeader>
    )
  }
  if (isMobile) {
    return <AntHeader className="header" style={{
      background: '#fff',
      borderBottom: 0,
      position: 'fixed',
      width: '100vw',
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
      zIndex: 10
    }}>
      <Flex align='center' justify='space-between' style={{ paddingRight: 40, width: '100%' }}>
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
        <div>
          <Dropdown
            menu={{
              items: menuItems.map((childNav) => ({
                key: childNav.key,
                label: <Link href={childNav.url || ''}>{childNav.label}</Link>,
                disabled: childNav.disabled,
                onClick: () => onClick({ key: childNav.key }),
                className: `${current === childNav.key ? 'text-fill' : ''}`,
              }))
            }}
            trigger={['click']}
          >
            <Image alt="menu" src={MenuBtn} />
          </Dropdown>

          <Button type="primary" style={{ color: '#fff', marginLeft: 20, height: 40, minWidth: 150, fontSize: '16px' }}
            onClick={() => setIsModalOpen(true)}>Get Early Access</Button>

        </div>
      </Flex >
    </AntHeader >
  }

  return <></>
}

export default LandingHeader