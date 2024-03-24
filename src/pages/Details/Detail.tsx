import React, { useState } from "react";
import Carousel from "../../features/Carousel/Carousel";
import Toggle from "../../shared/Toggle/Toggle";
import cart from "../../assets/CartWhite.svg";
import liked from "../../assets/liked.svg";
import notLiked from "../../assets/notLiked.png";

import styles from "./Details.module.css";
import Button from "../../shared/Button/Button";
import Like from "../../shared/Like/Like";
import Contacts from "../../features/Contacts/Contacts";
import { useCart } from "../../app/Context/CartContext";
import { cartContextValues } from "../../app/Context/model";

const Detail = () => {
  const [like, setLike] = useState<boolean>(false);
  const [changeToCart, setChangeToCart] = useState<boolean>(false);
  const [changeToggle, setChangeToggle] = useState<boolean>(false);
  const {
    setToggleChange,
    counter,
    addToCart,
    handleToggleChange,
    increment,
    decrement,
  } = useCart() as cartContextValues;

  setToggleChange(changeToCart);

  return (
    <div className={`${styles.details} container`}>
      <h3 className={styles.header}>Кроссовки мужские Skechers Sunny Dale</h3>
      <div className={styles.content}>
        <div className={styles.left_carousel}>
          <Carousel />
        </div>
        <div className={styles.right}>
          <div className={styles.top}>
            <div className={styles.top_left}>
              <span className={styles.discount}>
                166 534.00 цена без скидки
              </span>
              <div className={styles.sale}>
                <p>122 566 ₽</p>
                <button>-15%</button>
              </div>
              <div className={styles.toggle}>
                <Like
                  size="small"
                  style={{
                    color: "#828EAD",
                    fontWeight: "700",
                    fontSize: "14px",
                    lineHeight: "16px",
                  }}>
                  12 штук в уп.
                </Like>
                <Toggle
                  active={changeToggle || counter == 24}
                  onChange={() => {
                    addToCart();
                    setChangeToCart(true);
                    handleToggleChange(!changeToggle);
                    setChangeToggle(!changeToggle);
                  }}
                />
                <span
                  style={{
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#071435",
                  }}>
                  Заказ упаковкой
                </span>
              </div>
              <hr />
              <div className={styles.info}>
                <div>
                  <p>Завтра</p>
                  <span>Доставка</span>
                </div>
                <div>
                  <p>7 шт.</p>
                  <span>Тарасовка</span>
                </div>
                <div>
                  <p>7 шт.</p>
                  <span>Тарасовка</span>
                </div>
              </div>
              <div className={styles.cart}>
                <Button
                  increment={increment}
                  decrement={decrement}
                  counter={counter}
                  cart={changeToCart}
                  onClick={() => {
                    setChangeToCart(true);
                    addToCart();
                  }}
                  style={{ width: "100%" }}>
                  <img src={cart} alt="" />В корзину
                </Button>
                <Like size="medium" onClick={() => setLike(!like)}>
                  {like ? (
                    <img src={liked} alt="" />
                  ) : (
                    <img src={notLiked} alt="" />
                  )}
                </Like>
              </div>
            </div>
            <hr className={styles.vert} />
            <div className={styles.top_right}>
              <h4>Характеристики</h4>
              <div className={styles.articul_wrapper}>
                <div className={styles.articul}>
                  <div>
                    <p>ELC00696</p>
                    <span>Код поставщика</span>
                  </div>
                  <div>
                    <p>ELC00696</p>
                    <span>Артикул</span>
                  </div>
                </div>
                <div className={styles.articul}>
                  <div>
                    <p>ELC00696</p>
                    <span>Код РАЭК</span>
                  </div>
                  <div>
                    <p>ELC00696</p>
                    <span>Код ЕТМ</span>
                  </div>
                </div>
                <div className={styles.articul}>
                  <div>
                    <p>Electric used</p>
                    <span>Бренд</span>
                  </div>
                  <div>
                    <p>ELC00696</p>
                    <span>Серия</span>
                  </div>
                </div>
                <div className={styles.articul}>
                  <div>
                    <p>ELC0200000696</p>
                    <span>Код производителя</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <h3>Описание товара</h3>
            <p>
              Создание приверженного покупателя специфицирует неопровержимый
              комплексный анализ ситуации. CTR существенно индуцирует из ряда
              вон выходящий SWOT-анализ. Воздействие на потребителя определяет
              возрастающий интеграл по поверхности, что известно даже
              школьникам. Отсюда естественно следует, что коммуникация
              уравновешивает косвенный фактор коммуникации. Поле направлений
              естественно допускает экспериментальный скачок функции, таким
              образом сбылась мечта идиота - утверждение полностью доказано.
              Арифметическая прогрессия притягивает линейно зависимый пул
              лояльных изданий.
            </p>
          </div>
        </div>
      </div>
      <Contacts />
      <hr />
    </div>
  );
};

export default Detail;
