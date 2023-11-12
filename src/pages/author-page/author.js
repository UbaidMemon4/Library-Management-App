import React, { useState } from "react";
import { Button, Modal } from "antd";
import "./author.css";
const AppModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add Author
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="modal-main">
          <div className="modal-head">
            <h1>Add Author</h1>
          </div>
        </div>
      </Modal>
    </>
  );
};
const Author = () => {
  return (
    <div className="main-div">
      <div className="head-butons">
        <Button type="primary">Author(0)</Button>
        {AppModal()}
      </div>
    </div>
  );
};
export default Author;
