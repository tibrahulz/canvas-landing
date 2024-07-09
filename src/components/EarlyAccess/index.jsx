import React, { useState } from 'react';
import { Button, Input, Modal } from 'antd';

const EarlyAccess = ({
  isModalOpen,
  setIsModalOpen
}) => {

  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const showModal = () => {
  //   setIsModalOpen(true);
  // };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      title="Just a Few Quick Details to Get Started!"
      open={isModalOpen}
      onOk={handleOk}
      centered
      onCancel={handleCancel}
      footer={<></>}
      styles={{
        header: {
          background: "#EFEFEF",
          padding: '10px 24px',
          // paddingT: '20px',
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
      <label>Name:</label>
      <Input />
      <label>Email:</label>
      <Input />
      <Button type='primary' style={{ borderRadius: 20, marginTop: 20 }}>
        Submit
      </Button>
    </Modal>
  );
};
export default EarlyAccess;