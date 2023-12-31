import React, { useState } from "react";
import { Button, Modal, Form, Input, Space, Checkbox } from "antd";
import "./author.css";
import { useDispatch, useSelector } from "react-redux";
import { addAuthor } from "../../store/librarySlice";

const Author = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onFinish = (values) => {
    console.log("Success:", values);
    setIsModalOpen(false);
    dispatch(addAuthor(values));
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
  const authorList = useSelector((s) => s.author);
  return (
    <div className="modal-main">
      <div className="head-butons">
        <Button type="primary">author({authorList.lenght})</Button>
        <>
          <Button type="primary" onClick={showModal}>
            Add Author
          </Button>
          <Modal
            title="Add Author"
            open={isModalOpen}
            onOk={onFinish}
            onCancel={handleCancel}
            footer={null}
            width={700}
          >
            <div className="modal-head">
              <h1>Add Author</h1>
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
                label="Author"
                name="author"
                rules={[
                  {
                    required: true,
                    message: "Please input your author!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

                    <Form.Item
                      label="Qualification"
                      name="qualification"
                      rules={[
                        {
                          required: true,
                          message: "Please input your qualification!",
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
                  <Button type="primary" htmlType="submit" onClick={onFinish}>
                    Submit
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </Modal>
        </>
      </div>
      <div>
        {authorList.map((t) => {
          return (
            <div className="author-container">
              <p>{"Author Name : " + t.author}</p>
              <h3>{"Qualification : " + t.qualification}</h3>

              <button className="author-button">Edit</button>
              <button className="author-button">Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Author;
