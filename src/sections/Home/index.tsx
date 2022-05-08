import React, { FC } from 'react';
import { Col, Row } from 'antd';
import Fade from 'react-reveal/Fade';
import styles from './styles.module.scss';
import useTyped from '../../hooks/useTyped';
import useLottie from '../../hooks/useLottie';
import { arrowDownLottie, codeLottie } from './constants';

const strings = [
  '聊聊技术。',
  '去旅游。',
  '打打LOL。',
  '模拟飞行',
];

const Home: FC = () => {
  const el = useTyped(strings, { loop: true });
  const arrowDownLottieRef = useLottie(arrowDownLottie);
  const codeLottieRef = useLottie(codeLottie);

  const next = () => {
    const $about = document.querySelector('#about');
    if ($about) {
      $about.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={styles.home}>
      <Row className={styles.content}>
        <Col span={24} md={15} className={styles.intro}>
          <p>我是周浩宇，</p>
          <p>也是 <i className={styles.tencent}>太原供水集团</i> 抄表员 </p>
          <p>喜欢前端</p>
          <p>偶尔<span className={styles.sometime} ref={el} /></p>
        </Col>

        <Col span={24} md={9} className={styles.ballWrapper}>
          <Fade bottom>
            <div className={styles.ball}>
              <div ref={codeLottieRef} />
            </div>
          </Fade>
        </Col>

        <Col className={styles.next} span={24}>
          <Fade top>
            <div className={styles.handDown}>
              <div ref={arrowDownLottieRef} onClick={next} />
            </div>
          </Fade>
        </Col>
      </Row>
    </section>
  );
};

export default Home;
