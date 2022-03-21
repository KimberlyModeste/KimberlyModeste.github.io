import React from 'react';
import Link from '../components/Links';
<<<<<<< HEAD
import headshot from '../resources/headshot.jpg';
import MenuBar from '../components/MenuBar';
=======
import headshot from '../images/headshot.jpg';
>>>>>>> parent of 706d7d0f (Merge branch 'master' of https://github.com/KimberlyModeste/KimberlyModest.Github)

function Home(){

return(
<<<<<<< HEAD
    <div> <MenuBar color="black" inverted={false}/>
    <div className = "homediv" >
       
=======
    <div className = "homediv" >
>>>>>>> parent of 706d7d0f (Merge branch 'master' of https://github.com/KimberlyModeste/KimberlyModest.Github)
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
<<<<<<< HEAD
    </div>
=======

>>>>>>> parent of 706d7d0f (Merge branch 'master' of https://github.com/KimberlyModeste/KimberlyModest.Github)
)
}
export default Home