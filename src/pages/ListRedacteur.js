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
import { useState } from "react";

import {
  Card,
  Col,
  Row,
  Typography,
  Tooltip,
  Progress,
  Avatar,
  message,
  Button,
  Timeline,
  Radio,
  Table, Tag, Space
} from "antd";
import {
  ToTopOutlined,
  MenuUnfoldOutlined,
  RightOutlined,
} from "@ant-design/icons";
import Paragraph from "antd/lib/typography/Paragraph";

import API from "../Config";

import Echart from "../components/chart/EChart";
import LineChart from "../components/chart/LineChart";

import ava1 from "../assets/images/logo-shopify.svg";
import ava2 from "../assets/images/logo-atlassian.svg";
import ava3 from "../assets/images/logo-slack.svg";
import ava4 from "../assets/images/logo-spotify.svg";
import ava5 from "../assets/images/logo-jira.svg";
import ava6 from "../assets/images/logo-invision.svg";
import team1 from "../assets/images/team-1.jpg";
import team2 from "../assets/images/team-2.jpg";
import team3 from "../assets/images/team-3.jpg";
import team4 from "../assets/images/team-4.jpg";
import card from "../assets/images/info-card-1.jpg";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
function HomeMember() {
  const { Column, ColumnGroup } = Table;

  const { Title, Text } = Typography;
  const { Meta } = Typography;
  const { id } = useParams();
  const onChange = (e) => console.log(`radio checked:${e.target.value}`);
  const { data, isPending, error } = useFetch(`${API}/admin/getAllRedacteur/`)

  const [reverse, setReverse] = useState(false);

  

  return (
    <>
      <div className="layout-content">
        { data && (<>
          <Row gutter={[24, 0]}>
            { data.REDACTEURS && (
              <>
              <Table dataSource={data.REDACTEURS}>
                <Column title="Nom complet" dataIndex="username" key="firstName" />
                <Column title="Email" dataIndex="mail" key="lastName" />
                <Column title="Competence" dataIndex="competence" key="age" />
                <Column title="Address" dataIndex="address" key="address" />
              </Table>
              </>
            )}
          </Row>
        </>)}

        { isPending && (<>
          <Row gutter={[24, 0]}>
            <Col xs={24} md={12} sm={24} lg={12} xl={14} className="mb-24">
              <Card bordered={false} key={"article"} className="criclebox">
                <Text level={3}>Loading...</Text>
              </Card>
            </Col>
          </Row>  
        </>)}
        { error && (<>
          <Row gutter={[24, 0]}>
            <Col xs={24} md={12} sm={24} lg={12} xl={14} className="mb-24">
              <Card bordered={false} key={"article"} className="criclebox">
                <Text level={3}>Error!</Text>
              </Card>
            </Col>
          </Row>  
        </>)}
      </div>
    </>
  );
}

export default HomeMember;
