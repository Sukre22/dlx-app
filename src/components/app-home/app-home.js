import React, {Component, useState} from 'react';
import './app-home.scss';
import {Navigate} from 'react-router-dom';
import {useAuth} from 'hooks/use-auth';
import {useDispatch} from "react-redux";
import {removeUser} from "store/slices/userSlice";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';


const AppHome = ({onMenuOff}) => {

    const dispatch = useDispatch();
    const {isAuth, email} = useAuth();


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


    const burgerClick = () => {
        console.info('You clicked the Chip.');
    };






        return isAuth ? (


            <>

                <div className="app__menu-top">
                    <div className="app__menu-top_right">

                        <div className="app__menu-top_right-description">
                            <EmojiObjectsIcon fontSize="large"/>
                            <div>Обучающий курс по Dialux Evo/Dialux 4.13</div>
                        </div>

                    </div>
                    <div className="app__menu-top_left">
                        <Stack direction="row" spacing={1}>
                            <Chip label="Dialux Evo" onClick={handleClick}/>
                            <Chip label="Dialux 4.13" variant="outlined" onClick={handleClick}/>
                        </Stack>
                        <IconButton

                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle/>
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

                            <MenuItem onClick={() => dispatch(removeUser())}>Выход</MenuItem>
                        </Menu>
                    </div>


                </div>







                <div class={'app__home-header'}>

                    <div class="app__page-header_top">


                        <div class="app__page-header_top-container">

                            <div class="app__page-header_top-container-title">
                                <h2 class='work'>Добро пожаловать на курс!</h2>
                            </div>



                        </div>
                        <div className="app__page-title_video">
                            <div class="video">
                                <video width="1140" controls="controls">
                                    {/*<source src="../video/05.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>*/}
                                </video>
                            </div>
                        </div>
                        <div class="app__page-title_files">
                            <h3>Файлы</h3>
                            <div class="app__page-title_files-wrap">


                                <p className="app__page-title_files-wrap-zip">Урок-1.zip</p>
                            </div>

                        </div>

                        <div class="app__page-title_files-task">
                            <h3>Задание</h3>
                            <ul className="app__page-title_files-text">
                                <li>
                                    Повторить работу на уроке.
                                </li>
                                <li>Сделать самостоятельно по новому плану.</li>

                            </ul>

                            <button
                                onClick={() => dispatch(removeUser())}
                            >Log out from {email}</button>

                        </div>

                    </div>

                </div>








            </>


        ) : (
            <Navigate to="/login" />
        )


}

export default AppHome;