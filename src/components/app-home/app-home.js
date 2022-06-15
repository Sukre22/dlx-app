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







                <div class='app__home-header'>

                    <div class="app__home-header_top">


                        <div class="app__home-header_top-container">

                            <div class="app__home-header_top-container-title">
                                <h2 class='work'>Добро пожаловать на курс!</h2>
                            </div>



                        </div>
                        <div className="app__home-title">

                            <h3 className={'app__home-title-h3'}>Выберите версию Dialux, с которой хотите начать обучение :</h3>
                            <div class="app__home-title_description">
                                <ul className="cards">
                                    <li className="cards__item">
                                        <div className="card">
                                            <div className="card__image card__image--fence"></div>
                                            <div className="card__content">
                                                <div className="card__title">Dialux Evo</div>
                                                <p className="card__text">This is the shorthand for flex-grow,
                                                    flex-shrink and flex-basis combined. The second and third parameters
                                                    (flex-shrink and flex-basis) are optional. Default is 0 1 auto. </p>
                                                <button className="btn btn--block card__btn">Выбрать</button>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="cards__item">
                                        <div className="card">
                                            <div className="card__image card__image--river"></div>
                                            <div className="card__content">
                                                <div className="card__title">Dialux 4.13</div>
                                                <p className="card__text">This defines the ability for a flex item to
                                                    grow if necessary. It accepts a unitless value that serves as a
                                                    proportion. It dictates what amount of the available space inside
                                                    the flex container the item should take up.</p>
                                                <button className="btn btn--block card__btn">Выбрать</button>
                                            </div>
                                        </div>
                                    </li>
                                        </ul>

                            </div>
                        </div>



                    </div>

                </div>








            </>


        ) : (
            <Navigate to="/login" />
        )


}

export default AppHome;