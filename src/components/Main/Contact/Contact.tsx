import React from "react";
import contact_img from "../../../assets/image/application.svg";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../../../redux/hooks";
import { useForm } from "react-hook-form";
import { postEmail } from "../../../redux/reducers/centersReducer";
import { message } from "antd";
import "./Contact.scss";

const Contact = () => {
  const { t } = useTranslation();
  let dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    dispatch(postEmail(data)).then(() => {
      reset();
      message.success(t("success"));
    });
  };

  return (
    <div>
      <div className="container">
        <div className="application" id="application">
          <h1 className="application__title">{t("Contact:leaveRequest")}</h1>
          <p className="application__description">{t("Contact:description")}</p>
          <div className="application-box" id="application-box">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="application__form"
            >
              <div className="application__input-container">
                <p className="application__input__title application_input_title-after">
                  {t("Contact:yourName")}
                </p>
                <input
                  {...register("full_name", { required: true, maxLength: 50 })}
                  type="text"
                  className={`application__input ${
                    errors.full_name ? "error" : ""
                  }`}
                  placeholder={t("Contact:nameSimple")}
                />
              </div>
              <div className="application__input-container">
                <p className="application__input__title application_input_title-after">
                  {t("Contact:nameOrganization")}
                </p>
                <input
                  {...register("organization", {
                    required: true,
                    maxLength: 70,
                  })}
                  type="text"
                  className={`application__input ${
                    errors.organization ? "error" : ""
                  }`}
                  placeholder={t("Contact:organizationSimple")}
                />
              </div>
              <div className="application__input-container">
                <p className="application__input__title application_input_title-after">
                  {t("Contact:phone")}
                </p>
                <input
                  {...register("phone", {
                    required: true,
                    minLength: 10,
                    maxLength: 15,
                  })}
                  type="text"
                  className={`application__input ${
                    errors.phone ? "error" : ""
                  }`}
                  placeholder="+998901234567"
                />
              </div>
              <div className="application__input-container">
                <p className="application__input__title ">
                  {t("Contact:comment")}
                </p>
                <textarea
                  {...register("comment")}
                  className="application__textarea"
                  placeholder={t("Contact:commentSimple")}
                ></textarea>
              </div>
              <button type="submit" className="application__button button">
                {t("Contact:send")}
              </button>
            </form>
            <div className="application__img__container">
              <img src={contact_img} alt="" className="application__img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
