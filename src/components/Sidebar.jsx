import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Logo, logout, OneAvatar, updateImage } from "../shared/assets";
import { InputField } from "../shared/components/CustomInputField";
import { navlinks } from "../shared/constants";
import SearchIcon from "@mui/icons-material/Search";
import { Divider } from "@mui/material";
const NavLink = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div
    className={`h-[48px] rounded-[10px] ${
      isActive && isActive === name && "bg-[#eee]"
    } flex  items-center ${!disabled && "cursor-pointer"} ${styles}`}
    onClick={handleClick}
  >
    {!isActive ? (
      <div className="flex gap-3 items-center">
        <img src={imgUrl} alt="nav logo" className="h-1/2" />
      </div>
    ) : (
      <div className={` flex gap-3 p-[0.8rem] items-center`}>
        <img src={imgUrl} alt="nav logo" className={`w-1/2 h-1/2 `} />
        {name === "Dashboard" ? (
          <div className="flex ">
            <span className="flex items-center ">{name}</span>
            <span className="ml-[8.2rem] w-[10] h-[10] p-[0.4rem] bg-[#eee] rounded-full">
              10
            </span>
          </div>
        ) : (
          name
        )}{" "}
      </div>
    )}
  </div>
);

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("Settings");

  return (
    <div className="flex gap-3 flex-col p-2 top-0 sticky w-[340px] h-[99vh] bg-[#fff]  ">
      <div className="flex flex-col gap-y-3">
        <Link to="/">
          <NavLink styles="mx-[0.78rem] h-[52px]" imgUrl={Logo} />
        </Link>

        <InputField
          placeholder="Search"
          icon={<SearchIcon />}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
              height: "45px",
              width: {
                sm: "100%",
              },
            },
          }}
        />
      </div>

      <div className=" flex flex-col gap-4">
        <div className="flex mx-[1rem] flex-col gap-1">
          {navlinks.map((link) => (
            <NavLink
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                if (!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
            />
          ))}
        </div>
        <div className="mx-2 flex gap-2 flex-col p-3 bg-[#F9FAFB] rounded-md">
          <span className="font-medium text-[16px] text-primary">
            New Features Available
          </span>
          <span className="text-secondary text-[13px]">
            Check out the new dashboard view. Pages now load faster.
          </span>
          <img
            src={updateImage}
            alt="update Img"
            className="h-[130px] object-cover"
          />
          <span>
            Dismiss
            <span className="font-medium ml-[1rem] text-[#6941C6]">
              Whats new?
            </span>
          </span>
        </div>
        <Divider />
        <div className="flex justify-between p-2">
          <div className="flex gap-2 items-center">
            <div className="object-cover ">
              <img src={OneAvatar} alt="profile pic" className=" w-full " />
            </div>
            <div className="flex flex-col">
              <span>Olivia Rhye</span>
              <span>olivia@untitledui.com</span>
            </div>
          </div>
          <NavLink styles="mx-[1rem]" name="Log Out" imgUrl={logout} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
