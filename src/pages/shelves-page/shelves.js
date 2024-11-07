import React, { useState } from "react";
import { Button, Modal, Form, Input, Card } from "antd";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addShelve,
  deleteshelve,
  updateShelve,
} from "../../store/librarySlice";

const Shelves = () => {
  const [form] = Form.useForm();
  const [shelveId, setShelveId] = useState("");
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onFinish = (values) => {
    if (shelveId) {
      const update = {
        ...values,
        id: shelveId,
      };
      dispatch(updateShelve(update));
    } else {
      dispatch(addShelve(values));
    }
    setIsModalOpen(false);
    form.resetFields();
  };
  const onClickDelete = (id) => {
    dispatch(deleteshelve(id));
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

  const onEdit = (t) => {
    console.log(t.id);
    setShelveId(t.id);
    setIsModalOpen(true);
    form.setFieldsValue({
      shelve: t.shelve,
    });
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
                  Submit
                </Button>
              </div>
            </Form>
          </Modal>
        </>
      </div>
      <div>
        {shelveList.map((t) => {
          return (
            <div className="book-container">
              <Card
                title="Shelves"
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

                <Button
                  className="shelve-button"
                  type="primary"
                  onClick={() => onEdit(t)}
                >
                  Edit
                </Button>
                <Button
                  className="shelve-button"
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
export default Shelves;
