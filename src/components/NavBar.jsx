import NavItem from "./NavItem";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <NavItem path="/yoda" linkName="Yoda" />
      </ul>
    </nav>
  );
};

export default NavBar;
