import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { MdShoppingBag } from "react-icons/md";
import { GiStarsStack } from "react-icons/gi";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useContext, useEffect, useState } from "react";
import { IoIosTimer } from "react-icons/io";
import Button from "@mui/material/Button";

import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Pagination from "@mui/material/Pagination";
import { MyContext } from "../../App";

import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DashboardBox from "../Dashboard/components/dashboardBox";

import shadows from "@mui/material/styles/shadows";

import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

// breadcrumb code
const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];

  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

const Products = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showBy, setshowBy] = useState("");
  const [showBysetCatBy, setCatBy] = useState("");
  const ITEM_HEIGHT = 48;

  return (
    <div className="right-content w-100">
      <div className="card shadow border-0 w-100 flex-row p-4">
        <h5 className="mb-0">Product List</h5>
        <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
          <StyledBreadcrumb
            component="a"
            href="#"
            label="Dashboard"
            icon={<HomeIcon fontSize="small" />}
          />
          <StyledBreadcrumb label="Products" deleteIcon={<ExpandMoreIcon />} />
        </Breadcrumbs>
      </div>
      <div className="row dashboardBoxWrapperRow dashboardBoxWrapperRowv2">
        <div className="col-md-12">
          <div className="dashboardBoxWrapper d-flex">
            <DashboardBox
              color={["#1da256", "#48d483"]}
              icon={<FaUserCircle />}
              grow={true}
            />
            <DashboardBox color={["#c012e2", "#eb64fe"]} icon={<IoMdCart />} />
            {/* <DashboardBox
              color={["#2c78e5", "#60aff5"]}
              icon={<MdShoppingBag />}
            /> */}
          </div>
        </div>
      </div>

      <div className="card shadow border-0 p-3 mt-4">
        <h3 className="hd">Popular Business</h3>

        <div className="row cardFilters mt-3">
          <div className="col col-md-3">
            <h4>Show By</h4>
            <FormControl size="small" className="w-100">
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
            </FormControl>
          </div>

          <div className="col-md-3">
            <h4>Category By</h4>
            <FormControl size="small" className="w-100">
              <Select
                value={showBysetCatBy}
                onChange={(e) => setCatBy(e.target.value)}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                labelId="demo-select-small-label"
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
            </FormControl>
          </div>
        </div>

        <div className="table-responsive mt-3 ">
          <table className="table table-bordered table-striped v-align">
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
                <td>
                  <div className="d-flex align-items-cener">
                    <Checkbox {...label} />{" "}
                    <span style={{ marginTop: "10px" }}>#1</span>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center productBox">
                    <div className="imgWrapper">
                      <div className="img card shadow m-0">
                        <img
                          src="https://imgs.search.brave.com/dsjsofUJgNp15Pss1uYSaS_imDXiI99cg0GWerMTRew/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDUy/MTc2NDMxL3Bob3Rv/L21hbi1jbGVhbmlu/Zy10aGUtZ3V0dGVy/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1ldGdMcFYtdFU0/X2J4Y3oxSGlUQ1cw/Mmx5LW9YN1Y5bkRE/cF9iTnpQNFVnPQ"
                          className="w-100"
                        />
                      </div>
                    </div>
                    <div className="info pl-3">
                      <h6>Cleaning Roof</h6>
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
                <td>
                  {" "}
                  <div className="d-flex align-items-cener">
                    <Checkbox {...label} />{" "}
                    <span style={{ marginTop: "10px" }}>#1</span>
                  </div>
                </td>
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
                    <div className="info pl-3">
                      <h6>Cleaning Roof</h6>
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
                <td>
                  {" "}
                  <div className="d-flex align-items-cener">
                    <Checkbox {...label} />
                    <span style={{ marginTop: "10px" }}>#1</span>
                  </div>
                </td>
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
                    <div className="info pl-3">
                      <h6>Cleaning Roof</h6>
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
                <td>
                  {" "}
                  <div className="d-flex align-items-cener">
                    <Checkbox {...label} />
                    <span style={{ marginTop: "10px" }}>#1</span>
                  </div>
                </td>
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
                    <div className="info pl-3">
                      <h6>Cleaning Roof</h6>
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
                <td>
                  {" "}
                  <div className="d-flex align-items-cener">
                    <Checkbox {...label} />
                    <span style={{ marginTop: "10px" }}>#1</span>
                  </div>
                </td>
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
                    <div className="info pl-3">
                      <h6>Cleaning Roof</h6>
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

export default Products;
