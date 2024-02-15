import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
export default function Navbar() {
  const links = [
    { label: "Home", url: "/" },
    { label: "Shop", url: "/shop" },
    { label: "Shop Details", url: "/shop-details" },
    {
      label: "Pages",
      url: "/",
      dropdown: true,
      children: [
        { label: "Cart", url: "/pages/cart" },
        { label: "Checkout", url: "/pages/checkout" },
        { label: "Testimonial", url: "/pages/testimonial" },
      ],
    },
    { label: "Contact", url: "/contact" },
  ];

  const [cartNo, setCartNo] = useState(0);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);

  React.useEffect(() => {
    setCartNo(3);
  }, [cartNo]);
  const handlePagesDropdownHover = () => {
    setIsPagesDropdownOpen(true);
  };

  const handlePagesDropdownLeave = () => {
    setTimeout(() => setIsPagesDropdownOpen(false), 200);
  };

  return (
    <nav className="border-2 font-Raleway,sans-serif py-[0.75rem] max-w-screen px-5 w-full ease-in duration-200 flex flex-row lg:justify-around justify-between items-center sticky shadow-md">
      {/* First */}
      <div>
        <Link to="/">
          <h1 className="capitalize text-[2.5rem] text-primary font-bold">
            Fruitables
          </h1>
        </Link>
      </div>

      {/* Middle */}
      <div className="hidden lg:flex items-center capitalize lg:gap-9">
        {links.map(({ label, url, dropdown, children }) => {
          if (dropdown) {
            return (
              <div
                key={label}
                className="relative ease-in-out duration-300"
                onMouseEnter={handlePagesDropdownHover}
                onMouseLeave={handlePagesDropdownLeave}
              >
                <Link to={url} className="flex items-center hover:text-primary">
                  {label}
                  <ArrowDropDownIcon className="ml-2" />
                </Link>
                {/* Dropdown content */}
                {isPagesDropdownOpen && (
                  <div
                    className="absolute bg-white border shadow-md rounded-md py-2 top-full left-0 z-50 min-w-[10rem]" // Apply minimum width
                  >
                    {children.map(({ label, url }) => (
                      <Link
                        key={label}
                        to={url}
                        className="block py-2 ps-3 hover:bg-secondary"
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          } else {
            return (
              <Link key={label} to={url} className="hover:text-primary">
                {label}
              </Link>
            );
          }
        })}
      </div>

      {/* End icons */}
      <div className="hidden lg:flex items-center lg:space-x-5">
        <div className="border border-secondary rounded-full w-fit p-1 h-fit text-center hover:bg-secondary">
          <SearchIcon style={{ color: "#81C408" }} />
        </div>
        <div className="p-2 relative">
          <span className="absolute right-1 bottom-8 w-6 text-sm text-center rounded-full bg-secondary">
            {cartNo}
          </span>
          <LocalMallIcon style={{ color: "#81C408" }} fontSize="large" />
        </div>
        <div className="p-2">
          <PersonIcon style={{ color: "#81C408" }} fontSize="large" />
        </div>
      </div>
      {/* moblie */}
      <div className="lg:hidden flex">
        <div className="rounded-lg border px-1.5 ">
          <MenuIcon style={{ color: "#81C408" }} fontSize="large"></MenuIcon>
        </div>
      </div>
    </nav>
  );
}
