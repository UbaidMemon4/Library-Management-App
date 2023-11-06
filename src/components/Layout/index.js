import Header from "../Header/header";
import { Outlet} from "react-router-dom";
const Layout = () => {
  return (
   <div className="main_div">
      <Header />
      <div className="main-wrap">
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
