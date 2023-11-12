import Header from "../Header/header";
import { Outlet } from "react-router-dom";
import NavLinkHeader from "../navlink/index";
import { useSelector } from "react-redux";
const Layout = () => {
  const user = useSelector((s) => s.user);
  return (
    <div>
      <Header />
      <div>
        {user ? <NavLinkHeader /> : null}
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
