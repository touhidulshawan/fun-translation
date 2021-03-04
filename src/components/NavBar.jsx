import NavItem from "./NavItem";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <NavItem path="/yoda" linkName="Yoda" />
        <NavItem path="/minion" linkName="Minion" />
        <NavItem path="/dothraki" linkName="Dothraki" />
        <NavItem path="/valyrian" linkName="Valyrian" />
        <NavItem path="/mandalorian" linkName="Mandalorian" />
        <NavItem path="/shakespeare" linkName="Shakespeare" />
      </ul>
    </nav>
  );
};

export default NavBar;
