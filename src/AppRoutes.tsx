import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
import ManageRestaurantPage from "./pages/ManageRestaurantPage";
import SearchPage from "./pages/SearchPage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Homa Page  */}
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      {/* Authentication Callback */}
      <Route path="/auth-callback" element={<AuthCallbackPage />} />
      {/* Search  */}
      <Route
        path="/search/:city"
        element={
          <Layout showHero={false}>
            <SearchPage />
          </Layout>
        }
      />
      {/* Protected Route for User Authentication */}
      <Route element={<ProtectedRoute />}>
        {/* User Profie Route */}
        <Route
          path="/user-profile"
          element={
            <Layout showHero={false}>
              <UserProfilePage />
            </Layout>
          }
        />
        {/* Manage Restaurant Route */}
        <Route
          path="/manage-restaurant"
          element={
            <Layout showHero={false}>
              <ManageRestaurantPage />
            </Layout>
          }
        />
      </Route>
      {/* Other Navigations */}
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default AppRoutes;
