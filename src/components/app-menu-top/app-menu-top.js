import React, {Component} from 'react';
import './app-menu-top.scss';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

export default class AppMenuTop extends Component {

    render() {

        return(
          <div class="menu-top">
              <div class="menu-top_icons">
                  <div class="menu-top_icons3">
                      <MenuIcon />
                  </div>
                  <div class="menu-top_icons2">
                      <EmojiObjectsIcon fontSize="large"/>
                      <p >Курс по Dialux Evo/Dialux 4.13</p>
                  </div>



              </div>


          </div>
        )
    }


}