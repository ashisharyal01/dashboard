import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import { MdOutlineDashboard } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { MyContext } from "../../App";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isToggleSubmenu, setisToggleSubmenu] = useState(false);

  const isOpenSubmenu = (index) => {
    setActiveTab(index);
    setisToggleSubmenu(!isToggleSubmenu);
  };

  const context = useContext(MyContext);

  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            {/* <Link to="/"> */}
            <Button
              className={`w-100 ${activeTab === 0 ? "active" : ""}`}
              onClick={() => isOpenSubmenu(0)}
            >
              <span className="icon">
                <MdOutlineDashboard />
              </span>
              Dashboard
              <span className="arrow">
                <MdKeyboardArrowRight />
              </span>
            </Button>
            {/* </Link> */}
          </li>
          <li>
            <Button
              className={`w-100 ${
                activeTab === 1 && isToggleSubmenu === true ? "active" : ""
              }`}
              onClick={() => isOpenSubmenu(1)}
            >
              <span className="icon">
                <FaProductHunt />
              </span>
              Products
              <span className="arrow">
                <MdKeyboardArrowRight />
              </span>
            </Button>
            <div
              className={`submenuWrapper ${
                activeTab === 1 && isToggleSubmenu === true
                  ? "colapse"
                  : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li>
                  <Link to="#">Product List</Link>
                </li>
                <li>
                  <Link to="/product/details">Product View</Link>
                </li>
                <li>
                  <Link to="#">Product Upload</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            {/* <Link to="/"> */}
            <Button
              className={`w-100 ${activeTab === 2 ? "active" : ""}`}
              onClick={() => isOpenSubmenu(2)}
            >
              <span className="icon">
                <FaUser />
              </span>
              Users
              <span className="arrow">
                <MdKeyboardArrowRight />
              </span>
            </Button>
            {/* </Link> */}
          </li>

          <li>
            {/* <Link to="/"> */}
            <Button
              className={`w-100 ${activeTab === 3 ? "active" : ""}`}
              onClick={() => isOpenSubmenu(3)}
            >
              <span className="icon">
                <TbBrandBooking />
              </span>
              Booking list
              <span className="arrow">
                <MdKeyboardArrowRight />
              </span>
            </Button>
            {/* </Link> */}
          </li>
          <li>
            {/* <Link to="/"> */}
            <Button
              className={`w-100 ${activeTab === 4 ? "active" : ""}`}
              onClick={() => isOpenSubmenu(4)}
            >
              <span className="icon">
                <IoMdSettings />
              </span>
              Settings
              <span className="arrow">
                <MdKeyboardArrowRight />
              </span>
            </Button>
            {/* </Link> */}
          </li>
        </ul>

        {/* <br/>

          <div className="logoutWrapper">
                <div className="logoutBox">
                    <Button variant="contained">Logout</Button>
                </div>
          </div> */}
      </div>
    </>
  );
};

export default Sidebar;
