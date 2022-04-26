import React, {Component} from 'react';
import './app-menu.css';

export default class AppMenu extends Component {

 



    render() {
 
        let menus = [
            "Введение",
            "Основные понятия и определения",
            "Знакомство с интерфейсом программы",
            "Моделирование освещаемого объекта",

         ];

         const menusItems = menus.map((value) =>

         <li>{value}</li>

         )


        return(
            <div>
                <ul>
                    {menusItems}
                </ul>
                
            </div>
 
        )
    }
 
 
 }