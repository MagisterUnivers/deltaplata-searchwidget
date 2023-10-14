import { Route, Routes } from "react-router";
import { PublicRoute } from "../components/routes/PublicRoute";
import { Layout } from "../components/Layout/Layout";
import WelcomePage from "../pages/WelcomePage/WelcomePage";
import SearchPage from "../pages/SearchPage/SearchPage";
import "../index.css";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="search"
            element={
              <PublicRoute>
                <SearchPage />
              </PublicRoute>
            }
          />
          <Route
            path="home"
            element={
              <PublicRoute>
                <WelcomePage />
              </PublicRoute>
            }
          />
        </Route>
        <Route path="*" element={<WelcomePage />} />
      </Routes>
    </>
  );
};
