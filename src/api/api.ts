import axios from "axios";
import i18next from "i18next";

export const API_URL = "http://127.0.0.1:8000/";

const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});
const $instance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

$instance.interceptors.request.use((config: any) => {
  config.headers.Authorization = "Bearer " + localStorage.getItem("Token");
  config.headers["Accept-Language"] = i18next.language;
  return config;
});

$instance.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.post(`${API_URL}/refresh`, {
          refresh: localStorage.getItem("Refresh"),
          access: localStorage.getItem("Token"),
        });
        console.log(response);
        if (response.data.accessToken) {
          localStorage.setItem("Token", response.data.accessToken);
        }
        return $instance.request(originalRequest);
      } catch (e) {
        console.log("НЕ АВТОРИЗОВАН");
      }
    }
    throw error;
  }
);

export const centersApi = {
  getCenters() {
    return instance.get(`centers/list/`).then((response) => {
      return response;
    });
  },
  getDetailCenter(id: number) {
    return instance.get(`centers/${id}/`).then((response) => {
      return response;
    });
  },
  searchCenters(search: string) {
    return instance.get(`centers/search?key=${search.search}`).then((response) => {
      return response;
    });
  },
  getCategoryList() {
    return instance.get(`centers/category/list/`).then((response) => {
      return response;
    });
  },
  centerStars(stars: any) {
    return instance.post(`centers/rating/`, stars).then((response) => {
      return response;
    });
  },
  postEmail(data: any) {
    return instance.post(`request/`, { ...data }).then((response) => {
      return response;
    });
  },
  filterPrice(price: any) {
    return instance
      .get(`centers/list?price=${!price ? "" : price}`)
      .then((response) => {
        return response;
      });
  },
  filterDistrict(district: any) {
    return instance
      .get(`centers/list?district=${!district ? "" : district}`)
      .then((response) => {
        return response;
      });
  },
  filterCategory(category: any) {
    return instance
      .get(`centers/list?category=${!category ? "" : category}`)
      .then((response) => {
        return response;
      });
  },
};

export const authorizationApi = {
  getProfile() {
    return $instance.get(`register/profile/`).then((response) => {
      return response;
    });
  },
  refreshToken(data: any) {
    return $instance.post(`register/refresh/`, data).then((response) => {
      return response;
    });
  },
  telegramAuth(data: any) {
    return instance.post(`/register/login/telegram/`, data).then((response) => {
      return response;
    });
  },
  updateProfile(data: any) {
    return $instance.patch(`register/profile/`, data).then((response) => {
      return response;
    });
  },
  logOut() {
    return $instance.get(`register/logout/`).then((response) => {
      return response;
    });
  },
};
