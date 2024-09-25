import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  function showItems() {}

  return (
    <header className="padding-x py-8  z-10 w-full ">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <h1
            className="text-4xl font-bold
          text-coral-red underline
          "
          >
            NY
          </h1>
        </a>
        <ul
          className="flex-1 flex justify-center
          items-center gap-16 max-lg:hidden
        "
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat 
                leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="max-lg:block ">
          <a href="">
            <img
              src={hamburger}
              onClick={showItems}
              alt="Humberger"
              width={25}
              height={25}
            />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
