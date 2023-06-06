import { useEffect, useState } from "react";
import "./Profile.scss";
import userPhoto from "../../assets/image/user.png";
import { useTranslation } from "react-i18next";
import { Select } from "antd";
import MaskedInput from "antd-mask-input";
import { Space, message } from "antd";
import NumberFormat from "react-number-format";
import moment from "moment";
import {
  setAuthStatus,
  setRegisterModal,
  updateProfile,
} from "../../redux/reducers/authorizationReducer";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getUser } from "../../redux/selectors/authorizationSelector";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const { t } = useTranslation();
  const { Option } = Select;
  let history = useNavigate();
  let dispatch = useAppDispatch();
  // SELECTORS
  let userInfo = useAppSelector((state) => getUser(state));
  const [first_name, setName] = useState(userInfo?.first_name || "user");
  const [date, setDate] = useState(userInfo?.dob || "");
  const [phone, setNumber] = useState(userInfo?.phone || "");
  const [gender, setGender] = useState(
    userInfo?.gender || t("Profile:noSpecified")
  );
  const [email, setEmail] = useState(
    userInfo?.email || t("Profile:noSpecified")
  );

  let logout = () => {
    dispatch(setRegisterModal(false));
    dispatch(setAuthStatus(false));
    localStorage.removeItem("Token");
    history("/");
  };

  const saveProfile = () => {
    dispatch(
      updateProfile({
        first_name,
        email,
        dob: date,
        phone,
        gender,
      })
    );
  };
  const _onChange = (e: any) => {
    setNumber(e.target.value);
  };
  function handleChange(value: any) {
    setGender(value);
  }

  useEffect(() => {
    if (!localStorage.getItem("Token")) {
      history("/");
    }
  }, []);
  return (
    <div className="container">
      <div className="Profile">
        <h1 className="profile-text">{t("Profile:profileSettings")}</h1>
        <div className="profile-content">
          <div className="profile-content__header">
            <div className="user">
              <img src={userInfo?.photo_url || userPhoto} alt="user" />
            </div>
            <div className="user-info">
              <h3>
                {!userInfo?.username
                  ? `${userInfo?.email}` || "@user"
                  : `${userInfo?.username}`}
              </h3>
              <h4>
                {t("Profile:registerDate")}
                {moment(userInfo?.created_at).format("DD/MM/YYYY")}
              </h4>
            </div>
          </div>
          <div className="profile-info">
            <h2 className="profile-info__text">{t("Profile:info")}</h2>
            <div className="profile-info__inputs">
              <div className="profile-info__input">
                <h4>{t("Profile:name")}</h4>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={first_name}
                />
              </div>
              <div className="profile-info__input">
                <h4>E-mail</h4>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
            </div>
            <div className="profile-info__inputs">
              <div className="profile-info__input">
                <h4>Пол</h4>
                <Select
                  defaultValue={gender || t("Profile:noSpecified")}
                  style={{ width: "100% " }}
                  onChange={handleChange}
                >
                  <Option value={null}>{t("Profile:noSpecified")}</Option>
                  <Option value="male">{t("Profile:man")}</Option>
                  <Option value="female">{t("Profile:woman")}</Option>
                </Select>
              </div>
              <div className="profile-info__input birthday-date">
                <h4>{t("Profile:birthdayDate")}</h4>
                <Space direction="vertical">
                  <NumberFormat
                    format="####-##-##"
                    mask={"_"}
                    placeholder="____/__/__"
                    defaultValue={date || ""}
                    onChange={(e: any) => {
                      setDate(e.target.value);
                    }}
                  />
                </Space>
              </div>
              <div className="profile-info__input">
                <h4>{t("Profile:number")}</h4>
                <MaskedInput
                  mask="+998 11 111 11 11"
                  name="card"
                  style={{ width: "50%" }}
                  onChange={_onChange}
                  value={phone}
                />
              </div>
            </div>
          </div>
          <div className="profile-buttons">
            <button onClick={saveProfile} className="profile-button">
              {t("Profile:save")}
            </button>
            <button className="profile-button logout" onClick={logout}>
              {t("Profile:logOf")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
