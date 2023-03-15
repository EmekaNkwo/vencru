import React from "react";
import PropTypes from "prop-types";
const NavLink = React.memo(
  ({ name, imgUrl, isActive, disabled, handleClick }) => (
    <div
      className={`h-[48px] rounded-[10px] ${
        isActive && isActive === name && "bg-[#eee]"
      } flex items-center ${!disabled && "cursor-pointer"}`}
      onClick={handleClick}
    >
      {!isActive && (
        <div className="flex gap-3 items-center">
          <img src={imgUrl} alt="nav logo" className="h-1/2" />
        </div>
      )}
      {isActive && (
        <div className={`flex gap-3 p-[0.8rem] items-center`}>
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
  )
);

NavLink.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  isActive: PropTypes.string,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};

export default NavLink;
