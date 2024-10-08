import React from "react";
import DashboardBox from "./components/dashboardBox";
import { FaUserCircle } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import Button from "@mui/material/Button";

import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import Pagination from "@mui/material/Pagination";
import { Link } from "react-router-dom";

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
        <h3 className="hd">Popular Business</h3>

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

        <div className="table-responsive mt-3 ">
          <table className="table table-bordered v-align">
            <thead className="thead-dark">
              <tr>
                <th>UID</th>
                <th style={{ width: "300px" }}>Product</th>
                <th>Category</th>
                <th>Booked</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#1</td>
                <td>
                  <div className="d-flex align-items-center productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img
                          src="https://imgs.search.brave.com/dsjsofUJgNp15Pss1uYSaS_imDXiI99cg0GWerMTRew/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDUy/MTc2NDMxL3Bob3Rv/L21hbi1jbGVhbmlu/Zy10aGUtZ3V0dGVy/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1ldGdMcFYtdFU0/X2J4Y3oxSGlUQ1cw/Mmx5LW9YN1Y5bkRE/cF9iTnpQNFVnPQ"
                          className="w-100"
                        />
                      </div>
                    </div>
                    <div className="info pl-0">
                      <h6>Cleaning Rooof</h6>
                    </div>
                  </div>
                </td>
                <td>Cleaning</td>
                <td>1</td>
                <td>
                  <div className="actions d-flex align-items-center">
                    <Link to="/product/details">
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                    </Link>
                    <Button className="success" color="success">
                      <FaPencilAlt />
                    </Button>
                    <Button className="error" color="error">
                      <MdDelete />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#1</td>
                <td>
                  <div className="d-flex align-items-center productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img
                          src="https://imgs.search.brave.com/dsjsofUJgNp15Pss1uYSaS_imDXiI99cg0GWerMTRew/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDUy/MTc2NDMxL3Bob3Rv/L21hbi1jbGVhbmlu/Zy10aGUtZ3V0dGVy/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1ldGdMcFYtdFU0/X2J4Y3oxSGlUQ1cw/Mmx5LW9YN1Y5bkRE/cF9iTnpQNFVnPQ"
                          className="w-100"
                        />
                      </div>
                    </div>
                    <div className="info pl-0">
                      <h6>Cleaning Rooof</h6>
                    </div>
                  </div>
                </td>
                <td>Cleaning</td>
                <td>1</td>
                <td>
                  <div className="actions d-flex align-items-center">
                    <Button className="secondary" color="secondary">
                      <FaEye />
                    </Button>
                    <Button className="success" color="success">
                      <FaPencilAlt />
                    </Button>
                    <Button className="error" color="error">
                      <MdDelete />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#1</td>
                <td>
                  <div className="d-flex align-items-center productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img
                          src="https://imgs.search.brave.com/dsjsofUJgNp15Pss1uYSaS_imDXiI99cg0GWerMTRew/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDUy/MTc2NDMxL3Bob3Rv/L21hbi1jbGVhbmlu/Zy10aGUtZ3V0dGVy/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1ldGdMcFYtdFU0/X2J4Y3oxSGlUQ1cw/Mmx5LW9YN1Y5bkRE/cF9iTnpQNFVnPQ"
                          className="w-100"
                        />
                      </div>
                    </div>
                    <div className="info pl-0">
                      <h6>Cleaning Rooof</h6>
                    </div>
                  </div>
                </td>
                <td>Cleaning</td>
                <td>1</td>
                <td>
                  <div className="actions d-flex align-items-center">
                    <Button className="secondary" color="secondary">
                      <FaEye />
                    </Button>
                    <Button className="success" color="success">
                      <FaPencilAlt />
                    </Button>
                    <Button className="error" color="error">
                      <MdDelete />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#1</td>
                <td>
                  <div className="d-flex align-items-center productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img
                          src="https://imgs.search.brave.com/dsjsofUJgNp15Pss1uYSaS_imDXiI99cg0GWerMTRew/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDUy/MTc2NDMxL3Bob3Rv/L21hbi1jbGVhbmlu/Zy10aGUtZ3V0dGVy/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1ldGdMcFYtdFU0/X2J4Y3oxSGlUQ1cw/Mmx5LW9YN1Y5bkRE/cF9iTnpQNFVnPQ"
                          className="w-100"
                        />
                      </div>
                    </div>
                    <div className="info pl-0">
                      <h6>Cleaning Rooof</h6>
                    </div>
                  </div>
                </td>
                <td>Cleaning</td>
                <td>1</td>
                <td>
                  <div className="actions d-flex align-items-center">
                    <Button className="secondary" color="secondary">
                      <FaEye />
                    </Button>
                    <Button className="success" color="success">
                      <FaPencilAlt />
                    </Button>
                    <Button className="error" color="error">
                      <MdDelete />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#1</td>
                <td>
                  <div className="d-flex align-items-center productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img
                          src="https://imgs.search.brave.com/dsjsofUJgNp15Pss1uYSaS_imDXiI99cg0GWerMTRew/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDUy/MTc2NDMxL3Bob3Rv/L21hbi1jbGVhbmlu/Zy10aGUtZ3V0dGVy/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1ldGdMcFYtdFU0/X2J4Y3oxSGlUQ1cw/Mmx5LW9YN1Y5bkRE/cF9iTnpQNFVnPQ"
                          className="w-100"
                        />
                      </div>
                    </div>
                    <div className="info pl-0">
                      <h6>Cleaning Rooof</h6>
                    </div>
                  </div>
                </td>
                <td>Cleaning</td>
                <td>1</td>
                <td>
                  <div className="actions d-flex align-items-center">
                    <Button className="secondary" color="secondary">
                      <FaEye />
                    </Button>
                    <Button className="success" color="success">
                      <FaPencilAlt />
                    </Button>
                    <Button className="error" color="error">
                      <MdDelete />
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="d-flex tableFooter">
            <Pagination count={10} color="primary" className="pagination" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
