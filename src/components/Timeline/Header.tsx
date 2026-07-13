import React, { FC } from "react";
import Fade from "../Fade";
import styles from "./styles.module.scss";

const TimelineHeader: FC = (props) => {
  const { children } = props;

  return (
    <Fade top>
      <header className={styles.timelineHeader}>
        <span>{children}</span>
      </header>
    </Fade>
  );
};

export default TimelineHeader;
