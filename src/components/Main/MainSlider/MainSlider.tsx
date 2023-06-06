import React from "react";
import main_img from "../../../assets/image/laptop__review.svg";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "./MainSlider.scss";
import { useTranslation } from "react-i18next";

// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

const MainSlider = () => {
  const { t } = useTranslation();
  return (
    <div className="reviews-box container" id="reviews">
      <div className="reviews__info swiper-container-text">
        <div className="swiper-wrapper">
          <Swiper
            spaceBetween={50}
            pagination={{ clickable: true }}
            slidesPerView={1}
            autoplay
          >
            <SwiperSlide>
              <div className="swiper-slide">
                <h1 className="reviews__info__title">
                  {/* {t("MainSlider:realReviews")} */}
                  Чё за движ?
                </h1>
                <p className="reviews__info__description">
                  {/* {t("MainSlider:slide1")}
                   */}
                  Тут оставляют отзывы. Тут их читают. Тут решают куда идти.
                  Присоединяйся. Пиши отзывы, читай отзывы и вдохновляйся
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <h1 className="reviews__info__title">
                  {/* {t("MainSlider:yourOpinion")} */}
                  Реальные отзывы
                </h1>
                <p className="reviews__info__description">
                  Мы не меняем текста отзывов. Наш копирайтер не тратит пол
                  ночи, чтобы написать красивые слова для учреждений. Всё
                  искренне и от студентов
                  {/* {t("MainSlider:slide1")} */}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <h1 className="reviews__info__title">
                  Ты - Вдохновитель<span>✨</span>
                  {/* {t("MainSlider:notMistake")} */}
                </h1>
                <p className="reviews__info__description">
                  {/* {t("MainSlider:slide1")} */}
                  Каждый отзыв вдохновляет центры на улучшения. Честные отзывы -
                  залог успеха
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <a href="#centers" className="reviews__button button">
          {t("MainSlider:goToReviews")}
        </a>
      </div>
      <div className="reviews__img__container">
        <img src={main_img} alt="reviews" className="reviews__img" />
      </div>
    </div>
  );
};

export default MainSlider;
