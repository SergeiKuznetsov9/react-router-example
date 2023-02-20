import { Link, Outlet } from "react-router-dom";
import { categories } from "./BlogData.js";

const BlogLayout = () => {
  return (
    <>
      <h1>Our blog</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>            
            <Link to={`category/${category.id}`}>{category.title}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default BlogLayout;
