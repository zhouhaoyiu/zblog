import React from "react";
import { Col, Row } from "antd";
import Fade from "react-reveal/Fade";
import styles from "./styles.module.scss";
import avatar from "../../../assets/images/avatar.webp";
import Paragraph from "../../../components/Paragraph";
import HighLight from "../../../components/HighLight";
import useLottie from "../../../hooks/useLottie";

const cubeLottie =
  "https://assets9.lottiefiles.com/private_files/lf30_ijlzmjq6.json";

const Profile = () => {
  const cubeRef = useLottie(cubeLottie);

  return (
    <Row gutter={36} className={styles.profile}>
      <Col
        lg={{ span: 11, order: 1 }}
        span={24}
        order={3}
        className={styles.details}
      >
        <Fade bottom>
          {/* <Paragraph>
            <HighLight>抄表员</HighLight> ，山西太原 👴，现在在{" "}
            <HighLight>太原供水</HighLight> 搬砖。
          </Paragraph> */}
          <Paragraph>
            <HighLight>防灾科技学院 本科毕业</HighLight>
          </Paragraph>
        </Fade>

        <div className={styles.lottie} ref={cubeRef} />
      </Col>

      <Col
        lg={{ span: 7, order: 2 }}
        span={14}
        order={1}
        className={styles.avatar}
      >
        <Fade top>
          <img src={avatar} alt="头像" />
        </Fade>
      </Col>

      {/* <Col lg={{ span: 5, order: 3 }} span={24} order={2} className={styles.name}>
        <p><i>测</i></p>
        <p><i>试</i></p>
      </Col> */}
    </Row>
  );
};

export default Profile;
