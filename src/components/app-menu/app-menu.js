import React, {Component} from 'react';
import './app-menu.scss';


export default class AppMenu extends Component {

 



    render() {      

       
        return(
			
            <div class="menu">
					
			<ul class="list-unstyled">

			   <li class="week week4" id="week3">1 Введение</li>
			   <li class="week" id="week3" >2 Основные понятия и определения</li>
			   <li class="week" id="week3">3 Знакомство с интерфейсом программы</li>
			   <li class="week">4 Моделирование освещаемого объекта</li>
			   <li class="second">4.1 Импорт чертежей различных форматов</li>
			   <li class="second">4.2 Построение зданий и его помещений</li>
			   <li class="second">4.3 Добавление дверей, окон, потолков и крыши</li>
			   <li class="second">4.4 Добавление 3D объектов</li>
			   <li class="second" id="week3">4.5 Применение материалов и цветов</li>
			   <li class="week">5 Расчет освещения</li>
			   <li class="second">5.1 Расстановка и настройка светильников</li>
			   <li class="second">5.2 Создание расчетных поверхностей</li>
			   <li class="second">5.3 Настройка результатов расчета</li>
			   <li class="second" id="week3">5.4 Расчет аварийного освещения</li>
			   <li class="week" id="week3">6 Создание отчета</li>
			   <li class="week">7 Практика</li>
			   <li class="second">7.1 Расчет наружного освещения</li>
			   <li class="second">7.2 Расчет периметрального освещения</li>
			   <li class="second">7.3 Расчет спортивной площадки с учетом UGR-показателя</li>
			   <li class="second" id="week3">7.4 Расчет спортивной площадки с учетом GR-показателя</li>
			   <li class="week" id="week5">8 Заключение</li>
			</ul>

				<footer className="footer">


					<div class="links">
						<p><a href="#">О проекте</a></p>
						<p><a href="#">Рекламодателям</a></p>
						<p><a href="#">Сотрудничество</a></p>
					</div>


					<p class="copyright">© 2022 Copyright</p>

				</footer>
	 </div>
	 
 
        )
    }
 
 
 }