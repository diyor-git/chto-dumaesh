import "antd/dist/antd.css";
import React, { useEffect } from "react";
import { useAppDispatch } from "./redux/hooks";
import { getCategoryList, getCenters } from "./redux/reducers/centersReducer";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import "./i18n";
import Main from "./components/Main/Main";
import CenterDetail from "./components/CenterDetail/CenterDetail";
import {
  getProfile,
  refreshToken,
  setAuthStatus,
} from "./redux/reducers/authorizationReducer";
import Search from "antd/lib/transfer/search";
import Profile from "./components/Profile/Profile";
import Blog from "./components/Blog/Blog";
import Forum from "./components/Forum/Forum";
import ForumQuestion from "./components/Forum/ForumQuestion/ForumQuestion";
import ForumAnswers from "./components/Forum/ForumAnswers/ForumAnswers";

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  let refreshData = {
    refresh: localStorage.getItem("Refresh"),
    access: localStorage.getItem("Token"),
  };

  useEffect(() => {
    dispatch(getCenters());
    dispatch(getCategoryList());
    if (!localStorage.getItem("Token")) {
      dispatch(setAuthStatus(false));
    } else {
      dispatch(refreshToken(refreshData))
        .then(() => {
          dispatch(setAuthStatus(true));
          dispatch(getProfile());
        })
        .catch(() => {
          dispatch(setAuthStatus(false));
        });
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="//" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/search" element={<Search />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/forum/:id" element={<ForumQuestion />} />
        <Route path="/forum/answers/:id" element={<ForumAnswers />} />
        <Route path="/center/:centerId" element={<CenterDetail />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
