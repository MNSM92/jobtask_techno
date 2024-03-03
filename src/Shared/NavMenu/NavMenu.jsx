
import  { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../public/svg.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineGlobal } from "react-icons/ai";

const Navmenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="container mx-auto bg-white border-b border-zinc-300 flex justify-between items-center">
      {/* Left side with logo and menu */}
      <div className="flex items-center">
        {/* Logo */}
        <img className="w-32 h-91" src={logo} alt="Logo" />
        
        {/* Menu items */}
        <nav className="hidden lg:flex items-start gap-5 ml-5">
             {/* Product */}
             <div className="relative flex items-center">
            <Link to='/' className="text-black text-lg font-normal font-['Open Sans'] cursor-pointer hover:underline">Product</Link>
            <RiArrowDropDownLine className="text-black text-3xl cursor-pointer ml-0" onClick={toggleDropdown} />

            {/* Dropdown Content */}
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md overflow-hidden z-10">
                <li>
                  <Link to='/service1' className="block px-4 py-2 text-sm text-gray-700 hover:text-cyan-700 hover:font-bold">Service 1</Link>
                </li>
                <li>
                  <Link to='/service2' className="block px-4 py-2 text-sm text-gray-700 hover:text-cyan-700 hover:font-bold">Service 2</Link>
                </li>
              </ul>
            )}
          </div>
          {/* Solutions */}
          <div className="relative flex items-center">
            <Link to='/' className="text-black text-lg font-normal font-['Open Sans'] cursor-pointer hover:underline">Solutions</Link>
            <RiArrowDropDownLine className="text-black text-3xl cursor-pointer ml-0" onClick={toggleDropdown} />

            {/* Dropdown Content */}
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md overflow-hidden z-10">
                <li>
                  <Link to='/service1' className="block px-4 py-2 text-sm text-gray-700 hover:text-cyan-700 hover:font-bold">Service 1</Link>
                </li>
                <li>
                  <Link to='/service2' className="block px-4 py-2 text-sm text-gray-700 hover:text-cyan-700 hover:font-bold">Service 2</Link>
                </li>     
              </ul>
            )}
          </div>
          {/* Resources */}
          <div className="relative flex items-center">
            <Link to='/' className="text-black text-lg font-normal font-['Open Sans'] cursor-pointer hover:underline">Resources</Link>
            <RiArrowDropDownLine className="text-black text-3xl cursor-pointer ml-0" onClick={toggleDropdown} />

            {/* Dropdown Content */}
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md overflow-hidden z-10">
                <li>
                  <Link to='/service1' className="block px-4 py-2 text-sm text-gray-700 hover:text-cyan-700 hover:font-bold">Service 1</Link>
                </li>
                <li>
                  <Link to='/service2' className="block px-4 py-2 text-sm text-gray-700 hover:text-cyan-700 hover:font-bold">Service 2</Link>
                </li>
                
              </ul>
            )}
          </div>
          <Link to='/enterprise' className="text-black text-lg font-normal font-['Open Sans'] cursor-pointer hover:underline">Enterprise</Link>
          <Link to='/pricing' className="text-black text-lg font-normal font-['Open Sans'] cursor-pointer hover:underline">Pricing</Link>
        </nav>
      </div>

      {/* Right side with login button, global icon, and language change */}
        {/* Right side with global icon, language change, contact sales, login button, and sign up button */}
        <div className="flex items-center">
        {/* Global icon */}
        <div className="mr-5 flex items-center">
          <AiOutlineGlobal className="w-6 h-6" />
       

        {/* Language change */}
        <select className="text-black  bg-white outline-0 text-lg font-normal font-['Open Sans'] cursor-pointer mr-5">
          <option value="en">EN</option>
          <option value="bn">BN</option>
          {/* Add more language options as needed */}
        </select>
        
        {/* Contact sales */}
        <div className="mr-5">Contact Sales</div>

        {/* Login button */}
        <button className="text-black text-lg font-normal font-['Open Sans'] cursor-pointer hover:underline mr-5">Login</button>

        {/* Sign up button */}
        <button className="text-black text-lg font-normal font-['Open Sans'] cursor-pointer hover:underline">Sign Up Free</button>
      </div>
      </div>

      {/* Dropdown Content */}
      {isDropdownOpen && (
        <ul className="absolute left-0 mt-2 w-60 bg-white shadow-lg rounded-md overflow-hidden z-10">
          <li>
            <Link to='/service1' className="block px-4 py-2 text-sm text-gray-700 hover:text-cyan-700 hover:font-bold">Service 1</Link>
          </li>
          <li>
            <Link to='/service2' className="block px-4 py-2 text-sm text-gray-700 hover:text-cyan-700 hover:font-bold">Service 2</Link>
          </li>
          {/* Add more dropdown items as needed */}
        </ul>
      )}
    </div>
  );
};

export default Navmenu;