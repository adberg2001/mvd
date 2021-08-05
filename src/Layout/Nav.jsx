import React from 'react';
import { useState } from 'react';
import cls from './Layout.module.scss';

export default function Nav() {
  const [isBurgerMenuActive, setBurgerMenuActive] = useState(false);

  return (
    <nav className={cls.Nav}>
      <ul className={cls.DesktopNavList}>
        <li>
          <a>Главная</a>
        </li>
        <li>
          <a>Министерство</a>
        </li>
        <li>
          <a>Для граждан</a>
        </li>
        <li>
          <a>Услуги</a>
        </li>
        <li>
          <a>Для СМИ</a>
        </li>
        <li>
          <a>Госпрограмма</a>
        </li>
        <li>
          <a href="">Контакты</a>
        </li>
        <li>
          <a href="">Политика</a>
        </li>
        <li>
          <a href="">Рус/Кыр</a>
        </li>
      </ul>

      <div
        onClick={() => setBurgerMenuActive(!isBurgerMenuActive)}
        className={[
          cls.BurgerMenuBtn,
          isBurgerMenuActive ? cls.BurgerMenuBtnActive : '',
        ].join(' ')}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul
        className={[
          cls.MobileNavList,
          isBurgerMenuActive ? cls.MobileNavListActive : '',
        ].join(' ')}
      >
        <li>Главная</li>
        <li>Министерство</li>
        <li>Для граждан</li>
        <li>Услуги</li>
        <li>Для СМИ</li>
        <li>Госпрограмма</li>
        <li>Контакты</li>
        <li>Политика</li>
      </ul>
    </nav>
  );
}
