import React, { useState } from "react";
import { Button, Modal, Form, Input, Card } from "antd";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addAuthor,
  deleteAuthor,
  updateAuthor,
} from "../../store/librarySlice";

const Author = () => {
  const [form] = Form.useForm();
  const [authorId, setAuthorId] = useState("");
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onFinish = (values) => {
    if (authorId) {
      const update = {
        ...values,
        id: authorId,
      };
      dispatch(updateAuthor(update));
    } else {
      dispatch(addAuthor(values));
    }
    setIsModalOpen(false);
    form.resetFields();
  };
  const onClickDelete = (id) => {
    dispatch(deleteAuthor(id));
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
  const onEdit = (t) => {
    console.log(t.id);
    setAuthorId(t.id);
    setIsModalOpen(true);
    form.setFieldsValue({
      author: t.author,
      qualification: t.qualification,
    });
  };

  return (
    <div className="modal-main">
      <div className="head-butons">
        <Button type="primary">author({authorList.length})</Button>
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

              <div className="form-button">
                <Button type="primary" onClick={handleCancel}>
                  Cancel
                </Button>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Modal>
        </>
      </div>
      <div>
        {authorList.map((t) => {
          return (
            <div className="book-container">
              <Card
                title="Author"
                bordered={false}
                className="boder"
                style={{
                  width: 1150,
                }}
              >
                <p>
                  <b>Author Name : </b>
                  {t.author}
                </p>
                <p>
                  <b>Qualification : </b> {t.qualification}
                </p>

                <Button
                  className="author-button"
                  type="primary"
                  onClick={() => onEdit(t)}
                >
                  Edit
                </Button>
                <Button
                  className="author-button"
                  type="primary"
                  onClick={() => onClickDelete(t.id)}
                >
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
export default Author;
