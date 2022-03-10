import React, { useState } from 'react'
import { Menu, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import headshot from '../images/headshot.jpg';
import '../App.css'

const MenuBar = () => {

    const pathname = window.location.pathname;
    let path = pathname === '/' ? 'home' : pathname.substr(1);

    const handleItemClick = (e, { name }) => setActiveItem(name);
    const [activeItem, setActiveItem] = useState(path);

    return (
    <Menu pointing secondary size="massive" >
    <Menu.Menu position="left">
    <Menu.Item name = "home"
    active={activeItem === 'home'}
    onClick={handleItemClick}
    as={Link} to="/" />

    <Menu.Item name = "games"
    active={activeItem === 'games'}
    onClick={handleItemClick}
    as={Link} to="/games">   
    <Icon name='gamepad' />
        Games
    </Menu.Item>

    </Menu.Menu>
   
    <p id='navbarName'> 
    <Icon name='laptop'  style={{color:"black"}} /> 
    <Icon name='language' style={{color:"black"}} /> 
   
    Kimberly's Portfolio 
    
    <Icon name='image outline'  style={{color:"black"}} />
    <Icon name='gamepad'  style={{color:"black"}} />
    </p>
    <Menu.Menu position="right"/>
    <img src={headshot} id="headshot" alt='My face' style={{ borderRadius: 400/ 2}} />
    </Menu>
 );



}
export default MenuBar;