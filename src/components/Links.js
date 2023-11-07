import React from "react";
import Particles from "react-tsparticles";

import pumpkin from "../resources/Pumpkin.svg"
import spider from  "../resources/spider.png"

import leaf1 from "../resources/leaves1.png"
import leaf2 from "../resources/leaves2.png"
import leaf3 from "../resources/leaves3.png"
import leaf4 from "../resources/leaves4.png"
import leaf5 from "../resources/leaves5.png"
import leaf6 from "../resources/leaves6.png"


let {LinkSettings}  = require('../modules/modSettings')

let bgColor = LinkSettings.backgroundColor
let partColor = LinkSettings.particleColor
let isParticles = LinkSettings.particlesOn
let thisHoliday = ""
let holidayImg = []



const Link = (props) => {

  function updateLinks(){
    if(props.props){
      let temp = props.props
      if(!(bgColor === temp.backgroundColor))
      {
        bgColor = temp.backgroundColor
      }
      if(!(partColor === temp.particleColor))
      {
        partColor = temp.particleColor
      }
      if(!(isParticles === temp.particlesOn))
      {
        isParticles = temp.particlesOn
      }
    }

    let today = new Date()
    let tg = new Date(today.getFullYear(), 10, 1)
    tg.setDate(tg.getDay() !== 4 ? (tg.getDate()+1 + ((8 - tg.getDate())% 7))+21 : tg.getDate()+21)


    if(today.getMonth() === 9 && today.getDate() <= 31)
    {
      thisHoliday = "halloween"
      holidayImg.push(pumpkin)
      holidayImg.push(spider)
    }
    else if(today.getMonth() === 10 && today.getDate() <= tg.getDate())
    {
      thisHoliday = "thanksgiving"
      
      holidayImg.push(leaf1)
      holidayImg.push(leaf2)
      holidayImg.push(leaf3)
      holidayImg.push(leaf4)
      holidayImg.push(leaf5)
      holidayImg.push(leaf6)
    }
    else if(today.getMonth() === 11)
    {
      thisHoliday = "christmas"
    }

  }

  
  
  updateLinks()
  const particlesInit = (main) => {
    // console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    // console.log(container);
  };
  if(isParticles)
  {
    return (
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              autoPlay: true,
              background: {
                color: {
                  value: bgColor,
                },
              },
              fpsLimit: 120,
              interactivity: {
                detectOn: 'window',
                events: {
                  onClick:{
                    enable: thisHoliday === "christmas",
                    mode:"repulse"
                  },
                },
              },

              particles: {
                color: {
                  value: thisHoliday === "christmas" ? "#FFF" :partColor,
                },
                move: {
                  angle:{
                    offset: 0,
                    value: thisHoliday === "christmas" ? 90 : 0
                  },
                  direction: thisHoliday === "christmas" ? "bottom" :"none",
                  drift: 0,
                  enable: true,
                  gravity:{
                    acceleration: thisHoliday === "christmas"? 9.81 : 0,
                    enable: false,
                    inverse: false,
                    maxSpeed: 50
                  },
                  outMode:thisHoliday === "christmas" ? "out" : "bounce",
                  random: false,
                  size: false,
                  straight: false,
                  speed: 2,
                  vibrate: false,
                  warp: false
                },
                number: {
                  density: {
                    enable: true,
                    width: thisHoliday === "christmas" ? 1920 : 0,
                    height: thisHoliday === "christmas" ? 1080 : 0,
                  },
                  limit: 0,
                  value: thisHoliday === "christmas" ? 450 : 80,
                },
                opacity: {
                  random:{
                    enable: thisHoliday === "christmas",
                    minimumValue: 0.1
                  },
                  value: thisHoliday === "christmas" ? 
                  {
                      min: 0.1,
                      max: 0.6
                  }
                  :
                  0.5,
                },

                links: {
                  color: partColor,
                  distance: 150,
                  enable: thisHoliday !== "christmas",
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: false,
                },
                
                shape: {
                  type:  thisHoliday === "christmas" ? "circle" :
                  LinkSettings.isHoliday ? "images" :  "",
                  images: 
                  thisHoliday === "halloween" ?
                  [
                    {
                      src: holidayImg[0],
                      width: 100,
                      height: 100,
                    },
                    {
                      src: holidayImg[1],
                      width: 100,
                      height: 100,
                    },
                  
                  ]
                  :
                  thisHoliday === "thanksgiving" ?
                  [ 
                    {
                      src: holidayImg[0],
                      width: 100,
                      height: 100,
                    },
                    {
                      src: holidayImg[1],
                      width: 100,
                      height: 100,
                    },
                    {
                      src: holidayImg[2],
                      width: 100,
                      height: 100,
                    },
                    {
                      src: holidayImg[3],
                      width: 100,
                      height: 100,
                    },
                    {
                      src: holidayImg[4],
                      width: 100,
                      height: 100,
                    },
                    {
                      src: holidayImg[5],
                      width: 100,
                      height: 100,
                    },
                  ]
                  :
                  []
                },
                size: {
                  value:{
                      min: thisHoliday === "christmas" ? 1 : 15,
                      max: thisHoliday === "christmas" ? 10 : 30
                  }
                },
              },
              detectRetina: false,
            }}
          />
        );
  }
  else{
    return (
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: bgColor,
            },
          }
        }}
      />
    );
  }

};

export default Link;