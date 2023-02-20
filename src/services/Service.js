import { useParams } from "react-router-dom";
import NotFound from "../pages/NotFound.js";
import services from "./ServicesData.js";

const Service = () => {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);
  return service ? <h2>{service.title}</h2> : <NotFound />;
};

export default Service;
