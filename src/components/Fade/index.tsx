import React, { FC, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

interface Props {
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
}

const Fade: FC<Props> = ({ top, bottom, left, right, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { threshold: 0.1 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={classNames(styles.fade, {
        [styles.top]: top,
        [styles.bottom]: bottom,
        [styles.left]: left,
        [styles.right]: right,
        [styles.visible]: visible,
      })}
    >
      {children}
    </div>
  );
};

export default Fade;
