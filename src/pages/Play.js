import React from "react";
import Link from '../components/Links';
import { Grid } from "semantic-ui-react";

import MenuBar from "../components/MenuBar";
import PlayerCard from "../components/PlayerCard";

import AJH from '../resources/AJourneyHome.jpg'


function Play(){

    return(
        <div >
            <MenuBar color="black" inverted={false}/>
            <Link />
            <div className="playDiv">
                <h1 className="gamesText">Games</h1>
                <Grid centered columns={5}>
                    <Grid.Column>                        
                        <PlayerCard Name="A Journey Home" Image={AJH} Url = "https://kimberlymodeste.github.io/AJourneyHomeBasic"/>
                    </Grid.Column>
                </Grid>
            </div>
            <div className="playDiv">
                <h1 className="artText">Fun Art</h1>
                <Grid centered columns={5}>
                    <Grid.Column>                        
                        {/* <PlayerCard Name="A Journey Home" Image="" Url = "https://kimberlymodeste.github.io/AJourneyHomeBasic"/> */}
                    </Grid.Column>
                </Grid>
            </div>
        </div>
    )

}

export default Play;