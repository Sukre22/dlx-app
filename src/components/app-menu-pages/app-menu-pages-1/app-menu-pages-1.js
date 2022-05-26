import React, {Component} from 'react';
import './app-menu-pages-1.scss';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';



export default function AppMenuPages1() {


    const dataList = [

        {
            id: 3,
            name: '3 Знакомство с интерфейсом программы',
            files: 'Урок-3.zip',
            taskFirst: 'Первое задание',
            taskSecond: 'Второе задание'
        },

        {
            id: 4.1,
            name: '4.1 Импорт чертежей различных форматов',
            files: 'Урок-4.1.zip',
            taskFirst: 'Третье задание',
            taskSecond: 'Четвертое задание'
        }

    ];




    return(


        <>
            <div class="app__page-header">

            <div class="app__page-header_top">
                <div class="app__page-header_top-container">
                    <div class="app__page-header_top-container-left">
                        <ChevronLeftIcon fontSize="large"/>
                    </div>
                    <div class="app__page-header_top-container-title">
                        <h2 class='work'>1 Введение</h2>
                    </div>
                    <div class="app__page-header_top-container-right">
                        <ChevronRightIcon  fontSize="large"/>
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