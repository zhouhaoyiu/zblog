import React from "react";
import Fade from "react-reveal/Fade";
import styles from "./styles.module.scss";
import Profile from "./Profile";
import Life from "./Life";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import Section from "../../components/Section";
import HighLight from "../../components/HighLight";

const About = () => (
  <Section id="about" className={styles.about}>
    <Title tag="h2">关于</Title>

    <Title tag="h3">
      哈喽，我是周浩宇
      <br />
      聊聊我自己
    </Title>

    <Profile />

    <Life />

    <Fade bottom>
      <Paragraph className={styles.goal}>
        喜欢 <HighLight>写代码</HighLight>
        <br />
        可以把那些好玩的想法实现出来 👉{" "}
        <span
          onClick={() => {
            window.open("https://github.com/zhouhaoyiu", "_blank");
          }}
          className={styles.justForFun}
        >
          Just for fun ~
        </span>
      </Paragraph>
    </Fade>
  </Section>
);

export default About;
