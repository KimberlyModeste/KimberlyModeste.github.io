import React from "react";
import Links from '../components/Links';
import { Grid, Popup } from "semantic-ui-react";

import MenuBar from "../components/MenuBar";
import PlayerCard from "../components/PlayerCard";

import AJH from '../resources/AJourneyHome.jpg'
import MP from '../resources/MoorelandLogo.png'
import Syn from '../resources/mainScreen.png'
import cg from '../resources/ComputerGraphics.png'

function Play(){
    
    return(
        <div >
            <MenuBar color="black" inverted={false}/>
            <Links />
            <div className="playDiv">
                <div className="gamesText">
                    <h1>Projects</h1>
                    <p className="gameDescText">
                        These are some of the games and projects that I worked on.
                        Some of these are projects I worked on as a group and others
                        are ones that I worked on by myself.
                    </p>
                </div>
                <Grid centered columns={5}>
                    <Popup 
                        trigger={
                            <Grid.Column>
                                <PlayerCard Name="A Journey Home" Image={AJH} target="_blank" Url="https://kimberlymodeste.github.io/AJourneyHomeJS"/>
                            </Grid.Column>
                        }
                        content="A text-based game that is based on the game The Oregon Trail"
                        position="top center"
                    />
                    <Popup 
                        trigger={
                            <Grid.Column>
                                <PlayerCard Name="Mooreland Properties" Image={MP} target="_blank" Url="https://smoothstack35-dev-ed.develop.my.site.com/accountportal/s/"/>
                            </Grid.Column>
                        }
                        content="Mooreland Properties: The application for renting, buying and managing properties"
                        position="top center"
                    />
                    <Popup 
                        trigger={
                            <Grid.Column>
                                <PlayerCard Name="Synesthesia" Image={Syn} target="_blank" Url="https://kimberlymodeste.github.io/Synesthesia/Build/WebBuild/index.html"/>
                            </Grid.Column>
                        }
                        content="A dialogue-based game that teaches players the basics on how to play the piano"
                        position="top center"
                    />
                </Grid>
            </div>
            <div className="playDiv">
            <div className="artText">
                    <h1>Fun Art</h1>
                    <p className="gameDescText">
                        So far this I only have random images I created in my computer 
                        graphics class. Maybe in the future I'll put some behind the
                        scenes game graphics or pictures that I drew. We'll See. 
                    </p>
                </div>
                {/* <h1 className="artText">Fun Art</h1> */}
                <Grid centered columns={5}>
                    <Popup 
                        trigger={
                            <Grid.Column>
                                <PlayerCard Name="Computer Graphics Class" Image={cg}  Url="#/play/CSC470" />
                            </Grid.Column>
                        }
                        content="This is most of the graphics that I made in my Computer Graphics Class"
                        position="top center"
                    />
                </Grid>
            </div>
        </div>
    )

}

export default Play;