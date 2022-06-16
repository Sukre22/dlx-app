import React, {Component, useState} from 'react';
import './app.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Provider} from "react-redux";
import {store} from 'store';

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
                <Provider store={store}>
                <Routes>
                    <Route path='/' element={<AppHome/>}/>
                </Routes>

                <Routes>
                    <Route path='/login' element={<AppEntry/>}/>
                </Routes>

                {/*<AppMenuTop onMenuOff={burger} onBurgerChange={onBurger}/>*/}

                <Routes>

                    <Route path='/dlxevo' element={ <AppMenu onMenuOff={burger}/>}>

                       <Route index element={<AppMenuPages1 onMenuOff={burger}/> }/>          
                       <Route path="guide" element={<AppMenuPages2 onMenuOff={burger} />}/>                       
                        
                   
                    </Route>

                </Routes>
                <Routes>

                    <Route path='/dlx413' element={ <AppMenu onMenuOff={burger}/>}>

                        <Route index element={<AppMenuPages1 onMenuOff={burger}/> }/>
                        <Route path="guide" element={<AppMenuPages2 onMenuOff={burger} />}/>


                    </Route>

                </Routes>
                </Provider>
            </Router>

        </>

    )

}

export default App;