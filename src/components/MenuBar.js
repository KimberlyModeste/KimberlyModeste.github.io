import React, { useState, useEffect } from 'react'
import { Menu, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import '../App.css'

let {LinkSettings}  = require('../modules/modSettings')

const MenuBar = (props) => {

    const pathname = window.location.hash;
    const [width, setWidth] = useState(window.innerWidth);

    let path = pathname.split('/').length > 1 ? pathname.split('/')[1] === '' ? 'home' : pathname.split('/')[1] : 'home'

    const handleItemClick = (e, { name }) => setActiveItem(name);
    const [activeItem, setActiveItem] = useState(path);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    function shadeColor(color, percent) {

        var R = parseInt(color.substring(1,3),16);
        var G = parseInt(color.substring(3,5),16);
        var B = parseInt(color.substring(5,7),16);
    
        R = parseInt(R * (100 + percent) / 100);
        G = parseInt(G * (100 + percent) / 100);
        B = parseInt(B * (100 + percent) / 100);
    
        R = (R<255)?R:255;  
        G = (G<255)?G:255;  
        B = (B<255)?B:255;  
    
        R = Math.round(R)
        G = Math.round(G)
        B = Math.round(B)
    
        var RR = ((R.toString(16).length===1)?"0"+R.toString(16):R.toString(16));
        var GG = ((G.toString(16).length===1)?"0"+G.toString(16):G.toString(16));
        var BB = ((B.toString(16).length===1)?"0"+B.toString(16):B.toString(16));
    
        return "#"+RR+GG+BB;
    }
    

    if(props.inverted)
    {
        let foot = document.getElementById('footer-container');
        foot.style.backgroundColor ="black"     
    }
    else
    {

        let foot = document.getElementById('footer-container');
        foot.style.backgroundColor = shadeColor(LinkSettings.particleColor, 30)
    }

    return (
        width > 590 ? //450?
            props.inverted?
            //If Bigger Width and Inverted
            <Menu pointing secondary inverted color="grey" size="large" >
                <Menu.Menu position="left">
                <Menu.Item name = "home"
                active={activeItem === 'home'}
                onClick={handleItemClick}
                as={Link} to="/" />
            
                <Menu.Item name = "play"
                active={activeItem === 'play'}
                onClick={handleItemClick}
                as={Link} to="/play">   
                <Icon name='gamepad' />
                    Play
                </Menu.Item>
            
                </Menu.Menu> 
                
                <p id='navbarNameInv' > 
                <Icon name='laptop' /> 
                <Icon name='language' /> 
                
                Kimberly's Portfolio
                <Icon name='image outline' />
                <Icon name='gamepad' />
                </p>

                <Menu.Menu position="right">
                <Menu.Item  name = "Github"
                href='https://github.com/KimberlyModeste'
                target='_blank'>
                <Icon name='github' size='large'/>
                </Menu.Item>

                <Menu.Item 
                name = "LinkedIn"
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
                <Menu.Item name = "settings"
                active={activeItem === 'settings'}
                onClick={handleItemClick}
                as={Link} to="/settings" >
                
                <Icon name='cog' size='large'/>
                </Menu.Item>
                </Menu.Menu>
            </Menu>
                :
            //If Bigger Width and not Inverted
            <Menu className='fullNavBar' pointing secondary color={props.inverted? "grey" : ""} size="large" >
                <Menu.Menu position="left">
                <Menu.Item name = "home"
                active={activeItem === 'home'}
                onClick={handleItemClick}
                as={Link} to="/" />
                
                <Menu.Item name = "play"
                active={activeItem === 'play'}
                onClick={handleItemClick}
                as={Link} to="/play">   
                <Icon name='gamepad' />
                    Play
                </Menu.Item>
                
                </Menu.Menu>
                
                <Menu.Menu position="right">
                <p id='navbarName' > 
                <Icon name='laptop'  color={props.inverted? props.color : "white"} /> 
                <Icon name='language'  color={props.inverted? props.color : "white"} /> 
                
                Kimberly's Portfolio
                <Icon name='image outline'    color={props.inverted? props.color : "white"}/>
                <Icon name='gamepad'  color={props.inverted? props.color : "white"} />
                </p>
                </Menu.Menu>

                <Menu.Menu position="right">
                    <Menu.Item  name = "Github"
                    href='https://github.com/KimberlyModeste'
                    target='_blank'>
                    <Icon name='github' size='large'/>
                    </Menu.Item>
                    
                    <Menu.Item 
                    name = "LinkedIn"
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

                    <Menu.Item name = "settings"
                    active={activeItem === 'settings'}
                    onClick={handleItemClick}
                    as={Link} to="/settings" >
                    
                    <Icon name='cog' size='large'/>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        :
            props.inverted?
            //If Smaller Width and Inverted
            <Menu className='fullNavBar' pointing secondary inverted color="grey" size="large" >
                <Menu.Menu position="left">
                <Menu.Item 
                    name = "home"
                    active={activeItem === 'home'}
                    onClick={handleItemClick}
                    as={Link} to="/" >
                    <Icon name='home'/>
                </Menu.Item>
                
                <Menu.Item 
                    name = "play"
                    active={activeItem === 'play'}
                    onClick={handleItemClick}
                    as={Link} to="/play">   
                    <Icon name='gamepad' />
                </Menu.Item>
                
                </Menu.Menu>

                <Menu.Menu position="right">
                <Menu.Item  name = "Github"
                href='https://github.com/KimberlyModeste'
                target='_blank'>
                <Icon name='github'/>
                </Menu.Item>

                <Menu.Item 
                name = "LinkedIn"
                href='https://www.linkedin.com/in/kimberly-modeste1'
                target='_blank'>
                <Icon name='linkedin'/>
                </Menu.Item>
            
                <Menu.Item name = "master_resume"
                active={activeItem === 'master_resume'}
                onClick={handleItemClick}
                as={Link} to="/master_resume.pdf" >

                <Icon name='file alternate outline'/>
                </Menu.Item>
                <Menu.Item name = "settings"
                active={activeItem === 'settings'}
                onClick={handleItemClick}
                as={Link} to="/settings" >
                
                <Icon name='cog'/>
                </Menu.Item>
                </Menu.Menu>
            </Menu>
                :
            //If Smaller Width and not Inverted
            <Menu className='fullNavBar' pointing secondary color={props.inverted? "grey" : ""} size="large" >
                <Menu.Menu position="left">
                <Menu.Item 
                    name = "home"
                    active={activeItem === 'home'}
                    onClick={handleItemClick}
                    as={Link} to="/" >
                    <Icon name='home'/>
                </Menu.Item>
                
                <Menu.Item 
                    name = "play"
                    active={activeItem === 'play'}
                    onClick={handleItemClick}
                    as={Link} to="/play">   
                    <Icon name='gamepad'/>
                </Menu.Item>
                
                </Menu.Menu>

                <Menu.Menu position="right">
                    <Menu.Item  name = "Github"
                    href='https://github.com/KimberlyModeste'
                    target='_blank'>
                    <Icon name='github' />
                    </Menu.Item>
                    
                    <Menu.Item 
                    name = "LinkedIn"
                    href='https://www.linkedin.com/in/kimberly-modeste1'
                    target='_blank'>
                    <Icon name='linkedin'/>
                    </Menu.Item>
                    
                    <Menu.Item name = "master_resume"
                    active={activeItem === 'master_resume'}
                    onClick={handleItemClick}
                    as={Link} to="/master_resume.pdf" >
                    
                    <Icon name='file alternate outline' />
                    </Menu.Item>

                    <Menu.Item name = "settings"
                    active={activeItem === 'settings'}
                    onClick={handleItemClick}
                    as={Link} to="/settings" >
                    
                    <Icon name='cog' />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
    );
    
}
export default MenuBar;