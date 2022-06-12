import React, {Component, useState} from 'react';
import './app-home.scss';
import {Navigate} from 'react-router-dom';
import {useAuth} from 'hooks/use-auth';
import {useDispatch} from "react-redux";
import {removeUser} from "store/slices/userSlice";


const AppHome = ({onMenuOff}) => {

    const dispatch = useDispatch();
    const {isAuth, email} = useAuth();


        let className = "app__page-header";
        if (onMenuOff === true) {
            className += " body__active";
        }






        return isAuth ? (


            <>



                <div class={className}>



                    <div class="app__page-header_top">


                        <div class="app__page-header_top-container">

                            <div class="app__page-header_top-container-title">
                                <h2 class='work'>1 Введение</h2>
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