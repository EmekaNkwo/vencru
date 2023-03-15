import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Logo } from "../shared/assets";
import { navlinks } from "../shared/constants";

import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("Settings");
  const [toggleDrawer, setToggleDrawer] = useState(false);

  return (
    <div className=" ">
      {/* Small screen navigation */}
      <div className=" flex justify-between items-center relative p-3">
        <div className=" flex justify-center items-center cursor-pointer">
          <img src={Logo} alt="logo" className=" h-[60%] object-contain" />
        </div>

        <MenuIcon
          className="cursor-pointer"
          sx={{
            color: "#808191",
            fontSize: "2rem",
          }}
          onClick={() => setToggleDrawer((prev) => !prev)}
        />

        <div
          className={`absolute top-[60px] right-0 left-0 bg-[#fff] z-10 shadow-secondary py-4 ${
            !toggleDrawer ? "-translate-y-[100vh]" : "translate-y-0"
          } transition-all duration-700`}
        >
          <ul className="mb-4">
            {navlinks.map((link) => (
              <li
                key={link.name}
                className={`flex p-4  ${
                  isActive === link.name && "bg-[#eee] "
                }`}
                onClick={() => {
                  if (!link.disabled) {
                    setToggleDrawer(false);
                    setIsActive(link.name);
                    navigate(link.link);
                  }
                }}
              >
                <img
                  src={link.imgUrl}
                  alt={link.name}
                  className={`w-[24px] h-[24px] object-contain`}
                />
                <p
                  className={`ml-[20px] text-[14px] ${
                    isActive === link.name ? "font-semibold " : "font-medium"
                  } ${
                    link.disabled ? "cursor-not-allowed " : "cursor-pointer"
                  }`}
                >
                  {link.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
