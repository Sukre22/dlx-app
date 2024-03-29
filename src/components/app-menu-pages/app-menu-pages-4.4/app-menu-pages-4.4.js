import React, {Component} from 'react';
import './../app-menu-pages-1/app-menu-pages-1.scss';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import {NavLink, useNavigate, Link, Outlet, useLocation, Navigate} from 'react-router-dom';





export default class AppMenuPages44 extends Component {

    render() {



    

        const {onMenuOff} = this.props;


        let className = "app__page-header";
        if (onMenuOff === true) {
            className += " body__active";
        }




    return(


        <>
            <div class={className}>

            <div class="app__page-header_top">


                <div class="app__page-header_top-container">
                    <div class="app__page-header_top-container-left">
                    <Link to="/dlxevo/4.3" ><ChevronLeftIcon fontSize="large"/></Link>
                    </div>
                    <div class="app__page-header_top-container-title">
                        <h2 class='work'>4.4 Добавление 3D объектов</h2>
                    </div>
                    <div class="app__page-header_top-container-right">
                    <Link to="/dlxevo/4.5" ><ChevronRightIcon fontSize="large" /></Link>
                        
                    </div>


                </div>
                <div className="app__page-title_video">
                    <div class="video">

                    <iframe width="1140" height="640" 
                    src="https://www.youtube.com/embed/pGGQFQYnnS4" title="YouTube video player" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                     encrypted-media; gyroscope; picture-in-picture; web-share" 
                     allowfullscreen>

                    </iframe>



                         {/*<iframe width="1140" height="640" src="https://youtu.be/aBywpDjDixU"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                        </iframe>
                        {/*<video width="1140" height="640" controls controlsList="nodownload">
                            <source src={video1} type="video/mp4" />
                        </video> */}
                    </div>
                </div>
                <div class="app__page-title_files">
                        <h3>Файлы</h3>
                   <div class="app__page-title_files-wrap">
                   <div class="app__page-title_files-wrap-icon"><a class="app__page-title_files-wrap-icon-a" href="https://disk.yandex.ru/d/MbcPmQ9yj_A88A" target="_blank"><CloudDownloadIcon/></a></div>

                    <p className="app__page-title_files-wrap-zip"><a href="https://disk.yandex.ru/d/MbcPmQ9yj_A88A" target="_blank">Урок-4.4.zip</a></p>
                     </div>

                </div>

                <div class="app__page-title_files-task">
                    <h3>Задание</h3>
                    <ul className="app__page-title_files-text">
                                <li> 
                                Повторить, проделанную на уроке работу.
                                </li>
                                <li>Добавить 3Д модели для остальных помещений.</li>

                    </ul>

                </div>

            </div>

            </div>








        </>


    )

}
}