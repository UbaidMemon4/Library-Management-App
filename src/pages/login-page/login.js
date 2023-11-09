import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import "./login.css";
import { useDispatch } from "react-redux";
import loginUser from "../../store/librarySlice";
const Login = () => {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    const signUpUser = JSON.parse(localStorage.getItem("signup"));
    if (signUpUser) {
      if (
        signUpUser.email == values.email &&
        signUpUser.password == values.password
      ) {
        dispatch(loginUser(signUpUser));
      } else {
        alert("Invalid Credentials");
      }
    } else {
      alert("user not found");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
return(
  <div className="login_main">
  <h1> Login page</h1>
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
    autoComplete="off"
  >
    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: "Please input your Email!",
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: "Please input your password!",
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
</div>

)
};
export default Login;
