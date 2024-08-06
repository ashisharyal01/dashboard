import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/images/web.logo.png'
import Button from '@mui/material/Button';

import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';
import { FaShieldHalved } from "react-icons/fa6";






const Header=()=>{
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleOpenMyAccountDrop = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleCloseMyAccountDrop = () => {
      setAnchorEl(null);
    };

return(
        <header className="d-flex align-items-center">
            <div className="container-fluid">
            <div className="row d-flex align-items-center w-100">
                {/*logo wrap*/}
                <div className="col-sm-2 part1">
                <Link to={'/'} > 
                    <img src={logo} className="logo"/>
                    </Link>
                </div>
                <div className="col-sm-3 d-flex align-items-center part2 pl-4">
                    <Button className="rounded-circle mr-3"><MdMenuOpen/></Button>
                </div>
                <div className="col-sm-7 d-flex align-items-center justify-content-end part3 pl-3">
                <Button className="rounded-circle mr-3"><MdOutlineMail/></Button>
                
                <div className="MyAccountWrapper">
                    <Button className="MyAccount d-flex align-items-center"
                                onClick={handleOpenMyAccountDrop}
                                >
                        <div className="userImg">
                            <span className="rounded-circle">
                             <img src="https://imgs.search.brave.com/WIWYbvkdLpvLCyharr7pOae44bK0kp5PNspkVe4cehI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bXVzaWNjYWZlbmVw/YWwuY29tL2ltYWdl/cy9hcnRpc3RzL25h/cmF5YW4uSlBH" alt="businessmanlogo"/>
                            </span>
                       </div>
                       <div className="userInfo">
                             <h4>Ashish Aryal</h4>
                             <p className="mb-0">@Ashish3</p>
                        </div>
                  </Button>
                  <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleCloseMyAccountDrop}
        onClick={handleCloseMyAccountDrop}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleCloseMyAccountDrop}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          My Account
        </MenuItem>
        <MenuItem onClick={handleCloseMyAccountDrop}>
          <ListItemIcon>
            <FaShieldHalved />
          </ListItemIcon>
          ResetPassword
        </MenuItem>
        <MenuItem onClick={handleCloseMyAccountDrop}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
                  
                </div>
                </div>

                
            </div>
            </div>
        </header>
)

} 
 export default Header; 