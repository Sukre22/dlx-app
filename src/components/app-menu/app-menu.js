import React, {Component} from 'react';
import './app-menu.scss';
import {NavLink, Link} from 'react-router-dom';


export default class AppMenu extends Component {


    render() {

		const setActive = ({ isActive }) => ({backgroundColor: isActive ? '#e5e5e5' : 'inherit'});

        return(
			
            <div class="app__menu">
			<ul class="app__menu-list">
			   <li><NavLink
			       className={"app__menu-list-head end"}
				   end
				   style={setActive}
				   to="/">1 Введение</NavLink>
			   </li>

			  <li><NavLink
				    className={"app__menu-list-head end"}
					end
					style={setActive}
					to="/firstpage">2 Основные понятия и определения</NavLink>
			  </li>

			  

			   <li class="app__menu-list-head end">3 Знакомство с интерфейсом программы</li>
			   <li class="app__menu-list-head">4 Моделирование освещаемого объекта</li>
			   <li class="app__menu-list-part">4.1 Импорт чертежей различных форматов</li>
			   <li class="app__menu-list-part">4.2 Построение зданий и его помещений</li>
			   <li class="app__menu-list-part">4.3 Добавление дверей, окон, потолков и крыши</li>
			   <li class="app__menu-list-part">4.4 Добавление 3D объектов</li>
			   <li class="app__menu-list-part end">4.5 Применение материалов и цветов</li>
			   <li class="app__menu-list-head">5 Расчет освещения</li>
			   <li class="app__menu-list-part">5.1 Расстановка и настройка светильников</li>
			   <li class="app__menu-list-part">5.2 Создание расчетных поверхностей</li>
			   <li class="app__menu-list-part">5.3 Настройка результатов расчета</li>
			   <li class="app__menu-list-part end">5.4 Расчет аварийного освещения</li>
			   <li class="app__menu-list-head end">6 Создание отчета</li>
			   <li class="app__menu-list-head">7 Практика</li>
			   <li class="app__menu-list-part">7.1 Расчет наружного освещения</li>
			   <li class="app__menu-list-part">7.2 Расчет периметрального освещения</li>
			   <li class="app__menu-list-part">7.3 Расчет спортивной площадки с учетом UGR-показателя</li>
			   <li class="app__menu-list-part end">7.4 Расчет спортивной площадки с учетом GR-показателя</li>
			   <li class="app__menu-list-head end">8 Заключение</li>
			</ul>

				<footer className="app__footer">
					<div class="app__footer-links">
						<p><a href="#">О проекте</a></p>
						<p><a href="#">Рекламодателям</a></p>
						<p><a href="#">Сотрудничество</a></p>
					</div>
					<p class="app__footer-copyright">© 2022 Copyright</p>
				</footer>
	 </div>
	 
 
        )
    }
 
 
 }