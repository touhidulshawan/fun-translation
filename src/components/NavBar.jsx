import NavItem from "./NavItem";
import yoda from "../assets/yoda.jpg";
import minion from "../assets/Minions.png";
import dothraki from "../assets/Do.png";
import valyrian from "../assets/Val.png";
import mandalorian from "../assets/Mandalorian.png";
import shakespeare from "../assets/Shakespear.jpg";

const NavBar = () => {
  return (
    <nav className="my-4 max-w-3xl m-auto">
      <ul className="grid grid-cols-2 gap-10 md:grid-cols-3 justify-center content-center">
        <NavItem path="/yoda" linkName="Yoda" imgSrc={yoda} />
        <NavItem path="/minion" linkName="Minion" imgSrc={minion} />
        <NavItem path="/dothraki" linkName="Dothraki" imgSrc={dothraki} />
        <NavItem path="/valyrian" linkName="Valyrian" imgSrc={valyrian} />
        <NavItem
          path="/mandalorian"
          linkName="Mandalorian"
          imgSrc={mandalorian}
        />
        <NavItem
          path="/shakespeare"
          linkName="Shakespeare"
          imgSrc={shakespeare}
        />
      </ul>
    </nav>
  );
};

export default NavBar;
