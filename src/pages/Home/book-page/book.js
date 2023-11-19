import React, { useState } from "react";
import { Button, Modal, Form, Input, Space, Checkbox, Card } from "antd";
import "./book.css";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../../../store/librarySlice";

const Books = () => {
  const [form] = Form.useForm();
  const [bookId, setBookId] = useState("");
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onFinish = (values) => {
    console.log("Success:", values);

    dispatch(addBook(values));
    setIsModalOpen(false);
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
  const onEdit = (t) => {
    setIsModalOpen(true);
    setBookId(t.id);
    form.setFieldsValue({
      bookname: t.bookname,
      shelve: t.shelve,
      author: t.author,
    });
  };

  return (
    <div className="modal-main">
      <div className="head-butons">
        <Button type="primary">book({bookList.length})</Button>
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
            form={form}
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
        {bookList.map((t) => {
          return (
            <div key={t.id} className="book-container">
              <Card
                title="Books"
                bordered={false}
                className="boder"
                style={{
                  width: 1150,
                }}
              >
                <p>
                  <b>Book Name : </b>
                  {t.bookname}
                </p>
                <p>
                  <b>Shelve Name : </b>
                  {t.shelve}
                </p>
                <p>
                  <b>Author Name : </b>
                  {t.author}
                </p>
                <Button
                  className="book-button"
                  type="primary"
                  onClick={() => onEdit(t)}
                >
                  Edit
                </Button>
                <Button className="book-button" type="primary">
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
export default Books;
