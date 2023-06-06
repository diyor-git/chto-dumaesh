import React from "react";
import { Select } from "antd";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  filterCategory,
  filterDistrict,
  filterPrice,
  getCategoryList,
} from "../../../redux/reducers/centersReducer";
import i18next from "i18next";
import { categoryList } from "../../../redux/selectors/centersSelector";
import CentersSlider from "./CentersSlider/CentersSlider";
import "./Centers.scss";

const Centers = () => {
  const { t } = useTranslation();
  let category: any[] = [];
  const { Option } = Select;
  const dispatch = useAppDispatch();

  // FUNCTIONS

  i18next.on("languageChanged", function () {
    dispatch(getCategoryList());
  });

  let onChangePrice = (price: any) => {
    dispatch(filterPrice(price));
  };
  let onChangeDistrict = (district: any) => {
    dispatch(filterDistrict(district));
  };
  // SELECTORS
  let categories = useAppSelector((state) => categoryList(state));

  return (
    <div>
      <section className="centers" id="centers">
        <div className="container">
          <div className="centers-box">
            <h1 className="centers__title">{t("Centers:trainingCenters")}</h1>
            <div className="buttonsFilter">
              <Select
                className={"filterDistrict"}
                placeholder={t("Centers:searchDistrict")}
                optionFilterProp="children"
                onChange={onChangeDistrict}
                filterOption={(input: any, option: any) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option value="">{t("Centers:All")}</Option>
                <Option value="sergeli">{t("Centers:sergeli")}</Option>
                <Option value="mirzo-ulugbek">
                  {t("Centers:mirzo-ulugbek")}
                </Option>
                <Option value="mirabad">{t("Centers:mirobad")}</Option>
                <Option value="bektemir">{t("Centers:bektemir")}</Option>
                <Option value="almazar">{t("Centers:almazar")}</Option>
                <Option value="yashnabad">{t("Centers:yashnabad")}</Option>
                <Option value="yunusabad">{t("Centers:yunusabad")}</Option>
                <Option value="uchtepa">{t("Centers:uchtepa")}</Option>
                <Option value="shayhantahur">
                  {t("Centers:shayhantahur")}
                </Option>
                <Option value="chilanzar">{t("Centers:chilanzar")}</Option>
                <Option value="yakkasaray">{t("Centers:yakkasaray")}</Option>
              </Select>
              <Select
                className={"filterPrice"}
                placeholder={t("Centers:filterPrice")}
                optionFilterProp="children"
                onChange={onChangePrice}
                filterOption={(input: any, option: any) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option value="desc">{t("Centers:max")}</Option>
                <Option value="asc">{t("Centers:min")}</Option>
              </Select>
            </div>
          </div>
          <div className="courses">
            {!categories
              ? ""
              : categories.map((element: any) => (
                  <button
                    key={element.id}
                    className="course"
                    onClick={(e: any) => {
                      e.target.classList.toggle("color");
                      if (e.target.classList.value === `course color`) {
                        category.push(element.id);
                        dispatch(filterCategory(category.join()));
                      } else if (e.target.classList.value !== `course color`) {
                        category = category.filter(
                          (item) => item !== element.id
                        );
                        dispatch(filterCategory(category.join()));
                      }
                    }}
                  >
                    {element.title}
                  </button>
                ))}
          </div>
        </div>
      </section>
      <CentersSlider request={"centers"} />
    </div>
  );
};

export default Centers;
