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
          <Paragraph>
            <HighLight>北京科技大学 本科毕业</HighLight>
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
    </Row>
  );
};

export default Profile;
