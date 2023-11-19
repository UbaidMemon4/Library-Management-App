import React, { useState } from "react";
import { Button, Modal, Form, Input, Space, Checkbox, Card } from "antd";
import "./shelves.css";
import { useDispatch, useSelector } from "react-redux";
import { addShelve } from "../../store/librarySlice";

const Shelves = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onFinish = (values) => {
    console.log("Success:", values);
    setIsModalOpen(false);
    dispatch(addShelve(values));
    // console.log(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const shelveList = useSelector((s) => s.shelves);
  return (
    <div className="modal-main">
      <div className="head-butons">
        <Button type="primary">shelve({shelveList.length})</Button>
        <>
          <Button type="primary" onClick={showModal}>
            Add Shelves
          </Button>
          <Modal
            title="Add Shelves"
            open={isModalOpen}
            onOk={onFinish}
            onCancel={handleCancel}
            footer={null}
            width={700}
          >
            <div className="modal-head">
              <h1>Add Shelves</h1>
            </div>

            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Shelve"
                name="shelve"
                rules={[
                  {
                    required: true,
                    message: "Please input your shelve!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <div className="form-button">
                  <Button type="primary" onClick={handleCancel}>
                    Cancel
                  </Button>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </Modal>
        </>
      </div>
      <div>
        {shelveList.map((t) => {
          return (
            <div className="book-container">
              <Card
                title="Books"
                bordered={false}
                className="boder"
                style={{
                  width: 1150,
                }}
              >
                <p>
                  <b>Shelve Name : </b>
                  {t.shelve}
                </p>

                <Button className="shelve-button" type="primary">
                  Edit
                </Button>
                <Button className="shelve-button" type="primary">
                  Delete
                </Button>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Shelves;
