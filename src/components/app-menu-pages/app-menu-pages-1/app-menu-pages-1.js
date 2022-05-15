import React, {Component} from 'react';
import './app-menu-pages-1.scss';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";



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
                    <p>Файлы</p>

                </div>
            </div>

            </div>








        </>


    )

}