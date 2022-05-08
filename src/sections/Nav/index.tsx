/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { FC, useState } from "react";
import classNames from "classnames";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";
import { navItems } from "./constants";

export interface NavItem {
  text: string;
  toEl: string;
}

const Nav: FC = () => {
  const [activeItem, setActiveItem] = useState<string>("#home");
  const [flag, setFlag] = useState<string>("");
  const [verticalVisible, setVerticalVisible] = useState<boolean>(false);

  const scroll = (toEl: string) => {
    const $toEl = document.querySelector(toEl);
    if ($toEl) {
      setActiveItem(toEl);
      setFlag(toEl);
      $toEl.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  };

  React.useEffect(() => {
    const listenScrollsetActiveItemEvent = () => {
      const navs = document.querySelectorAll("#navEl");
      navs.forEach((nav) => {
        const $nav = nav as HTMLElement;
        const $toEl = document.querySelector($nav.dataset.toel!);
        if ($toEl) {
          const rect = $toEl.getBoundingClientRect();
          if ($nav.dataset.toel === flag && rect.top <= 0 && rect.bottom >= 0) {
            setActiveItem($nav.dataset.toel!);
            setFlag($nav.dataset.toel!);
          }
        }
      });
    };
    const listenScrollsetActiveItem: () => void = () => {
      document.removeEventListener("scroll", listenScrollsetActiveItemEvent);
      document.addEventListener("scroll", listenScrollsetActiveItemEvent, {
        passive: true,
      });
    };
    listenScrollsetActiveItem();
  }, [activeItem, flag]);

  return (
    <nav className={styles.nav}>
      <div className={styles.title}>
        <span>云香绕雪</span>
      </div>

      {/* 横版 nav */}
      <ul className={styles.horizontal}>
        {navItems.map((nav) => (
          <li
            key={nav.toEl}
            id="navEl"
            data-toel={nav.toEl}
            className={classNames({ [styles.active]: nav.toEl === activeItem })}
            onClick={() => scroll(nav.toEl)}
          >
            {nav.text}
          </li>
        ))}

        {/* 缩小版菜单栏 */}
        <li
          className={styles.navBtn}
          onClick={() => setVerticalVisible(!verticalVisible)}
        >
          {verticalVisible ? <CloseOutlined /> : <MenuOutlined />}
        </li>
      </ul>

      {/* 竖版 nav */}
      {verticalVisible && (
        <ul className={styles.vertical}>
          {navItems.map((nav) => (
            <li
              key={nav.toEl}
              className={classNames({
                [styles.active]: nav.toEl === activeItem,
              })}
              onClick={() => {
                setVerticalVisible(false);
                scroll(nav.toEl);
              }}
            >
              {nav.text}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Nav;
