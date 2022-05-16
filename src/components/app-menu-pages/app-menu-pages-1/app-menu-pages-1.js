import React, {Component} from 'react';
import './app-menu-pages-1.scss';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';



export default function AppMenuPages1() {




    return(

        <>
            <div class="header">

            <div class="header-top">
                <div class="header-top_row">
                    <div class="text-left">
                        <ChevronLeftIcon fontSize="large"/>
                    </div>
                    <div class="header-title">
                        <h2 class='work'>1 Введение</h2>
                    </div>
                    <div class="text-right">
                        <ChevronRightIcon  fontSize="large"/>
                    </div>


                </div>
                <div className="header-title_wrapper-video">
                    <div class="video">
                        <video width="1140" controls="controls">
                            {/*<source src="../video/05.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>*/}
                        </video>
                    </div>
                </div>
                <div class="files">
                        <h3>Файлы</h3>
                        <div class="files_wrap">
                            <div class="files_wrap-icon"><a href="#"><CloudDownloadIcon/></a></div>

                            <a href="#" className="zip">Урок-1.zip</a>
                        </div>

                </div>

                <div class="task">
                    <h3>Задание</h3>
                    <ul className="task-text">

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