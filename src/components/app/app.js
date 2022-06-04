import React, {Component, useState} from 'react';
import './app.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import AppMenu from '../app-menu/app-menu.js';
import AppMenuTop from '../app-menu-top/app-menu-top.js';
import AppMenuPages2 from '../app-menu-pages/app-menu-pages-2/app-menu-pages-2.js';
import AppMenuPages1 from '../app-menu-pages/app-menu-pages-1/app-menu-pages-1.js';
import AppHome from '../app-home/app-home.js';
import AppEntry from "../app-entry/app-entry";



const App = (props) => {

    const [burger, setBurger] = useState(false);

    function onBurger(i) {
        setBurger(burger => !burger);
        console.log(burger);
    }


    return(
        <>
            <Router>


                <AppEntry/>

                {/*  <AppMenuTop
                    onMenuOff={burger}
                    onBurgerChange={onBurger}
                />
                <AppMenu
                    onMenuOff={burger}
                />
                <Routes>


                    <Route path='/dlxevo/introduction' element={<AppMenuPages1
                        onMenuOff={burger}
                    />}/>
                    <Route path="/dlxevo/guide" element={<AppMenuPages2
                        onMenuOff={burger}
                    />}/>

                </Routes>*/}

            </Router>

        </>

    )

}

export default App;