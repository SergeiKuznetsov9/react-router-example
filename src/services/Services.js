import { Link, Outlet } from "react-router-dom";
import services from "./ServicesData.js";

const Services = () => {
  return (
    <>
      <h1>Services</h1>
      <ul>
        {services.map((item) => (
          <li key={item.slug}>
            <Link to={item.slug}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default Services;
