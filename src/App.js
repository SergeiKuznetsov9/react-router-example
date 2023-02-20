import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import AppLayout from "./pages/AppLayout";

import BlogArticle from "./blog/BlogArticle"
import BlogCategory from "./blog/BlogCategory"
import BlogIndex from "./blog/BlogIndex"
import BlogLayout from "./blog/BlogLayout"

import Services from "./services/Services";
import Service from "./services/Service";
import RequireAuth from "./auth/RequireAuth";
import Admin from "./auth/Admin";

/* import OldPage from './pages/OldPage.js' */
import NewPage from './pages/NewPage.js'



const AdminAuthRequire = (
  <RequireAuth>
      <Admin />
  </RequireAuth>
)

const Redirect = <Navigate to="/new-page" replace={true} state={{from: 'old-page'}} />

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<AppLayout />}>


            <Route index element={<Home />}/>

              <Route path="services" element={<Services />}>
                <Route path=":slug" element={<Service />} />
              </Route>

              <Route path="blog" element={<BlogLayout />}>
                <Route index element={<BlogIndex />} />
                <Route path="category/:id" element={<BlogCategory />} />
                <Route path="article/:id" element={<BlogArticle />} />
              </Route>


            {/* Слэши в названии пути теперь не нужны, т.к. они указываются относительно (с учетом родителя) */}
            <Route path="about" element={<About />} />
            <Route path="admin" element={AdminAuthRequire} />

            <Route path="old-page" element={Redirect} />
            <Route path="new-page" element={<NewPage />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
    </>
  );
}

export default App;
