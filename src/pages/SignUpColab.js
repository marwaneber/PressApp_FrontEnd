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
  Button,
  Typography,
  Card,
  Form,
  Input,
  Radio
} from "antd";

import { UploadOutlined } from '@ant-design/icons';

import logo1 from "../assets/images/logos-facebook.svg";
import logo2 from "../assets/images/logo-apple.svg";
import logo3 from "../assets/images/Google__G__Logo.svg.png";

import Sidenav from "../components/layout/Sidenav";
import Header from "../components/layout/Header";

import { Link, useLocation, useHistory } from "react-router-dom";

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
  const history = useHistory();
  const [visible, setVisible] = useState(true);
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url: 'http://www.baidu.com/xxx.png',
    }
  ]);
  const openDrawer = () => setVisible(!visible);

  let { pathname } = useLocation();

  const [fixed, setFixed] = useState(true);

  const handleChange = (info) => {
    let fileListIn = info.fileList;

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    fileListIn = fileListIn.slice(-2);

    // 2. Read from response and show file link
    // fileListIn = fileListIn.map(file => {
    //   if (file.status) {
    //     // Component will show file.url as link
    //     // file.url = file..url;
    //   }
    //   return file;
    // });

    setFileList({ ...fileList, fileListIn });
  };


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
    localStorage.setItem("data", JSON.stringify(data))
    history.push("/colab")
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const props = {
    action: '//jsonplaceholder.typicode.com/posts/',
    listType: 'picture',
    previewFile(file) {
      console.log('Your upload file:', file);
      // Your process logic. Here we just mock to the same file
      return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
        method: 'POST',
        body: file,
      })
        .then(res => res.json())
        .then(({ thumbnail }) => thumbnail);
    },
  };
  return (
    <>
      <div className="sign-up-header">
        <div className="content">
          <Title>Register - Collaborateur</Title>
          <p className="text-lg">
            Rejoinnez nos redacteurs, traducteurs et correcteurs.
          </p>
        </div>
      </div>

      <Card
        className="card-signup header-solid ant-card pt-0"
        title={<h5>Register - Collaborateur</h5>}
        bordered="false"
      >
        <Form
          name="basic"
          initialValues={{ remember: true, metier: "traducteur" }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="row-col"
        >
          <Form.Item
            name="name"
            rules={[
              { required: true, message: "Please input your name!" },
            ]}
          >
            <Input placeholder="Nom complet" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
            ]}
          >
            <Input type={"password"} placeholder="Passwoed" />
          </Form.Item>
          <Form.Item name="metier">
            <Radio.Group requiredMarkValue="traducteur">
              <Radio.Button value="redacteur">Redacteur</Radio.Button>
              <Radio.Button value="correcteur">Correcteur</Radio.Button>
              <Radio.Button value="traducteur">Traducteur</Radio.Button>
            </Radio.Group>
          </Form.Item>
          {/* <Form.Item
            name="file"
          >
            <Upload {...props} fileList={fileList}>
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Form.Item> */}

          <Form.Item>
            <Button
              style={{ width: "100%" }}
              type="primary"
              htmlType="submit"
            >
              S'INSCRIRE
            </Button>
          </Form.Item>
        </Form>
        <p className="font-semibold text-muted text-center">
          You don't have an account?{" "}
          <Link to="/signin-colab" className="font-bold text-dark">
            Sign 
          </Link>
        </p>
      </Card>
    </>
  );
}
