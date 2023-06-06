import "./CentersSlider.scss";
import { Link } from "react-router-dom";
import logo from "../../../../assets/image/logoCentersExample.svg";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import {
  getCenters,
  getDetailCenter,
} from "../../../../redux/reducers/centersReducer";
import { useEffect } from "react";
import Preloader from "../../../common/Preloader/Preloader";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  getAllCenters,
  getLoadingCenters,
} from "../../../../redux/selectors/centersSelector";

type Props = {
  request: string;
};

const CentersSlider = (props: Props) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  // SELECTORS
  const centers = useAppSelector((state) => getAllCenters(state));
  const loadingCenters = useAppSelector((state) => getLoadingCenters(state));

  useEffect(() => {
    dispatch(getCenters());
  }, [dispatch]);

  if (loadingCenters === true) {
    return <Preloader />;
  }
  return (
    <div className="container">
      <Swiper
        spaceBetween={20}
        pagination={{ clickable: true }}
        slidesPerView={2}
        slidesPerColumnFill="row"
        slidesPerColumn={2}
        breakpoints={{
          320: {
            slidesPerView: 1,
            slidesPerColumn: 2,
          },
          696: {
            slidesPerView: 2,
            slidesPerColumn: 3,
          },
          768: {
            slidesPerView: 2,
            slidesPerColumn: 3,
          },
          1200: {
            slidesPerView: 3,
            slidesPerColumn: 3,
          },
        }}
      >
        {centers.map((e: any, key: number) => (
          <SwiperSlide key={key}>
            <div className="carousel__item">
              <Link
                onClick={() => {
                  dispatch(getDetailCenter(e.id));
                }}
                to={"center/" + e.id}
              >
                <img
                  src={e.image || logo}
                  className="course_img"
                  alt="Center"
                />

                <div className="carousel__item__info">
                  <h2 className="carousel__item__title">{e.title}</h2>
                  <div className="carousel__item__courses">
                    {e.tags.map((t: any, key: number) => (
                      <div key={key}>
                        <p>{t.title}</p>
                      </div>
                    ))}
                  </div>
                  <p className="carousel__item__price">
                    {t("price")} {t("priceFrom")} {e.price_from} {t("priceTo")}
                    {e.price_to}
                  </p>
                  <div>
                    <button className="centers-btn">
                      <span> {t("Centers:giveReview")}</span>
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CentersSlider;
