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

import p51 from '../resources/BoxGhost.mp4'
import p52 from '../resources/BoxLightBoxBetter.mp4'
import p53 from '../resources/LostSouls.mp4'
import p54 from '../resources/FireSprites.mp4'


function CSC470(){
	
    //width="100%;" height="100%;"

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
                    Then, we were tasked to try to build houses and then build something creative.
                </div>
                <Grid  columns={4}>
                    <Popup 
                        trigger={
                            <Grid.Column>
                                <img  width="100%;" height="100%;" src={p1b1} alt ="Project 1 Basic 1"/>
                            </Grid.Column>
                        }
                        content="This is just some random usage of textures and shapes."
                        position="top center"
                    />
                    <Popup 
                        trigger={
                            <Grid.Column>
                                <img width="100%;" height="100%;" src={p1c1} alt="Project 1 Creative 1" />
                            </Grid.Column>
                        }
                        content="Robots were one was one of the suggested ideas, so instead of one I made three and added fairies to challenge myself."
                        position="top center"
                    />
                    <Popup 
                        trigger={
                            <Grid.Column>
                                <img width="100%;" height="100%;" src={p1b2} alt="Project 1 Basic 2" />
                            </Grid.Column>
                        }
                        content="I belive this one actually had a boat that floated down the river."
                        position="top center"
                    />
                    <Popup 
                        trigger={
                            <Grid.Column>
                                <img width="100%;" height="100%;" src={p1c2} alt="Project 1 Creative 2" />
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
                    part was to draw sided shapes inside sided shapes that you can change with a menu. 
                </div>
                <Grid  columns={4}>
                    <Popup 
                        trigger={
                            <Grid.Column>
                                <img  width="100%;" height="100%;" src={p21} alt ="Project 2.1"/>
                            </Grid.Column>
                        }
                        content="This one was just making the dino have the same orientation as if its on a circle."
                        position="top center"
                    />
                    <Popup 
                        trigger={
                            <Grid.Column>
                                <img width="100%;" height="100%;" src={p22} alt="Project 2.2" />
                            </Grid.Column>
                        }
                        content="This one was more like a puzzle, I knew how to make circles so how do I draw this with just circles."
                        position="top center"
                    />
                    <Popup 
                        trigger={
                            <Grid.Column>
                                <img width="100%;" height="100%;" src={p231} alt="Project 2.3.1" />
                            </Grid.Column>
                        }
                        content="This one and the next one makes 'stickers', you can paste them all over the page. You can change them and the color in the submenu!"
                        position="top center"
                    />
                    <Popup 
                        trigger={
                            <Grid.Column>
                                <img width="100%;" height="100%;" src={p232} alt="Project 2.3.2" />
                            </Grid.Column>
                        }
                        content="Because I'm an overachiever (and like everything organized) you can even change the background to match your color choices better and clear the screen."
                        position="top center"
                    />
                </Grid>
            </div>

            <div className='section'>
                <div className="artSection">
                    Next project was all about making trees with math. I made a lot of trees, too many trees if you ask me, 
                    I'll only give you a basic summer tree and then three of the other creative seasons.
                </div>
                <Grid  columns={4}>
                    <Popup 
                        trigger={
                            <Grid.Column>
                                <img  width="100%;" height="100%;" src={p31} alt ="Project 3.1"/>
                            </Grid.Column>
                        }
                        content="This is the summer tree (technically its not the basic tree but it is in the black void of testing)."
                        position="top center"
                    />
                    <Popup 
                        trigger={
                            <Grid.Column>
                                <img width="100%;" height="100%;" src={p32} alt="Project 3.2" />
                            </Grid.Column>
                        }
                        content="This is the Spring Creative, I make 4 different versions."
                        position="top center"
                    />
                    <Popup 
                        trigger={
                            <Grid.Column>
                                <img width="100%;" height="100%;" src={p33} alt="Project 3.3" />
                            </Grid.Column>
                        }
                        content="This one is the fall creative."
                        position="top center"
                    />
                    <Popup 
                        trigger={
                            <Grid.Column>
                                <img width="100%;" height="100%;" src={p34} alt="Project 3.4" />
                            </Grid.Column>
                        }
                        content="This one's the winter creative."
                        position="top center"
                    />
                </Grid>
            </div>

            <div className='section'>
                <div className="artSection">
                    This project is one of the bigger projects that has to do with 3D objects and lighting. In the first part, 
                    we were supposed to create a 3D house and extras, while messing with the lighting and colors. The second 
                    part of this project is creating a tepot color hue where you can move the light and see how it works and 
                    rotate the teapots.
                </div>
                <Grid  columns={4}>
                    <Popup 
                        trigger={
                            <Grid.Column>
                                <img  width="100%;" height="100%;" src={p41} alt ="Project 4.1"/>
                            </Grid.Column>
                        }
                        content="This one is the basic 3D house, I also have this in different colors"
                        position="top center"
                    />
                    <Popup 
                        trigger={
                            <Grid.Column>
                                <img width="100%;" height="100%;" src={p42} alt="Project 4.2" />
                            </Grid.Column>
                        }
                        content="This is the Creative 3D house with shadows."
                        position="top center"
                    />
                    <Popup 
                        trigger={
                            <Grid.Column>
                                <video width="100%;" height="100%;" controls>
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
                                <video width="100%;" height="100%;" controls>
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

            <div className='section'>
                <div className="artSection">
                    This last project was using 3D objects in motion. After messing with shaders for a while and looking at the 
                    ambiguous instructions I decided to make something in 2D because its easier to bruteforce. The instructions 
                    had one line stating that it was supposed to be 3D so last minute I fixed up my previous iterations. 
                    I'll also add my 2D project that I tried to do.
                </div>
                <Grid  columns={4}>
                    <Popup 
                        trigger={
                            <Grid.Column>
                                <video width="100%;" height="100%;" controls>
                                    <source src={p51} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Grid.Column>
                        }
                        content="This one is just making boxes that spin at their own speed, I made it so that 
                        the camera can move to get a better angle. It has a box texture with a funny reference."
                        position="top center"
                    />
                    <Popup 
                        trigger={
                            <Grid.Column>
                                <video width="100%;" height="100%;" controls>
                                    <source src={p52} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Grid.Column>
                        }
                        content="This one runs the boxes around a light source and the boxes light bounces off each other 
                        (the less harsh version). Also, you can see the bones of the boxes at the end."
                        position="top center"
                    />
                    <Popup 
                        trigger={
                            <Grid.Column>
                                <video width="100%;" height="100%;" controls>
                                    <source src={p53} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Grid.Column>
                        }
                        content="This is one of the 2D projects that I created, it was only ever mostly finished. I had a few touches
                        left for this."
                        position="top center"
                    />
                    <Popup 
                        trigger={
                            <Grid.Column>
                                <video width="100%;" height="100%;" controls>
                                    <source src={p54} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Grid.Column>
                        }
                        content="This was only just being created when I had to switch gears but I think it still looks good."
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