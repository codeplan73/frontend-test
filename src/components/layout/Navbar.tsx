import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-[#F6F6F6] h-16 flex items-center justify-between">
      <ul>
        <NavLink to="/dashboard">Home</NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
