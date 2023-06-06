import logo from "../../assets/image/logo-macbook.svg";
import navbar from "../../assets/image/navbar-menu.svg";
import logoExample from "../../assets/image/logoCentersExample.svg";

import "./Header.scss";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  getClearSearch,
  getSearchCenters,
} from "../../redux/selectors/centersSelector";
import {
  getAuthStatus,
  getProfileLoad,
  getRegisterModal,
} from "../../redux/selectors/authorizationSelector";
import {
  getProfile,
  setRegisterModal,
  telegramAuth,
} from "../../redux/reducers/authorizationReducer";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import {
  getDetailCenter,
  searchCenters,
  getCenters,
  setClearSearch,
} from "../../redux/reducers/centersReducer";
import i18next from "i18next";
import TelegramLoginButton from "telegram-login-button";
// import GoogleLogin from "react-google-login";
import { message, Modal } from "antd";
import GoogleLogin from "react-google-login";

const Header = () => {
  const dispatch = useAppDispatch();
  const { handleSubmit, reset, register } = useForm();
  const { t, i18n } = useTranslation();
  const isMobile = useMediaQuery({ query: "(max-device-width: 580px)" });

  // SELECTORS
  const centers = useAppSelector((state) => getSearchCenters(state));
  const isAuth = useAppSelector((state) => getAuthStatus(state));
  const modal = useAppSelector((state) => getRegisterModal(state));
  const clearSearch = useAppSelector((state) => getClearSearch(state));
  const profileLoad = useAppSelector((state) => getProfileLoad(state));

  // STATE
  let [openSearch, setOpenSearch] = useState(false);
  let [openNavMenu, setOpenNavMenu] = useState(false);

  // FUNCTION
  const onSubmit = (data: any) => {
    dispatch(searchCenters(data));
    dispatch(setClearSearch(true));
    i18next.on("languageChanged", function () {
      dispatch(searchCenters(data));
    });
    if (data.search.length > 0) {
      setOpenSearch(true);
    }
  };

  const clickNavItem = () => {
    setOpenNavMenu(false);
  };
  const clearInput = () => {
    setOpenSearch(false);
    dispatch(setClearSearch(false));
    reset();
  };
  const changeLanguage = (language: any) => {
    i18n.changeLanguage(language);
  };
  const showModal = () => {
    clickNavItem();
    dispatch(setRegisterModal(true));
  };
  const handleCancel = () => {
    dispatch(setRegisterModal(false));
  };
  const handleOk = () => {
    dispatch(setRegisterModal(false));
  };

  // GOOGLE LOGIN
  const responseGoogle = (response: any) => {
    const data = response;
    // dispatch(
    //   registration({
    //     auth_date: data.vc.first_issued_at,
    //     first_name: data.profileObj.givenName,
    //     password: data.profileObj.hash,
    //     photo_url: data.profileObj.imageUrl,
    //     username: data.profileObj.username,
    //     email: data.profileObj.email,
    //     password: data.profileObj.googleId,
    //   })
    // )
    //   .then((e) => {
    //     if (e.success) {
    //       dispatch(setRegisterModal(false));
    //     }
    //   })
    //   .catch((er) => {
    //     message.error(er.response.data.errors.email[0]);
    //   });
  };
  // TELEGRAM LOGIN
  const handleTelegramResponse = (data: any) => {
    dispatch(
      telegramAuth({
        auth_date: data.auth_date,
        first_name: data.first_name,
        password: data.hash,
        photo_url: data.photo_url,
        username: data.username,
        id: data.id,
        gender: null,
      })
    )
      .then(() => {
        dispatch(setRegisterModal(false));
        dispatch(getProfile());
      })
      .catch((error: any) => {
        console.log(error.response);
      });
  };

  useEffect(() => {
    dispatch(setRegisterModal(false));
  }, []);
  return (
    <div>
      <div>
        <nav className="navbar">
          <div className="search_part">
            <Link to="/">
              <img src={logo} alt="logo" className="navbar__logo" />
            </Link>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("search")}
                type="text"
                className="navbar__search"
                placeholder={
                  isMobile ? t("search") : t("Header:inputPlaceholder")
                }
                onClick={(event: any) => {
                  if (event.target.value > 0) {
                    setOpenSearch(!openSearch);
                  }
                }}
              />
              <i
                onClick={clearInput}
                className={clearSearch !== false ? "fas fa-times" : "none"}
              ></i>
            </form>
          </div>
          <div className="buttonsHeader">
            <div className="translateButtons">
              <button
                className={i18n.language === "uz" ? "active" : undefined}
                onClick={() => {
                  changeLanguage("uz");
                  i18next.on("languageChanged", function () {
                    dispatch(getCenters());
                  });
                }}
              >
                O’z
              </button>
              <button
                className={i18n.language === "ru" ? "active" : undefined}
                onClick={() => {
                  changeLanguage("ru");
                  i18next.on("languageChanged", function () {
                    dispatch(getCenters());
                  });
                }}
              >
                Ру
              </button>
            </div>
            <HashLink
              style={{ marginRight: "10px" }}
              to="/#application"
              className="navbar__button button"
            >
              {t("Header:forOrganization")}
            </HashLink>
            <Link to="/forum" className="navbar__button button">
              Форум
            </Link>
            {isAuth == true && profileLoad == true ? (
              <>
                <Link to="/profile">
                  <button
                    style={{ marginLeft: "10px" }}
                    className="navbar__button button"
                  >
                    {t("Header:profile")}
                  </button>
                </Link>
              </>
            ) : (
              <>
                <button
                  style={{ marginLeft: "10px" }}
                  className="navbar__button button"
                  onClick={showModal}
                >
                  {t("Header:logIn")}
                </button>
                <Modal
                  style={{ textAlign: "center" }}
                  visible={modal}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  title={
                    <div className="header-modal__title">
                      <h3>Авторизация</h3>
                    </div>
                  }
                >
                  <div className="auth-button">
                    <div className="auth-google-btn">
                      <GoogleLogin
                        clientId="15922204693-t3b6ivajog3gc9m4iflgeuqkf6cpos85.apps.googleusercontent.com"
                        buttonText="Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={"single_host_origin"}
                      />
                    </div>
                    <button className="btn default tg">
                      <h3>Telegram</h3>
                      <TelegramLoginButton
                        dataOnauth={handleTelegramResponse}
                        botName="chto_dumaesh_bot"
                        usePic={false}
                      />
                    </button>
                  </div>
                </Modal>
              </>
            )}
            <img
              src={navbar}
              onClick={() => {
                setOpenNavMenu(!openNavMenu);
              }}
              alt="menu"
              className="navbar__hamburger"
            />
            {openNavMenu && (
              <ul className="navbar__menu">
                <li className="navbar__menu__item">
                  <HashLink
                    onClick={clickNavItem}
                    to="/#application"
                    className="navbar__menu__link"
                  >
                    {t("Header:forOrganization")}
                  </HashLink>
                </li>
                <li className="navbar__menu__item">
                  <HashLink
                    onClick={clickNavItem}
                    to="/#purpose"
                    className="navbar__menu__link"
                  >
                    {t("purposeOfProject")}
                  </HashLink>
                </li>
                {isAuth == false ? (
                  <li className="navbar__menu__item">
                    <button
                      style={{ marginLeft: "10px" }}
                      className="navbar__menu__link"
                      onClick={showModal}
                    >
                      {t("Header:logIn")}
                    </button>
                    <Modal
                      style={{ textAlign: "center" }}
                      visible={modal}
                      onOk={handleCancel}
                      onCancel={handleCancel}
                    >
                      <TelegramLoginButton
                        dataOnauth={handleTelegramResponse}
                        botName="chto_dumaesh_bot"
                        usePic={false}
                      />
                    </Modal>
                  </li>
                ) : (
                  <li className="navbar__menu__item">
                    <Link
                      onClick={() => {
                        clickNavItem();
                      }}
                      className="navbar__menu__link"
                      to="/profile"
                    >
                      {t("Header:profile")}
                    </Link>
                  </li>
                )}
                <li>
                  <div className="translateButtons2">
                    <button
                      className={i18n.language === "uz" ? "active" : undefined}
                      onClick={() => {
                        changeLanguage("uz");
                        i18next.on("languageChanged", function () {
                          dispatch(getCenters());
                        });
                      }}
                    >
                      O’z
                    </button>
                    <button
                      className={i18n.language === "ru" ? "active" : undefined}
                      onClick={() => {
                        changeLanguage("ru");
                        i18next.on("languageChanged", function () {
                          dispatch(getCenters());
                        });
                      }}
                    >
                      Ру
                    </button>
                  </div>
                </li>
              </ul>
            )}
          </div>
          {openSearch && centers ? (
            <div className="navbar__modal">
              <h3 className="navbar__modal__title">{t("searchResult")}</h3>
              <div className="navbar__modal__cards">
                {centers
                  ? centers.map((s: any, key: any) => (
                      <div key={key} className="navbar__modal__card">
                        <Link
                          onClick={() => {
                            dispatch(getDetailCenter(s.id));
                            setOpenSearch(false);
                          }}
                          to={"center/" + s.id}
                        >
                          <img
                            src={s.image || logoExample}
                            alt={"academy"}
                            className="navbar__modal__card__img"
                          />
                          <div className="navbar__modal__info">
                            <h2 className="navbar__modal__info__title">
                              {s.title}
                            </h2>
                            <div className="navbar__modal__info__courses">
                              {s.tags.map((t: any, key: any) => (
                                <p key={key}>{t.title}</p>
                              ))}
                            </div>
                            <span className="navbar__modal__info__button">
                              {t("Header:more")}
                            </span>
                          </div>
                        </Link>
                      </div>
                    ))
                  : null}
              </div>
              <Link
                to="search"
                onClick={() => {
                  setOpenSearch(false);
                }}
                className="navbar__modal__link"
              >
                {t("Header:seeAll")}
              </Link>
            </div>
          ) : null}
        </nav>
      </div>
    </div>
  );
};

export default Header;
