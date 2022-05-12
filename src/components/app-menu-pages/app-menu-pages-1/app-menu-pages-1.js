import { dividerClasses } from '@mui/material';
import React, {Component} from 'react';
import './app-menu-pages-1.scss';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


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
							<h2 class='work'>2 Основные понятия и определения</h2>							
						</div>
						<div class="text-right">
						<ChevronRightIcon  fontSize="large"/> 
						</div>
					
				
			</div>
					<div class="header-title_wrapper">
						<h3>Здравствуйте!</h3>
						<p className="welcome">
							В данном уроке мы познакомимся с основными понятиями и определениями, применяемыми в
							светотехнике,
							их необходимо знать для выполнения расчетов. Узнаем, как они связаны друг с другом и в чем
							их измеряют.
						</p>

					</div>


		</div>
	</div>

    

    </>
    
    
	
    )




}