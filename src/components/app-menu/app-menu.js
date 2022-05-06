import React, {Component} from 'react';
import './app-menu.scss';
import Tooltip from '@mui/material/Tooltip';

export default class AppMenu extends Component {

 



    render() {
 

       

       
        return(
            <div class="menu">
					
			<ul class="list-unstyled">
            <Tooltip title="Введение" placement="right">
			   <li class="week" id="week2">1 Введение</li>
               </Tooltip>
               <Tooltip title="Основные понятия и определения" placement="right">
			   <li class="week"><a data-tooltip="Основные понятия и определения"  href="section-2.html">2 Основные понятия и определения</a></li>
               </Tooltip>
               <Tooltip title="Знакомство с интерфейсом программы" placement="right">
			   <li class="week"><a data-tooltip="Знакомство с интерфейсом программы" href="section-3.html">3 Знакомство с интерфейсом программы</a></li>
               </Tooltip>
			   <li class="week"><a data-tooltip="Моделирование освещаемого объекта" href="section-4.html">4 Моделирование освещаемого объекта</a></li>
			   <li class="second"><a data-tooltip="Импорт чертежей различных форматов" href="section-4.1.html">4.1 Импорт чертежей различных форматов</a></li>
			   <li class="second"><a data-tooltip="Построение зданий и его помещений"  href="section-4.2.html">4.2 Построение зданий и его помещений</a></li>
			   <li class="second"><a data-tooltip="Добавление дверей, окон, потолков и крыши" href="section-4.3.html">4.3 Добавление дверей, окон, потолков и крыши</a></li>
			   <li class="second"><a data-tooltip="Добавление 3D объектов" href="section-4.4.html">4.4 Добавление 3D объектов</a></li>
			   <li class="second"><a data-tooltip="Применение материалов и цветов" href="section-4.5.html">4.5 Применение материалов и цветов</a></li>      
			   <li class="week"><a data-tooltip="Расчет освещения" href="section-5.html">5 Расчет освещения</a></li>
			   <li class="second"><a data-tooltip="Расстановка и настройка светильников" href="section-5.1.html">5.1 Расстановка и настройка светильников</a></li>            
			   <li class="second"><a data-tooltip="Создание расчетных поверхностей" href="section-5.2.html">5.2 Создание расчетных поверхностей</a></li>
			   <li class="second"><a data-tooltip="Настройка результатов расчета" href="section-5.3.html">5.3 Настройка результатов расчета</a></li>
			   <li class="second"><a data-tooltip="Расчет аварийного освещения" href="section-5.4.html">5.4 Расчет аварийного освещения</a></li>
			   <li class="week"><a data-tooltip="Создание отчета" href="section-6.html">6 Создание отчета</a></li>
			   <li class="week"><a data-tooltip="Практика" href="section-7.html">7 Практика</a></li>
			   <li class="second"><a data-tooltip="Расчет наружного освещения" href="section-7.1.html">7.1 Расчет наружного освещения</a></li>
			   <li class="second"><a data-tooltip="Расчет периметрального освещения" href="section-7.2.html">7.2 Расчет периметрального освещения</a></li>
			   <li class="second"><a data-tooltip="Расчет спортивной площадки с учетом UGR-показателя" href="section-7.3.html">7.3 Расчет спортивной площадки с учетом UGR-показателя</a></li>
			   <li class="second"><a data-tooltip="Расчет спортивной площадки с учетом GR-показателя" href="section-7.4.html">7.4 Расчет спортивной площадки с учетом GR-показателя</a></li>
			   <li class="week"><a data-tooltip="Заключение" href="section-8.html">8 Заключение</a></li>
			</ul>
	 </div>
 
        )
    }
 
 
 }