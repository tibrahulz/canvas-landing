import React, { useState } from 'react';
import { Button, Form, Input, InputNumber, Modal } from 'antd';
import DoneImg from '../../../public/images/done.svg';
import Image from 'next/image';

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const EarlyAccess = ({
  isModalOpen,
  setIsModalOpen
}) => {

  const [isDataSaved, setIsDataSaved] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setIsDataSaved(false);
  };

  const onFinish = (data) => {
    console.log(data);
    fetch('/api/user', {
      method: 'post',
      body: JSON.stringify(data)
    }).then(res => setIsDataSaved(true)).catch(err => console.log(err))
  }

  return (
    <Modal
      title={isDataSaved ? " " : "Just a Few Quick Details to Get Started!"}
      open={isModalOpen}
      onOk={handleOk}
      centered
      destroyOnClose
      onCancel={handleCancel}
      footer={<></>}
      styles={{
        header: {
          background: "#EFEFEF",
          padding: '18px 24px',
          height: isDataSaved ? 80 : 60,
          textAlign: 'center'
        },
        body: {
          paddingLeft: '20px',
          paddingRight: '20px',
          paddingTop: '10px',
          paddingBottom: '24px',
        }
      }}
    >
      {!isDataSaved ? <>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          style={{
            maxWidth: 600,
          }}
          layout="vertical"
          validateMessages={validateMessages}
        >
          <Form.Item
            name={'name'}
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={'email'}
            label="Email"
            rules={[
              {
                required: true,
              },
              {
                type: 'email',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              ...layout.wrapperCol,
              // offset: 8,
            }}
            style={{
              marginTop: 50
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </> : <>
        <Image src={DoneImg} alt={`done`} height={60} width={60} style={{
          position: 'absolute', top: 50, transform: 'translate(-50%)',
          left: '50%'
        }} />
        <p style={{ textAlign: 'center', marginTop: 20 }}>Wohoo! We’ll get back to you soon.😊</p>
      </>}
    </Modal>
  );
};
export default EarlyAccess;