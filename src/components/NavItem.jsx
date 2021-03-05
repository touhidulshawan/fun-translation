import { NavLink } from "react-router-dom";
const NavItem = ({ imgSrc, path, linkName }) => {
  return (
    <NavLink
      to={path}
      className="w-34 h-34 md:w-48 md:h-48 bg-blue-100 flex flex-col justify-center items-center p-2 border-r-8 border-4 border-blue-300 rounded shadow-xl hover:scale-110 transform duration-200 ease-in-out"
    >
      <img
        src={imgSrc}
        alt="character"
        className="w-24 h-24 md:w-28 md:h-28 "
      />
      <p className="text-center text-lg mt-2 uppercase font-bold text-gray-800 tracking-wide">
        {linkName}
      </p>
    </NavLink>
  );
};

export default NavItem;
