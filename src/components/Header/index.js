import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/images/web.logo.png'
import Button from '@mui/material/Button';

import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';





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
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleCloseMyAccountDrop}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleCloseMyAccountDrop}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleCloseMyAccountDrop}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleCloseMyAccountDrop}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
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