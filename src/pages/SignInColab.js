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

export default function SignInColab  () {

  const [visible, setVisible] = useState(true);
  const openDrawer = () => setVisible(!visible);

  let { pathname } = useLocation();

  const [fixed, setFixed] = useState(true);


  const onFinish = (values) => {
    console.log("Success:", values);
    let data = {...values}
    data.toDo = [
      {
        "_id": "620c14bbf9a23e45f11d3826",
        "title": "economie article N°2",
        "dateAjou": "2022-2-15",
        "theme": "economie",
        "text": "L'économie du Maroc est une économie de marché d'inspiration libérale....",
        "traduction": "الاقتصاد المغربي هو اقتصاد سوقي مستوحى من الليبرالية. ومع ذلك ، تلعب ا...",
        "textCorrige": "L'économie du Maroc est une économie de marché d'inspiration libérale....",
        "traductionCorrige": "الاقتصاد المغربي هو اقتصاد سوقي مستوحى من الليبرالية. ومع ذلك ، تلعب ا..."
      },
      {
        "_id": "620c14bbf9a23e45f11d3828",
        "title": "economie article N°4",
        "dateAjou": "2022-2-15",
        "theme": "economie",
        "text": "L'économie du Maroc est une économie de marché d'inspiration libérale....",
        "traduction": "الاقتصاد المغربي هو اقتصاد سوقي مستوحى من الليبرالية. ومع ذلك ، تلعب ا...",
        "textCorrige": "L'économie du Maroc est une économie de marché d'inspiration libérale....",
        "traductionCorrige": "الاقتصاد المغربي هو اقتصاد سوقي مستوحى من الليبرالية. ومع ذلك ، تلعب ا..."
      },
      {
        "_id": "620c14bbf9a23e45f11d3827",
        "title": "economie article N°3",
        "dateAjou": "2022-2-15",
        "theme": "economie",
        "text": "L'économie du Maroc est une économie de marché d'inspiration libérale....",
        "traduction": "الاقتصاد المغربي هو اقتصاد سوقي مستوحى من الليبرالية. ومع ذلك ، تلعب ا...",
        "textCorrige": "L'économie du Maroc est une économie de marché d'inspiration libérale....",
        "traductionCorrige": "الاقتصاد المغربي هو اقتصاد سوقي مستوحى من الليبرالية. ومع ذلك ، تلعب ا..."
      },
      {
        "_id": "620c14bbf9a23e45f11d3829",
        "title": "economie article N°5",
        "dateAjou": "2022-2-15",
        "theme": "economie",
        "text": "L'économie du Maroc est une économie de marché d'inspiration libérale....",
        "traduction": "الاقتصاد المغربي هو اقتصاد سوقي مستوحى من الليبرالية. ومع ذلك ، تلعب ا...",
        "textCorrige": "L'économie du Maroc est une économie de marché d'inspiration libérale....",
        "traductionCorrige": "الاقتصاد المغربي هو اقتصاد سوقي مستوحى من الليبرالية. ومع ذلك ، تلعب ا..."
      },
      {
        "_id": "620c14bbf9a23e45f11d382a",
        "title": "economie article N°6",
        "dateAjou": "2022-2-15",
        "theme": "economie",
        "text": "L'économie du Maroc est une économie de marché d'inspiration libérale....",
        "traduction": "الاقتصاد المغربي هو اقتصاد سوقي مستوحى من الليبرالية. ومع ذلك ، تلعب ا...",
        "textCorrige": "L'économie du Maroc est une économie de marché d'inspiration libérale....",
        "traductionCorrige": "الاقتصاد المغربي هو اقتصاد سوقي مستوحى من الليبرالية. ومع ذلك ، تلعب ا..."
      },
      {
        "_id": "620c14bbf9a23e45f11d382b",
        "title": "economie article N°7",
        "dateAjou": "2022-2-15",
        "theme": "economie",
        "text": "L'économie du Maroc est une économie de marché d'inspiration libérale....",
        "traduction": "الاقتصاد المغربي هو اقتصاد سوقي مستوحى من الليبرالية. ومع ذلك ، تلعب ا...",
        "textCorrige": "L'économie du Maroc est une économie de marché d'inspiration libérale....",
        "traductionCorrige": "الاقتصاد المغربي هو اقتصاد سوقي مستوحى من الليبرالية. ومع ذلك ، تلعب ا..."
      },
      {
        "_id": "620c14bbf9a23e45f11d382f",
        "title": "economie article N°11",
        "dateAjou": "2022-2-15",
        "theme": "economie",
        "text": "L'économie du Maroc est une économie de marché d'inspiration libérale....",
        "traduction": "الاقتصاد المغربي هو اقتصاد سوقي مستوحى من الليبرالية. ومع ذلك ، تلعب ا...",
        "textCorrige": "L'économie du Maroc est une économie de marché d'inspiration libérale....",
        "traductionCorrige": "الاقتصاد المغربي هو اقتصاد سوقي مستوحى من الليبرالية. ومع ذلك ، تلعب ا..."
      },
      {
        "_id": "620c14bbf9a23e45f11d382e",
        "title": "economie article N°10",
        "dateAjou": "2022-2-15",
        "theme": "economie",
        "text": "L'économie du Maroc est une économie de marché d'inspiration libérale....",
        "traduction": "الاقتصاد المغربي هو اقتصاد سوقي مستوحى من الليبرالية. ومع ذلك ، تلعب ا...",
        "textCorrige": "L'économie du Maroc est une économie de marché d'inspiration libérale....",
        "traductionCorrige": "الاقتصاد المغربي هو اقتصاد سوقي مستوحى من الليبرالية. ومع ذلك ، تلعب ا..."
      }]

    data.done = [
      {
        "_id": "620c1519d3745724acf8e0a6",
        "title": "sprot article N°6",
        "dateAjou": "2022-2-15",
        "theme": "sport",
        "text": "L’histoire du sport au Maroc remontre jusqu’au 19e siècle, ce sont les sports équestres qui intéressaient le peuple marocain. Mais l’arrivée des Européens a changé la donne en important le cyclisme, la natation, le basketball, la pétanque et le football qui est très vite devenu le premier sport national. Depuis l'époque du protectorat, beaucoup de jeunes se sont montrés enthousiastes au développement de ce sport au Maroc. Cependant, c’était l’athlétisme qui a porté haut les couleurs du pays, avec plusieurs médailles d’or remportées aux Jeux olympiques.",
        "traduction": "الاقتصاد المغربي هو اقتصاد سوقي مستوحى من الليبرالية. ومع ذلك ، تلعب ا...",
        "textCorrige": "L'économie du Maroc est une économie de marché d'inspiration libérale....",
        "traductionCorrige": "الاقتصاد المغربي هو اقتصاد سوقي مستوحى من الليبرالية. ومع ذلك ، تلعب ا..."
      },
      {
        "_id": "620c1519d3745724acf8e0a5",
        "title": "sprot article N°5",
        "dateAjou": "2022-2-15",
        "theme": "sport",
        "text": "L’histoire du sport au Maroc remontre jusqu’au 19e siècle, ce sont les sports équestres qui intéressaient le peuple marocain. Mais l’arrivée des Européens a changé la donne en important le cyclisme, la natation, le basketball, la pétanque et le football qui est très vite devenu le premier sport national. Depuis l'époque du protectorat, beaucoup de jeunes se sont montrés enthousiastes au développement de ce sport au Maroc. Cependant, c’était l’athlétisme qui a porté haut les couleurs du pays, avec plusieurs médailles d’or remportées aux Jeux olympiques.",
        "traduction": "الاقتصاد المغربي هو اقتصاد سوقي مستوحى من الليبرالية. ومع ذلك ، تلعب ا...",
        "textCorrige": "L'économie du Maroc est une économie de marché d'inspiration libérale....",
        "traductionCorrige": "الاقتصاد المغربي هو اقتصاد سوقي مستوحى من الليبرالية. ومع ذلك ، تلعب ا..."
      },
      {
        "_id": "620c1519d3745724acf8e0a7",
        "title": "sprot article N°7",
        "dateAjou": "2022-2-15",
        "theme": "sport",
        "text": "L’histoire du sport au Maroc remontre jusqu’au 19e siècle, ce sont les sports équestres qui intéressaient le peuple marocain. Mais l’arrivée des Européens a changé la donne en important le cyclisme, la natation, le basketball, la pétanque et le football qui est très vite devenu le premier sport national. Depuis l'époque du protectorat, beaucoup de jeunes se sont montrés enthousiastes au développement de ce sport au Maroc. Cependant, c’était l’athlétisme qui a porté haut les couleurs du pays, avec plusieurs médailles d’or remportées aux Jeux olympiques.",
        "traduction": "الاقتصاد المغربي هو اقتصاد سوقي مستوحى من الليبرالية. ومع ذلك ، تلعب ا...",
        "textCorrige": "L'économie du Maroc est une économie de marché d'inspiration libérale....",
        "traductionCorrige": "الاقتصاد المغربي هو اقتصاد سوقي مستوحى من الليبرالية. ومع ذلك ، تلعب ا..."
      },
      {
        "_id": "620c1519d3745724acf8e0a9",
        "title": "sprot article N°9",
        "dateAjou": "2022-2-15",
        "theme": "sport",
        "text": "L’histoire du sport au Maroc remontre jusqu’au 19e siècle, ce sont les sports équestres qui intéressaient le peuple marocain. Mais l’arrivée des Européens a changé la donne en important le cyclisme, la natation, le basketball, la pétanque et le football qui est très vite devenu le premier sport national. Depuis l'époque du protectorat, beaucoup de jeunes se sont montrés enthousiastes au développement de ce sport au Maroc. Cependant, c’était l’athlétisme qui a porté haut les couleurs du pays, avec plusieurs médailles d’or remportées aux Jeux olympiques.",
        "traduction": "الاقتصاد المغربي هو اقتصاد سوقي مستوحى من الليبرالية. ومع ذلك ، تلعب ا...",
        "textCorrige": "L'économie du Maroc est une économie de marché d'inspiration libérale....",
        "traductionCorrige": "الاقتصاد المغربي هو اقتصاد سوقي مستوحى من الليبرالية. ومع ذلك ، تلعب ا..."
      }
    ]
    localStorage.setItem("data", data)
    history.push("/colab")
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div className="sign-up-header">
        <div className="content">
          <Title>Login - Collaborateur</Title>
          <p className="text-lg">
            Rejoinnez nos redacteurs, traducteurs et correcteurs.
          </p>
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
          <Link to="/signup-member" className="font-bold text-dark">
            Sign Up
          </Link>
        </p>
      </Card>
    </>
  );
}
