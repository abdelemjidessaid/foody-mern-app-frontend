import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading)
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <h1 className="font-semibold text-2xl">Loading...</h1>
      </div>
    );
  if (isAuthenticated) return <Outlet />;

  return <Navigate to="/" replace />;

  //return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
