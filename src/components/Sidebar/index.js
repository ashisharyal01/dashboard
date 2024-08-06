import React from "react";
import Button from "@mui/material/Button";
import { MdOutlineDashboard } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { FaUser } from "react-icons/fa";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            {/* <Link to="/"> */}
            <Button className="w-100">
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
            {/* <Link to="/"> */}
            <Button className="w-100">
              <span className="icon">
                <FaProductHunt />
              </span>
              Products
              <span className="arrow">
                <MdKeyboardArrowRight />
              </span>
            </Button>
            {/* </Link> */}
          </li>
          <li>
            {/* <Link to="/"> */}
            <Button className="w-100">
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
            <Button className="w-100">
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
            <Button className="w-100">
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
