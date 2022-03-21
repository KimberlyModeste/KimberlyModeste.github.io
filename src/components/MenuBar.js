import React, { useState } from 'react'
import { Menu, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
<<<<<<< HEAD
import '../App.css'

const MenuBar = (props) => {
=======
import headshot from '../images/headshot.jpg';
import '../App.css'

const MenuBar = () => {
>>>>>>> parent of 706d7d0f (Merge branch 'master' of https://github.com/KimberlyModeste/KimberlyModest.Github)

    const pathname = window.location.pathname;
    let path = pathname === '/' ? 'home' : pathname.substr(1);

    const handleItemClick = (e, { name }) => setActiveItem(name);
    const [activeItem, setActiveItem] = useState(path);

<<<<<<< HEAD
    console.log(props.inverted)
    if(props.inverted)
    {
      let foot = document.getElementById('footer-container');
      foot.style.backgroundColor ="black"     
    }
    else
    {
        let foot = document.getElementById('footer-container');
        foot.style.backgroundColor ="#b496c6" 
    }

    return (
        props.inverted?
        <Menu pointing secondary inverted color="grey" size="large" >
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
        <p id='navbarNameInv' > 
        <Icon name='laptop' /> 
        <Icon name='language' /> 
        
        Kimberly's Portfolio
        <Icon name='image outline' />
        <Icon name='gamepad' />
        </p>
        <Menu.Menu position="right"/>
        <Menu.Item  name = "Github"
        active={activeItem === 'Github'}
        onClick={handleItemClick}
        href='https://github.com/KimberlyModeste'
        target='_blank'>
        <Icon name='github' size='large'/>
        </Menu.Item>
       
        <Menu.Item 
        name = "LinkedIn"
        active={activeItem === 'LinkenIn'}
        onClick={handleItemClick}
        href='https://www.linkedin.com/in/kimberly-modeste1'
        target='_blank'>
        <Icon name='linkedin' size='large'/>
        </Menu.Item>
    
        <Menu.Item name = "master_resume"
        active={activeItem === 'master_resume'}
        onClick={handleItemClick}
        as={Link} to="/master_resume.pdf" >
       
        <Icon name='file alternate outline' size='large'/>
        </Menu.Item>
        </Menu>
      :
      <Menu pointing secondary color={props.inverted? "grey" : ""} size="large" >
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
     
      <p id='navbarName' > 
      <Icon name='laptop'  color={props.inverted? props.color : "black"} /> 
      <Icon name='language'  color={props.inverted? props.color : "black"} /> 
      
      Kimberly's Portfolio
      <Icon name='image outline'    color={props.inverted? props.color : "black"}/>
      <Icon name='gamepad'  color={props.inverted? props.color : "black"} />
      </p>
      <Menu.Menu position="right"/>
      <Menu.Item  name = "Github"
      active={activeItem === 'Github'}
      onClick={handleItemClick}
      href='https://github.com/KimberlyModeste'
      target='_blank'>
      <Icon name='github' size='large'/>
      </Menu.Item>
     
      <Menu.Item 
      name = "LinkedIn"
      active={activeItem === 'LinkenIn'}
      onClick={handleItemClick}
      href='https://www.linkedin.com/in/kimberly-modeste1'
      target='_blank'>
      <Icon name='linkedin' size='large'/>
      </Menu.Item>
    
      <Menu.Item name = "master_resume"
      active={activeItem === 'master_resume'}
      onClick={handleItemClick}
      as={Link} to="/master_resume.pdf" >
     
      <Icon name='file alternate outline' size='large'/>
      </Menu.Item>
      </Menu>
 );
=======
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



>>>>>>> parent of 706d7d0f (Merge branch 'master' of https://github.com/KimberlyModeste/KimberlyModest.Github)
}
export default MenuBar;