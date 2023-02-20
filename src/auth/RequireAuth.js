import { useLocation, Navigate } from "react-router-dom";

const RequireAuth = (props) => {
  const auth = false;
  const location = useLocation();

  if (!auth) {
    return <Navigate to="/about" state={{ from: location }} />;
  }

  return props.children;
};

export default RequireAuth;
