import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const OldPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/new-page", { replace: true, state: { from: "old-page" } });
  }, []);
  return <h1>Old page</h1>;
};

export default OldPage;
