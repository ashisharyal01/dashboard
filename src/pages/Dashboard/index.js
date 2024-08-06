import React from "react";
import DashboardBox from "./components/dashboardBox";
import { FaUserCircle } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";

import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Dashboard = () => {
  const [showBy, setshowBy] = useState("");
  const [showBysetCatBy, setCatBy] = useState("");

  return (
    <div className="right-content w-100">
      <div className="dashboardBoxWrapper d-flex">
        <DashboardBox
          color={["#1da256", "#48d483"]}
          icon={<FaUserCircle />}
          grow={true}
        />
        <DashboardBox color={["#2c78e5", "#60aff5"]} icon={<FaListUl />} />
      </div>

      <div className="card shadow border-0 p-3 mt-4">
        <h3 className="hd">Best Booking Products</h3>

        <div className="row cardFilters mt-3">
          <div className="col col-md-3">
            <h4>Show By</h4>
            <Select
              value={showBy}
              onChange={(e) => setshowBy(e.target.value)}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              className="w-100"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>
          <div className="col col-md-3">
            <h4>Category By</h4>
            <Select
              value={showBysetCatBy}
              onChange={(e) => setCatBy(e.target.value)}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              className="w-100"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Cleaning</MenuItem>
              <MenuItem value={20}>Painting</MenuItem>
              <MenuItem value={30}>Electricity</MenuItem>
              <MenuItem value={30}>Plumbing</MenuItem>
              <MenuItem value={30}>FIfty</MenuItem>
              <MenuItem value={30}>Sixty</MenuItem>
            </Select>
          </div>
        </div>

        <div className="table-responsive mt-3">
          <table className="table table-borderd">
            <thead className="thead-dark">
              <tr>
                <th>UID</th>
                <th>Product</th>
                <th>Category</th>
                <th>Booked</th>
                <th>Action</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
