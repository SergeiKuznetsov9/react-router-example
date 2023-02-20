import { Link } from "react-router-dom";
import { articles } from "./BlogData.js";

const BlogIndex = () => {
  if (articles.length === 0) {
    return <p>Статей еще нет</p>;
  }

  return (
    <>
      <h2>Все статьи блога</h2>
      <ul>
        {articles.map((item) => (
          <li key={item.id}>
            {/* Ссылка задается также относительным способом */}
            <Link to={`article/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BlogIndex;
