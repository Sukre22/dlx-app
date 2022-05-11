import React, {Component} from 'react';
import './app-menu-top.scss';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';


export default function AppMenuTop() {




        const handleClick = () => {
            console.info('You clicked the Chip.');
        };

    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };




        return(
          <div class="menu-top">
              <div class="menu-top_icons">

                  <div class="menu-top_icons3">
                      <MenuIcon />
                  </div>
                  <div class="menu-top_icons2">
                      <EmojiObjectsIcon fontSize="large"/>
                      <div>Обучающий курс по Dialux Evo/Dialux 4.13</div>
                  </div>

              </div>
              <div class="menu-top_icons1">
                  <Stack direction="row" spacing={1}>
                      <Chip label="Dialux Evo" onClick={handleClick} />
                      <Chip label="Dialux 4.13" variant="outlined" onClick={handleClick} />
                  </Stack>
                  <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleMenu}
                      color="inherit"
                  >
                      <AccountCircle />
                  </IconButton>
                  <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                      }}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                  >

                      <MenuItem onClick={handleClose}>Выход</MenuItem>
                  </Menu>
              </div>


          </div>
        )



}