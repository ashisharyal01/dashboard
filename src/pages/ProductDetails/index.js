import React from "react";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";

import Slider from "react-slick";

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

const ProductDetails = () => {
  var productSliderOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  var productSliderSmlOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="right-content w-100">
        <div className="card shadow border-0 w-100 flex-row p-4">
          <h5 className="mb-0">Product View</h5>
          <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
            <StyledBreadcrumb
              component="a"
              href="#"
              label="Dashboard"
              icon={<HomeIcon fontSize="small" />}
            />
            <StyledBreadcrumb label="Products" components="a" href="#" />

            <StyledBreadcrumb label="Product View" />
          </Breadcrumbs>
        </div>

        <div className="card">
          <div className="row">
            <div className="col-md-5">
              <div className="sliderWrapper pt-3 pb-3 pl-4 pr-4">
                <h6 className="mb-3">Product Gallery</h6>
                <Slider {...productSliderOptions} className="sliderBig mb-2">
                  <div className="item">
                    <img
                      src="https://imgs.search.brave.com/IK2wEHskIenYF4Xq1_xcNhRmfk-vCxkf82cPJQqVx98/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTA5/Mjc4MDI3L3Bob3Rv/L2NsZWFuaW5nLXRh/cC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9cDNSSTVGSlEy/MXhMOENkV2ViM1Rj/OU44NGlrR3d1TFVq/VVpIQ0JzUHVXRT0"
                      className="w-100"
                    />
                  </div>
                </Slider>
                <Slider {...productSliderSmlOptions} className="sliderSml">
                  <div className="item">
                    <img
                      src="https://imgs.search.brave.com/Qg8VI_NR9CNhh8JpjTyt_17iuU1UDeyASOOdCETGpbc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdG9y/eWJsb2stY2RuLnBo/b3Rvcm9vbS5jb20v/Zi8xOTE1NzYvMTA0/OHg3ODYvNDRhZmRh/NWUwMS93aGl0ZS1i/YWNrZ3JvdW5kLTEu/d2VicA"
                      className="w-100"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://imgs.search.brave.com/Biz7L_MvBJhzrCJPnvUY6aoHn_YWSh5BNI3Y1yhceXI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZmNk/bi5hcG93ZXJzb2Z0/LmluZm8vYXN0cm8v/cGljd2lzaC9fYXN0/cm8vc2NlbmUyLWJl/Zm9yZS42YTkwNmYy/ZS5wbmc"
                      className="w-100"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://imgs.search.brave.com/IK2wEHskIenYF4Xq1_xcNhRmfk-vCxkf82cPJQqVx98/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTA5/Mjc4MDI3L3Bob3Rv/L2NsZWFuaW5nLXRh/cC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9cDNSSTVGSlEy/MXhMOENkV2ViM1Rj/OU44NGlrR3d1TFVq/VVpIQ0JzUHVXRT0"
                      className="w-100"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://imgs.search.brave.com/IK2wEHskIenYF4Xq1_xcNhRmfk-vCxkf82cPJQqVx98/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTA5/Mjc4MDI3L3Bob3Rv/L2NsZWFuaW5nLXRh/cC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9cDNSSTVGSlEy/MXhMOENkV2ViM1Rj/OU44NGlrR3d1TFVq/VVpIQ0JzUHVXRT0"
                      className="w-100"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://imgs.search.brave.com/IK2wEHskIenYF4Xq1_xcNhRmfk-vCxkf82cPJQqVx98/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTA5/Mjc4MDI3L3Bob3Rv/L2NsZWFuaW5nLXRh/cC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9cDNSSTVGSlEy/MXhMOENkV2ViM1Rj/OU44NGlrR3d1TFVq/VVpIQ0JzUHVXRT0"
                      className="w-100"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://imgs.search.brave.com/IK2wEHskIenYF4Xq1_xcNhRmfk-vCxkf82cPJQqVx98/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTA5/Mjc4MDI3L3Bob3Rv/L2NsZWFuaW5nLXRh/cC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9cDNSSTVGSlEy/MXhMOENkV2ViM1Rj/OU44NGlrR3d1TFVq/VVpIQ0JzUHVXRT0"
                      className="w-100"
                    />
                  </div>
                </Slider>
              </div>
            </div>
            <div className="col-md-7">
              <div className="pt-3 pb-3 pl-4 pr-4">
                <h6 className="mb-3">Product Gallery</h6>
                <h4>
                  Cleaning and fixing the water tap in the house by experts.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
