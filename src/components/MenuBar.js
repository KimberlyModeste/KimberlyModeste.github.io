import React, { useState } from 'react'
import { Menu, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
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
    <Icon name='laptop'  /> 
    <Icon name='language' /> 
   
    Kimberly's Portfolio 
    
    <Icon name='image outline'   />
    <Icon name='gamepad'  />
    </p>
    <Menu.Menu position="right"/>
    <Menu.Item>
    <a rel="noreferrer"
        id='social-icon-link'
        href='https://github.com/KimberlyModeste'
        target='_blank'
    > 
    <Icon name='github' size='large'/>
    </a>
    </Menu.Item>
    <Menu.Item>
    <a
        rel="noreferrer"
        id='social-icon-link'
        href='https://www.linkedin.com/in/kimberly-modeste1'
        target='_blank'
    > 
    <Icon name='linkedin' size='large'/>
    </a>
    </Menu.Item>
    <Menu.Item name = "master_resume"
    active={activeItem === 'master_resume'}
    onClick={handleItemClick}
    as={Link} to="/master_resume.pdf" >
   
    <Icon name='file alternate outline' size='large'/>
    </Menu.Item>
    </Menu>
 );



}
export default MenuBar;