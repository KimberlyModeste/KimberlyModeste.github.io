import React from 'react';
import Links from '../components/Links';
import MenuBar from '../components/MenuBar';

import { Grid, Popup } from "semantic-ui-react";

import p1b1 from '../resources/1Basic.PNG'
import p1c1 from '../resources/1Creative.PNG'
import p1b2 from '../resources/2Basic.PNG'
import p1c2 from '../resources/2Creative.PNG'

import p21 from '../resources/P2.1.png'
import p22 from '../resources/P2.2.png'
import p231 from '../resources/P2.3.3.png'
import p232 from '../resources/P2.3.5.png'

import p31 from '../resources/CreativeTree.PNG'
import p32 from '../resources/CreativeSpring.PNG'
import p33 from '../resources/CreativeFall.PNG'
import p34 from '../resources/CreativeWinter.PNG'

import p41 from '../resources/P4B1.png'
import p42 from '../resources/P4C1.png'
import p43 from '../resources/P4P1.mp4'
import p44 from '../resources/P4P2.mp4'

function CSC470(){
	

return(
    <div> 
    <MenuBar color="black" inverted={false}/>
    <Links />
    <div className = "playDiv" >
        <div className='artText'>
            <div> <h1>Computer Graphics Course</h1>  </div>
            <br/>
            <div className='section'>
                <div className="artSection">
                    For the first project we were given some textures and samples to work with and then told to make something with it.
                    <br/>
                    Then, we were tasked to try to build houses and then build something creative.
                </div>
                <Grid  columns={4}>
                    <Popup 
                        trigger={
                            <Grid.Column>
                                <img  width="300px;" height="300px;" src={p1b1} alt ="Project 1 Basic 1"/>
                            </Grid.Column>
                        }
                        content="This is just some random usage of textures and shapes."
                        position="top center"
                    />
                    <Popup 
                        trigger={
                            <Grid.Column>
                                <img width="300px;" height="300px;" src={p1c1} alt="Project 1 Creative 1" />
                            </Grid.Column>
                        }
                        content="Robots were one was one of the suggested ideas, so instead of one I made three and added fairies to challenge myself."
                        position="top center"
                    />
                    <Popup 
                        trigger={
                            <Grid.Column>
                                <img width="300px;" height="300px;" src={p1b2} alt="Project 1 Basic 2" />
                            </Grid.Column>
                        }
                        content="I belive this one actually had a boat that floated down the river."
                        position="top center"
                    />
                    <Popup 
                        trigger={
                            <Grid.Column>
                                <img width="300px;" height="300px;" src={p1c2} alt="Project 1 Creative 2" />
                            </Grid.Column>
                        }
                        content="This one looked really nice, I managed to get the highlights of the sky on the buildings and trees. The stars were different every time the program ran."
                        position="top center"
                    />
                </Grid>
            </div>
            
            <div className='section'>
                <div className="artSection">
                    The next project was all about recreating images with math. The first part being just circles and the second
                    <br/>
                    part drawing sided shapes inside sided shapes that you can change with a menu. 
                </div>
                <Grid  columns={4}>
                    <Popup 
                        trigger={
                            <Grid.Column>
                                <img  width="300px;" height="300px;" src={p21} alt ="Project 2.1"/>
                            </Grid.Column>
                        }
                        content="This one was just making the dino have the same orientation while as if its on a circle."
                        position="top center"
                    />
                    <Popup 
                        trigger={
                            <Grid.Column>
                                <img width="300px;" height="300px;" src={p22} alt="Project 2.2" />
                            </Grid.Column>
                        }
                        content="This one was more like a puzzle, I knew how to make circles so how do I draw this with just circles."
                        position="top center"
                    />
                    <Popup 
                        trigger={
                            <Grid.Column>
                                <img width="300px;" height="300px;" src={p231} alt="Project 2.3.1" />
                            </Grid.Column>
                        }
                        content="This one and the next one makes 'stickers', you can paste them all over the page. You can change them and the color in the submenu!"
                        position="top center"
                    />
                    <Popup 
                        trigger={
                            <Grid.Column>
                                <img width="300px;" height="300px;" src={p232} alt="Project 2.3.2" />
                            </Grid.Column>
                        }
                        content="Because I'm an overachiever (and like everything organized) you can even change the background to match your color choices better anc clear the screen."
                        position="top center"
                    />
                </Grid>
            </div>

            <div className='section'>
                <div className="artSection">
                    Next project was all about making trees with math. I made a lot of trees, too many trees if you ask me,
                    <br/>
                    I'll only give you a basic summer tree and then three of the other creative seasons.
                </div>
                <Grid  columns={4}>
                    <Popup 
                        trigger={
                            <Grid.Column>
                                <img  width="300px;" height="300px;" src={p31} alt ="Project 3.1"/>
                            </Grid.Column>
                        }
                        content="This is the summer tree (technically its not the basic tree but it is in the black void of testing)."
                        position="top center"
                    />
                    <Popup 
                        trigger={
                            <Grid.Column>
                                <img width="300px;" height="300px;" src={p32} alt="Project 3.2" />
                            </Grid.Column>
                        }
                        content="This is the Spring Creative, I make 4 different versions."
                        position="top center"
                    />
                    <Popup 
                        trigger={
                            <Grid.Column>
                                <img width="300px;" height="300px;" src={p33} alt="Project 3.3" />
                            </Grid.Column>
                        }
                        content="This one is the fall creative."
                        position="top center"
                    />
                    <Popup 
                        trigger={
                            <Grid.Column>
                                <img width="300px;" height="300px;" src={p34} alt="Project 3.4" />
                            </Grid.Column>
                        }
                        content="This one's the winter creative."
                        position="top center"
                    />
                </Grid>
            </div>

            <div className='section'>
                <div className="artSection">
                    This project is one of the bigger projects that has to do with 3d objects and lighting. In the first part,
                    <br/>
                    we were supposed to create a 3D house and extras, while messing with the lighting and colors. The second 
                    <br/>
                    part of this project is creating a tepot color hue where you can move the light and see how it works and 
                    <br/>
                    rotate the teapots.
                </div>
                <Grid  columns={4}>
                    <Popup 
                        trigger={
                            <Grid.Column>
                                <img  width="300px;" height="300px;" src={p41} alt ="Project 4.1"/>
                            </Grid.Column>
                        }
                        content="This one is the basic 3D house, I also have this in different colors"
                        position="top center"
                    />
                    <Popup 
                        trigger={
                            <Grid.Column>
                                <img width="300px;" height="300px;" src={p42} alt="Project 4.2" />
                            </Grid.Column>
                        }
                        content="This is the Creative 3D house with shadows."
                        position="top center"
                    />
                    <Popup 
                        trigger={
                            <Grid.Column>
                                <video width="300" height="300" controls>
                                    <source src={p43} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Grid.Column>
                        }
                        content="This one was fun because you have to rotate the light around the teapot when pressing one direction, 
                        so you have to change the direction to be negative at some point."
                        position="top center"
                    />
                    <Popup 
                        trigger={
                            <Grid.Column>
                                <video width="300" height="300" controls>
                                    <source src={p44} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Grid.Column>
                        }
                        content="This one's is the spinning pots."
                        position="top center"
                    />
                </Grid>
            </div>
        </div>
    
    </div>
    </div>
    )
}
export default CSC470