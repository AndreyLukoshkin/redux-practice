import { useEffect } from "react";
import { Bars } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "../pages/MainPage";
import NoAccessPage from "../pages/NoAccessPage";
import UserPage from "../pages/UserPage";
import { getAuthorizedUser } from "../redux/actions/user";
import "./styles.css";

const authorizedRoutes = [
  { path: "/", element: <MainPage />, exact: true },
  { path: "/:id", element: <UserPage />, exact: true },
];

const PageRoutes = () => {
  const authorizedUser = useSelector((state) => state.users.authorizedUser);
  const isLoading = useSelector((state) => state.users.isAuthorizedUserLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuthorizedUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (
      <div className="cnPageRoutesLoader">
        <Bars width={80} height={80} color="#000BFF" />
      </div>
    );
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          {authorizedUser ? (
            authorizedRoutes.map((route) => (
              <Route key={route.path} {...route} />
            ))
          ) : (
            <Route path="*" element={<NoAccessPage />} exact />
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default PageRoutes;
