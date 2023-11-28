import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useContext, useState } from "react";
import Menu from "./Menu";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const { user } = useContext(UserContext);
  function showMenu() {
    setMenu(!menu);
  }
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center ">
        {/* Left Side: Company Logo */}
        <div className="flex items-center">
          <Link to="/">
            <span className="text-white font-semibold text-lg">
              Core Techies
            </span>
          </Link>
        </div>

        {/* Right Side: Login and Registration Buttons */}
        <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-4">
          {user ? (
            <div onClick={showMenu}>
              <p className="cursor-pointer relative  text-white">
                <FaBars />
              </p>
              {menu && <Menu />}
            </div>
          ) : (
            <>
              <h3 className="text-white">
                <Link to="/login">Login</Link>
              </h3>
              <h3 className="text-white">
                <Link to="/register">Register</Link>
              </h3>
            </>
          )}
        </div>
        <div onClick={showMenu} className="md:hidden text-lg">
          <p className="cursor-pointer relative text-white">
            <FaBars />
          </p>
          {menu && <Menu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
