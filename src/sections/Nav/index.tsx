/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import styles from './styles.module.scss';
import { navItems } from './constants';

export interface NavItem {
  text: string;
  toEl: string;
}

const Nav: FC = () => {
  const [activeItem, setActiveItem] = useState<string>('#home');
  const [flag, setFlag] = useState<boolean>(true);
  const [verticalVisible, setVerticalVisible] = useState<boolean>(false);

  const scroll = (toEl: string) => {
    setFlag(false);
    const $toEl = document.querySelector(toEl);
    if ($toEl) {
      setActiveItem(toEl);
      $toEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  React.useEffect(() => {
    const listenScrollsetActiveItem: ()=>void = () => {
      if (!flag) return;
      document.removeEventListener('scroll', listenScrollsetActiveItem);
      document.addEventListener('scroll', () => {
        const navs = document.querySelectorAll('#navEl');
        navs.forEach((nav) => {
          const $nav = nav as HTMLElement;
          const $toEl = document.querySelector($nav.dataset.toel!);
          if ($toEl) {
            const rect = $toEl.getBoundingClientRect();
            if (rect.top <= 10 && rect.bottom >= 0 && $nav.dataset.toel !== activeItem) {
              setActiveItem($nav.dataset.toel!);
            }
          }
        });
      },
      { passive: true });
    };
    listenScrollsetActiveItem();
  }, [activeItem]);

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
        <li className={styles.navBtn} onClick={() => setVerticalVisible(!verticalVisible)}>
          {verticalVisible ? <CloseOutlined /> : <MenuOutlined /> }
        </li>
      </ul>

      {/* 竖版 nav */}
      {verticalVisible && (
        <ul className={styles.vertical}>
          {navItems.map((nav) => (
            <li
              key={nav.toEl}
              className={classNames({ [styles.active]: nav.toEl === activeItem })}
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
