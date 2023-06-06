import "./CenterDetail.scss";
import { useEffect } from "react";
import wallpaper from "../../assets/image/wallpaperExample.svg";
import logo from "../../assets/image/logoExample.svg";
import mailIcon from "../../assets/image/email.svg";
import webIcon from "../../assets/image/web.svg";
import callIcon from "../../assets/image/call.svg";
import Preloader from "../common/Preloader/Preloader";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import TelegramComments from "react-telegram-comments";
import { message } from "antd";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  getAuthStatus,
  getUser,
} from "../../redux/selectors/authorizationSelector";
import {
  centerStars,
  getDetailCenter,
} from "../../redux/reducers/centersReducer";
import { getCenterDetail } from "../../redux/selectors/centersSelector";
import { useParams } from "react-router-dom";

const CenterDetail = () => {
  const { t } = useTranslation();
  let params = useParams();
  const dispatch = useAppDispatch();

  // SELECTORS
  let userInfo = useAppSelector((state) => getUser(state));
  let isAuth = useAppSelector((state) => getAuthStatus(state));
  let detail = useAppSelector((state) => getCenterDetail(state));

  let centerId: any = params.centerId;

  // FUNCTION
  const getStars = (e: any) => {
    if (isAuth === false) {
      message.error(t("Centers:detail.sum"));
    } else {
      dispatch(
        centerStars({
          items: centerId,
          star: e.target.value,
          userid: userInfo?.id.toString(),
        })
      );
    }
  };

  useEffect(() => {
    dispatch(getDetailCenter(centerId));
    i18next.on("languageChanged", function () {
      dispatch(getDetailCenter(centerId));
    });
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [centerId, dispatch]);

  if (!detail) {
    return <Preloader />;
  }

  return (
    <div>
      <div className="wallpaper">
        <img src={detail.wallpaper || wallpaper} alt={detail.title} />
      </div>
      <div className="container">
        <section className="academy">
          <div className="academy-header">
            <img
              src={detail.image || logo}
              alt="Center Logo"
              className="academy-logo"
            />
            <h1 className="academy-name">{detail.title}</h1>
          </div>
          <h4 className="academy-price">
            {t("price")} {t("priceFrom")} {detail.price_from}
            {t("Centers:detail.sum")}
            {t("priceTo")}
            {detail.price_to} {t("Centers:detail.sum")}
          </h4>
          {detail.category.map((c, key) => (
            <h2 key={key} className="academy-programming">
              {c.title}
            </h2>
          ))}
          <div className="courses">
            {detail.tags.map((t, key) => (
              <p className="course">
                #{t}
              </p>
            ))}
          </div>
          <p className="academy-description">{detail.description}</p>
          <h2 className="academyProfDes">
            {t("Centers:detail.profesionalDes")}
          </h2>
          {isAuth === false ? (
            <div className="academy-description-noAuth">
              <h3>{t("Centers:detail.pleaseRegister")}</h3>
              <p className="academy-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
                excepturi ex maxime voluptatibus laboriosam, exercitationem esse
                consequatur reprehenderit dolorem ea. Saepe nemo quisquam harum
                iste excepturi totam veritatis ex asperiores, iusto eligendi
                illo delectus natus est inventore velit voluptate porro? Ipsum
                laboriosam qui suscipit ipsa alias animi voluptatibus.
                Aspernatur ratione necessitatibus vitae. Nihil possimus laborum
                aperiam qui incidunt. A eveniet, voluptatibus, commodi libero
                rem quaerat reiciendis ut pariatur incidunt cumque quo, quam et
                aut! Et quam cum nulla est. Delectus id assumenda repellendus
                quam incidunt eius est amet consectetur explicabo, deserunt
                aperiam itaque sunt neque recusandae eveniet voluptate
                asperiores cumque.
              </p>
            </div>
          ) : (
            <p className="academy-description">{detail.mydes}</p>
          )}
          <div className="academy__info">
            <div className="academy__info-box">
              <h3 className="academy__contact">
                {t("Centers:detail.contacts")}
              </h3>
              <div className="academy__contact-box">
                <img src={callIcon} alt="call" className="contact-icon" />
                <a href={`tel:${detail.phone}`} className="academy__details">
                  {detail.phone}
                </a>
              </div>
              <div className="academy__contact-box">
                <img src={webIcon} alt="web" className="contact-icon" />
                <p className="academy__details">
                  <a href={detail.website} className="academy__link">
                    {detail.website}
                  </a>
                </p>
              </div>
              <div className="academy__contact-box">
                <img src={mailIcon} alt="email" className="contact-icon" />
                <a href={`mailto:${detail.email}`} className="academy__details">
                  {detail.email}
                </a>
              </div>
              <h3 className="academy__workinghours">
                {t("Centers:detail.workTime")}
              </h3>
              <p className="academy__time">{detail.working_time}</p>
            </div>
            <div className="academy__info__map__container">
              <iframe
                id="map"
                title="Map Center"
                src={detail.location}
                loading="lazy"
                className="academy__info__map__address"
              />
            </div>
          </div>
          <div className="stars">
            <h2>{t("Centers:detail.stars")}</h2>
            <div>
              <h3>
                {t("Centers:detail.middle_star")}
                <span> {detail.avg_star || 0}</span>
              </h3>
              {!isAuth ? (
                ""
              ) : (
                <div className="raiting-div">
                  <h3>{t("Centers:detail.star")}</h3>
                  <div className="rating-area">
                    <input
                      type="radio"
                      id="star-5"
                      name="rating"
                      onChange={getStars}
                      value="5"
                    />
                    <label htmlFor="star-5" title="Оценка «5»" />
                    <input
                      type="radio"
                      id="star-4"
                      name="rating"
                      onChange={getStars}
                      value="4"
                    />
                    <label htmlFor="star-4" title="Оценка «4»" />
                    <input
                      type="radio"
                      id="star-3"
                      name="rating"
                      onChange={getStars}
                      value="3"
                    />
                    <label htmlFor="star-3" title="Оценка «3»" />
                    <input
                      onChange={getStars}
                      type="radio"
                      id="star-2"
                      name="rating"
                      value="2"
                    />
                    <label htmlFor="star-2" title="Оценка «2»" />
                    <input
                      type="radio"
                      onChange={getStars}
                      id="star-1"
                      name="rating"
                      value="1"
                    />
                    <label htmlFor="star-1" title="Оценка «1»" />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="reviews">
            <h2>{t("Centers:detail.reviews")}</h2>
            <TelegramComments
              commentsNumber={20}
              isDark={false}
              pageId={centerId || null}
              showColorfulNames
              showDislikes
              showIconOutlines={false}
              websiteKey="z7hGYHrV"
              containerClassName="awesome-comments"
              wrapperClassName="awesome-comments__wrapper"
              customColor={""}
              customHeight={0}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default CenterDetail;
