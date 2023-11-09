import { NavLink } from "react-router-dom";
import "./index.css"
const NavLinkHeader = () => {
  return (
    <div className="nav-link-wrapper">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          `nav-link ${isActive ? "active-link" : ""} `
        }
      >
        Books
      </NavLink>
      <NavLink
        to={"/shelves"}
        className={({ isActive }) =>
          `nav-link ${isActive ? "active-link" : ""} `
        }
      >
        Shelves
      </NavLink>
      <NavLink
        to={"/author"}
        className={({ isActive }) =>
          `nav-link ${isActive ? "active-link" : ""} `
        }
      >
        Author
      </NavLink>
    </div>
  );
};
export default NavLinkHeader;
