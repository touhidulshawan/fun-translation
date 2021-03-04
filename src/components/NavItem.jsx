import { NavLink } from "react-router-dom";
const NavItem = ({ path, linkName }) => {
  return <NavLink to={path}>{linkName}</NavLink>;
};

export default NavItem;
