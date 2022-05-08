import React from 'react';
import Timeline from '../../../components/Timeline';
import TimelineHeader from '../../../components/Timeline/Header';
import TimelineItem from '../../../components/Timeline/Item';
import HighLight from '../../../components/HighLight';

const Life = () => (
  <Timeline>
    <TimelineHeader>2000</TimelineHeader>
    <TimelineItem direction="right" time="6月" header="👶🏻 河北省石家庄市" />
    <TimelineHeader>2012</TimelineHeader>
    <TimelineItem direction="right" time="9月" header="太原市第36中学" />
    <TimelineHeader>...</TimelineHeader>
    <TimelineItem header="🙇‍♂️ 好好学习..." />
    <TimelineHeader>2022</TimelineHeader>
    <TimelineItem
      direction="right"
      time="6月"
      header={['🎓 本科毕业 🎉']}
        // node={<span className={styles.customNode}><img width={46} src={neu} alt="uci" /></span>}
      content={[
        '河北，廊坊',
        <span>
          <HighLight>防灾科技学院</HighLight> <HighLight> 计算机科学与技术专业</HighLight>
        </span>,
        '写JavaScript C++ Java Python Shell Rust Scala Mathematica ...',
      ]}
    />
    <TimelineHeader>...</TimelineHeader>
    <TimelineItem
      direction="right"
      header={['???']}
    />
    <TimelineHeader>💀 ⚰️</TimelineHeader>
  </Timeline>
);

export default Life;
