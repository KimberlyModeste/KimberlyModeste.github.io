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
    
    <img src={headshot} alt='My face but in home' style={{padding: '10px', width: "150px", height: "150px", borderRadius: 400/ 2}} />
    <p>
        <div className='hometext'>
            <strong>Hi! I'm Kimberly!</strong> 
            <br/><br/>
                I'm a computer scientist that likes making websites, games, drawing and learning languages! 
                I also like cryptography and solving puzzles! I have some of the games and class modelings 
                in the play tab, so feel free to check them out.  
        </div>
        {/* <h1 style={{color:'black'}}>Hi! I'm Kimberly!</h1> */}
        {/* <h4>
            I'm a computer scientist that likes making websites, games, drawing and learning languages! <br/>
            I also like cryptography and solving puzzles! I have some of the games I worked on the games <br/>
            tab, so feel free to play them. 
        </h4> */}
    </p>
    </div>
    </div>
    )
}
export default Home