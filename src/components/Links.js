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
              background: {
                color: {
                  value: bgColor,
                },
              },
              fpsLimit: 120,
              interactivity: {
                detect_on: 'window',
                events: {
                  onClick: {
                    enable: false,
                    mode: "push",
                  },
                  onHover: {
                    enable: false,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40,
                  },
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },

              particles: {
                color: {
                  value: partColor,
                },
                links: {
                  color: partColor,
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: false,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 2,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: LinkSettings.isHoliday ? "images" : "",
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
                  random: true,
                  value: 30,
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