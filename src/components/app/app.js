import React, {Component, useState} from 'react';
import './app.css';
import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import {Provider} from "react-redux";
import {store, persistor} from 'store';
import {PersistGate} from 'redux-persist/integration/react';

import AppMenu from '../app-menu/app-menu.js';
import AppMenuSecond from '../app-menu-second/app-menu-second.js';
import AppMenuTop from '../app-menu-top/app-menu-top.js';
import AppMenuPages2 from '../app-menu-pages/app-menu-pages-2/app-menu-pages-2.js';
import AppMenuPages1 from '../app-menu-pages/app-menu-pages-1/app-menu-pages-1.js';
import AppMenuPages3 from '../app-menu-pages/app-menu-pages-3/app-menu-pages-3.js';
import AppMenuPages4 from '../app-menu-pages/app-menu-pages-4/app-menu-pages-4.js';
import AppMenuPages41 from '../app-menu-pages/app-menu-pages-4.1/app-menu-pages-4.1.js';
import AppMenuPages42 from '../app-menu-pages/app-menu-pages-4.2/app-menu-pages-4.2.js';
import AppMenuPages43 from '../app-menu-pages/app-menu-pages-4.3/app-menu-pages-4.3.js';
import AppMenuPages44 from '../app-menu-pages/app-menu-pages-4.3/app-menu-pages-4.3.js';
import AppHome from '../app-home/app-home.js';
import AppEntry from "../app-entry/app-entry";
import AppNotfoundpage from "../app-not-found-page/app-not-found-page";
//import AppForgotPassword from "../app-forgot-rassword/app-forgot-password.js";



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
                 <PersistGate loading={null} persistor={persistor}>
                  <Routes>
                    {/*<Route path='/forgotpassword' element={<AppForgotPassword/>}/>*/}
                    <Route path='/' element={<AppHome/>}/>
                    <Route path='/login' element={<AppEntry/>}/>

                    <Route path='/dlxevo' element={ <AppMenu onMenuOff={burger} onBurgerChange={onBurger}/>}>
                       <Route index element={<AppMenuPages1 onMenuOff={burger}/> }/>
                       <Route path="guide" element={<AppMenuPages2 onMenuOff={burger} />}/>                                                  
                       <Route path="3" element={<AppMenuPages3 onMenuOff={burger} />}/>                                                  
                       <Route path="4" element={<AppMenuPages4 onMenuOff={burger} />}/>                                                  
                       <Route path="4.1" element={<AppMenuPages41 onMenuOff={burger} />}/>                                                  
                       <Route path="4.2" element={<AppMenuPages42 onMenuOff={burger} />}/>                                                  
                       <Route path="4.3" element={<AppMenuPages43 onMenuOff={burger} />}/>                                                  
                       <Route path="4.4" element={<AppMenuPages44 onMenuOff={burger} />}/>                                                  
                    </Route> 
                   {/* <Route path='/dlx413' element={ <AppMenuSecond onMenuOff={burger} onBurgerChange={onBurger}/>}>
                        <Route index element={<AppMenuPages1 onMenuOff={burger}/> }/>
                        <Route path="guide" element={<AppMenuPages2 onMenuOff={burger} />}/>
                      </Route>*/}
                      <Route path='*' element={<AppNotfoundpage/>}/>
                  </Routes>
                 </PersistGate>
                </Provider>
        </Router>
        </>

    )

}

export default App;                           
                             
                

               
                

                   

                
                