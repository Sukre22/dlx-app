import React, {Component} from 'react';
import './app-menu.css';

export default class AppMenu extends Component {

 



    render() {
 
        let menus = [
            "Home",
            "Service",
            "Delivery",
            "Contacts",
            "Partners" 
         ];

         const menusItems = menus.map(([value]) =>

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