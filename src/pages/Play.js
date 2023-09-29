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
                    <p classname="gameDescText">These are some of the games and projectsthat I worked on. <br/>
                        Some of these are projects I worked on as a group and otheres
                        are ones that I worked on by myself.
                    </p>
                </div>
                <Grid centered columns={5}>
                    <Popup 
                        trigger={
                            <Grid.Column>
                                <PlayerCard Name="A Journey Home" Image={AJH} Url = "https://kimberlymodeste.github.io/AJourneyHomeJS"/>
                            </Grid.Column>
                        }
                        content="A text-based game that is based on the game The Oregon Trail"
                        position="top center"
                    />
                    <Popup 
                        trigger={
                            <Grid.Column>
                                <PlayerCard className="pcard" Name="Mooreland Properties" Image={MP} Url = "https://smoothstack35-dev-ed.develop.my.site.com/accountportal/s/"/>
                            </Grid.Column>
                        }
                        content="Mooreland Properties, the application for renting, buying and managing properties."
                        position="top center"
                    />
                    {/* <Popup 
                        trigger={
                            <Grid.Column>
                                <PlayerCard Name="Synesthesia" Image={Syn} Url = "https://kimberlymodeste.github.io/Synesthesia"/>
                            </Grid.Column>
                        }
                        content="A dialogue-based game that teaches players the basics on how to play the piano"
                        position="top center"
                    /> */}
                </Grid>
            </div>
            <div className="playDiv">
                <h1 className="artText">Fun Art</h1>
                <Grid centered columns={5}>
                    <Popup 
                        trigger={
                            <Grid.Column>
                                <PlayerCard Name="Computer Graphics Class" Image={cg}  href="/CSC470" />
                            </Grid.Column>
                        }
                        content="Mooreland Properties, the application for renting, buying and managing properties."
                        position="top center"
                    />
                </Grid>
            </div>
        </div>
    )

}

export default Play;