import React from 'react';
import Link from '../components/Links';
import headshot from '../resources/headshot.jpg';
import MenuBar from '../components/MenuBar';

function Home(){

return(
    <div> 
    <MenuBar color="black" inverted={false}/>
    <Link />
    <div className = "homediv" >
    
    <img src={headshot} alt='My face but in home' style={{padding: '10px', width: "250px", height: "250px", borderRadius: 400/ 2}} />
    <p>
        <div className='hometext'>
            <strong>Hi! I'm Kimberly!</strong> 
            <br/><br/>
                I'm a computer scientist that likes making websites, games, drawing and learning languages! 
                I also like cryptography and solving puzzles! I have some of the games I worked on the games
                tab, so feel free to play them. 
        </div>
    </p>
    </div>
    </div>
    )
}
export default Home