import React, { useState } from "react";
import { Button, Modal, Form, Input, Card } from "antd";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { addBook, deleteBook, updateBook } from "../../../store/librarySlice";

const Books = () => {
  const [form] = Form.useForm();
  const [bookId, setBookId] = useState("");
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onFinish = (values) => {
    if (bookId) {
      const update = {
        ...values,
        id: bookId,
      };
      dispatch(updateBook(update));
    } else {
      dispatch(addBook(values));
    }
    setIsModalOpen(false);
    form.resetFields();
  };
  const onClickDelete = (id) => {
    dispatch(deleteBook(id));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };
  const bookList = useSelector((s) => s.books);
  const onEdit = (t) => {
    console.log(t.id);
    setBookId(t.id);
    setIsModalOpen(true);
    form.setFieldsValue({
      bookname: t.bookname,
      author: t.author,
      shelve: t.shelve,
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
              <div className="form-button">
                <Button type="primary" onClick={handleCancel}>
                  Cancel
                </Button>
                <Button type="primary" htmlType="submit">
                  {bookId ? "Update" : "Submit"}
                </Button>
              </div>
            </Form>
          </Modal>
        </>
      </div>
      <div className="book-container">
        {bookList.map((t) => {
          return (
            <Card key={t.id} title="Books" bordered={false} className="boder">
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
              <Button
                className="book-button"
                type="primary"
                onClick={() => onClickDelete(t.id)}
              >
                Delete
              </Button>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
export default Books;
