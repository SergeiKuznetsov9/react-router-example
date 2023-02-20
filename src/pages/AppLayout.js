import { NavLink, Outlet, /* Link, */ useNavigate } from "react-router-dom";

// NavLink присваивает сслыке класс active

// Также можно в атрибут className навлинка можно запихнуть функцию, которая примет следующий объект:
// {
//   isActive: false,
//   isPending: false
// }
// isActive превратиться в true, если ссsлка будет активной. То, что вернет данная функция будет присвоено в качестве имени класса,
// в случае если сслыка окажется активной

const activeClass = ({isActive}) => {
  return isActive ? 'current' : ''
}

const AppLayout = () => {

  
  // В качестве второго аргумента в функцию navigate можно передать объект {replace, state}.
  const navigate = useNavigate();


  return (
    <>
      <header>
        <NavLink to="/" className={activeClass}>Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/old-page">Old Page</NavLink>
        <NavLink to="/new-page">New Page</NavLink>
        <NavLink to="/admin">Admin Page</NavLink>
      </header>
      <h1>React Router v6</h1>
      <main>
        <Outlet />
        <button
          onClick={() => {
            navigate('/home')
          }}
        >
          Go Home
        </button>
        <button
          onClick={() => {
            navigate(-1)
          }}
        >
          Go Back
        </button>
      </main>
      <footer>Copyright 2021</footer>
    </>
  );
};

export default AppLayout;
