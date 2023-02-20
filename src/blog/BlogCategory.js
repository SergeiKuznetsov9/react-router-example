import { useParams, Link } from "react-router-dom";
import NotFound from "../pages/NotFound.js";
import { categories, articles } from "./BlogData.js";

const BlogCategory = () => {
  const id = +useParams().id;
  const category = categories.find((item) => item.id === id);
  const categoryArticles = articles.filter((item) => item.category === id);
  return category ? (
    <>
      <h2>Категория: {category.title}</h2>
      {categoryArticles.length ? (
        <ul>
          {categoryArticles.map((item) => (
            <li key={item.id}>

              {/* ../ пишется для того, чтобы был применен указанный маршрут относительно базового для данного уровня вложенности */}
              <Link to={`../article/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Нет статей в этой категории</p>
      )}
    </>
  ) : (
    <NotFound />
  );
};

export default BlogCategory;
