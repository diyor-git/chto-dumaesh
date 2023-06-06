import React from "react";
import "./Purpose.scss";
import { useTranslation } from "react-i18next";
import purpose from "../../../assets/image/purpose.svg";
const Purpose = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className="purpose" id="purpose">
        <h1 className="purpose__title">{t("purposeOfProject")}</h1>
        <div className="purpose-box">
          <div className="purpose__img__container">
            <img src={purpose} alt="purpose img" className="purpose__img" />
          </div>
          <div className="purpose__info">
            <h2 className="purpose__info__title">Зачем?</h2>
            <p className="purpose__info__description">
              Проект придуман студентами. Мы потратили кучу времени, пытаясь
              найти учебные центры для себя. Чтобы другие не мучались и выбирали
              заведения по фактам и честным отзывам, мы основали проект «Чё
              думаешь?
            </p>
            <h2 className="purpose__info__title">По чесноку</h2>
            <p className="purpose__info__description">
              Не берем монетку за рекламу центров. Помогаем студентам (нашим
              братанам) выбрать лучший центр, основываясь на отзывах
              Вдохновителей✨
            </p>
            <h2 className="purpose__info__title">Дисклеймер</h2>
            <p className="purpose__info__description">
              Мы не говорим, кто хороший, а кто плохой. Не даём личных
              рекомендаций или советов, куда лучше пойти учиться. Не продаём
              рекламу центрам. Проект держится на желании помочь студентам
              выбрать подходящее учебное заведение. Мы собираем информацию по
              центрам и публикуем здесь.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purpose;
