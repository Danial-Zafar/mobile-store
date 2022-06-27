import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSnackbar } from 'notistack';

export default function LoggedInComponent() {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const setting = 'Logout';

    const handleCloseUserMenu = () => {
      
        setAnchorElUser(null);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const logOut = () => {
        localStorage.clear();
        enqueueSnackbar('Logout successfully', { variant: 'success' });
    }


    function loggedInUser() {
        return (
            <>
                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                </Tooltip>
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >

                    <MenuItem onClick={handleCloseUserMenu}>
                        <Typography onClick={logOut.bind()} textAlign="center">{setting}</Typography>
                    </MenuItem>
                </Menu>
            </>
        );
    }

    function guest() {

        return (
            <Button variant="contained" onClick={() => navigate('/login')}>Login</Button>
        );
    }

    function userState() {

        if (localStorage.getItem('user')) {

            return loggedInUser();
        } else {

            return guest();
        }
    }

    return (
        <div>
            {userState()}
        </div>
    )
}
