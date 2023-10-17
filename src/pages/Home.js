import React from 'react';
import Links from '../components/Links';
import headshot from '../resources/headshot.jpg';
import MenuBar from '../components/MenuBar';

function Home(){

return(
    <div> 
    <MenuBar color="black" inverted={false}/>
    <Links />
    <div className = "homediv" >
    
    <img src={headshot} alt='My face but in home' style={{padding: '10px', width: "20%", height: "20%", borderRadius: 400/ 2}} />
    <p>
        <div className='hometext'>
            <p style={{"overflow-wrap": "break-word","width": "45vw"}}>
            <strong>Hi! I'm Kimberly!</strong> 
            <br/><br/>
                I'm a computer scientist that likes making websites, games, drawing and learning languages! 
                I also like cryptography and solving puzzles! I have some of the games and class models
                in the play tab, so feel free to check them out!  
            <br/><br/>
                If the background makes your eyes hurt or makes it difficult to focus, you can turn it off
                or change the color in the settings tab.
            </p>
        </div>
    </p>
    </div>
    </div>
    )
}
export default Home