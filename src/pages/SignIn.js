/* eslint-disable */
/*!
=========================================================
* Muse Ant Design Dashboard - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/



import React, { useState } from "react";
import {
  Layout,
  Menu,
  Button,
  Typography,
  Card,
  Form,
  Input,
  Checkbox,
  Affix,
} from "antd";

import logo1 from "../assets/images/logos-facebook.svg";
import logo2 from "../assets/images/logo-apple.svg";
import logo3 from "../assets/images/Google__G__Logo.svg.png";

import Sidenav from "../components/layout/Sidenav";
import Header from "../components/layout/Header";

import { Link, useLocation } from "react-router-dom";

// const { Header: AntHeader, Sider } = Layout;

// import {
//   DribbbleOutlined,
//   TwitterOutlined,
//   InstagramOutlined,
//   GithubOutlined,
// } from "@ant-design/icons";

const { Title } = Typography;
const { Footer, Content } = Layout;

export default function SignUp  () {

  const [visible, setVisible] = useState(true);
  const openDrawer = () => setVisible(!visible);

  let { pathname } = useLocation();

  const [fixed, setFixed] = useState(true);


  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div className="sign-up-header">
        <div className="content">
          <Title>Login - Admin</Title>
        </div>
      </div>

      <Card
        className="card-signup header-solid ant-card pt-0"
        title={<h5>Sign in</h5>}
        bordered="false"
      >
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="row-col"
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
            ]}
          >
            <Input placeholder="email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
            ]}
          >
            <Input placeholder="Passwoed" />
          </Form.Item>

          <Form.Item>
            <Button
              style={{ width: "100%" }}
              type="primary"
              htmlType="submit"
            >
              SIGN IN
            </Button>
          </Form.Item>
        </Form>
        <p className="font-semibold text-muted text-center">
          You don't have an account?{" "}
          <Link to="/signup" className="font-bold text-dark">
            Sign Up
          </Link>
        </p>
      </Card>
    </>
  );
}
