import React from 'react';
import Link from '../components/Links';
import headshot from '../images/headshot.jpg';

function Home(){

return(
    <div className = "homediv" >
    <Link />
    <img src={headshot} alt='My face but in home' style={{ width: "250px", height: "250px", borderRadius: 400/ 2}} />
    <p>
        <br/>
        <h1 style={{color:'black'}}>Hi! I'm Kimberly!</h1>
        <h4>
            I'm a computer scientist that likes making websites, games, drawing and learning languages! <br/>
            I also like cryptography and solving puzzles! I have some of the games I worked on the games <br/>
            tab, so feel free to play them. 
        </h4>
    </p>
    </div>

)
}
export default Home