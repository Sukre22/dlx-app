import React, {Component, useState} from 'react';
import './app.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import AppMenu from '../app-menu/app-menu.js';
import AppMenuTop from '../app-menu-top/app-menu-top.js';
import AppMenuPages2 from '../app-menu-pages/app-menu-pages-2/app-menu-pages-2.js';
import AppMenuPages1 from '../app-menu-pages/app-menu-pages-1/app-menu-pages-1.js';
import AppHome from '../app-home/app-home.js';

{/*export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {            
            burger: false           
        };
        
        this.onBurger = this.onBurger.bind(this);        
    }

    onBurger(e) {
        this.setState(({burger}) => ({
            burger: !burger
           
        }))
        console.log(this.state.burger);
    }

   render() {

       return(
           <>
               <Router>
                   <AppMenuTop
                   onMenuOff={this.state.burger}
                   onBurgerChange={this.onBurger}  
                   />
                   <AppMenu
                   onMenuOff={this.state.burger}                 
                   />
                   <Routes>


                       <Route path='/dlxevo/introduction' element={<AppMenuPages1
                           onMenuOff={this.state.burger}
                       />}/>
                       <Route path="/dlxevo/guide" element={<AppMenuPages2
                           onMenuOff={this.state.burger}
                       />}/>
                   </Routes>

               </Router>

           </>

       )
   }


}*/}

const App = (props) => {

    const [burger, setBurger] = useState(false);

    function onBurger(i) {
        setBurger(burger => !burger);
        console.log(burger);
    }


    return(
        <>
            <Router>
                <AppMenuTop
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
                </Routes>

            </Router>

        </>

    )

}

export default App;