import React, {Component} from 'react';
import './app-menu-pages-1.scss';
import {NavLink, useNavigate, Link, Outlet, useLocation, Navigate} from 'react-router-dom';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';





const AppMenuPages1 = ({onMenuOff}) => {

    

  /*  let navigate = useNavigate();
    const routeChange3 = () =>{
        let path = `guide`;
        navigate(path);
    }*/

   

       // const {onMenuOff} = this.props;


        let className = "app__page-header";
        if (onMenuOff === true) {
            className += " body__active";
        }

       

       /* const routeChange1 = () =>{
            let path = `guide`;
            navigate(path);
        }*/




    return(


        <>
            <div class={className}>

            <div class="app__page-header_top">


                <div class="app__page-header_top-container">
        
                    <div class="app__page-header_top-container-title">
                        <h2 class='work'>1 Введение</h2>
                    </div>
                    <div class="app__page-header_top-container-right">               
                        
                    <Link to="/dlxevo/guide" style={{textDecoration: 'none'}}><ChevronRightIcon fontSize="large" /></Link>                     
                        
                    </div>


                </div>
                <div className="app__page-title_video">
                    <div class="video">

                   <iframe width="1140" height="640" 
                    src="https://www.youtube.com/embed/aBywpDjDixU" title="YouTube video player" 
                     frameborder="0"  allow="accelerometer; autoplay; clipboard-write;
                     encrypted-media; gyroscope; picture-in-picture">                  

    </iframe>



                         
                    </div>
                </div>
                <div class="app__page-title_files">
                        <h3>Файлы</h3>
                   <div class="app__page-title_files-wrap">
                            <div class="app__page-title_files-wrap-icon"><a class="app__page-title_files-wrap-icon-a" href="#"><CloudDownloadIcon/></a></div>

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

                </div>

            </div>

            </div>








        </>


    )


}

export default AppMenuPages1;