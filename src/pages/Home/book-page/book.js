import React, { useState } from "react";
import { Button, Modal, Form, Input, Space, Checkbox } from "antd";
import "./book.css";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../../../store/librarySlice";

const Books = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onFinish = (values) => {
    console.log("Success:", values);
    setIsModalOpen(false);
    dispatch(addBook(values));
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
  const bookList = useSelector((s) => s.books);
  return (
    <div className="modal-main">
      <div className="head-butons">
        <Button type="primary">book({bookList.lenght})</Button>
        <>
          <Button type="primary" onClick={showModal}>
            Add Book
          </Button>
          <Modal
            title="Add Book"
            open={isModalOpen}
            onOk={onFinish}
            onCancel={handleCancel}
            footer={null}
            width={700}
          >
            <div className="modal-head">
              <h1>Add Book</h1>
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
                label="Book Name"
                name="bookname"
                rules={[
                  {
                    required: true,
                    message: "Please input your bookname!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
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
        {bookList.map((t) => {
          return (
            <div className="book-container">
              <h3>{"Book Name : " + t.bookname}</h3>
              <p>{"Shelve Name : " + t.shelve}</p>
              <p>{"Author Name : " + t.author}</p>

              <button className="book-button">Edit</button>
              <button className="book-button">Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Books;
