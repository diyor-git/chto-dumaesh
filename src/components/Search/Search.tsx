import CentersSlider from "../Main/Centers/CentersSlider/CentersSlider";
import "./SearchPage.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SearchPage = () => {
  const { t } = useTranslation();
  return (
    <div className={"searchPage"}>
      <div className="container">
        <div className="title">
          <h2 className={"centers__title"}>{t("searchResult")}</h2>
          <Link to={"/"}>
            <button>{t("allCenters")}</button>
          </Link>
        </div>
        <CentersSlider request={"searchCenters"} />
      </div>
    </div>
  );
};

export default SearchPage;
