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
    else if(today.getMonth() === 11 && today.getDate() < 31)
    {
      thisHoliday = "christmas"
    }
    else if((today.getMonth() === 11 && today.getDate() === 31) ||(today.getMonth() === 0 && today.getDate() <= 2 ))//((today.getMonth() === 11 && today.getDate() < 31) ||(today.getMonth() === 0 && today.getDate() <= 2 )) || today.getMonth() === 6 )
    {
      thisHoliday = "new years"
    }
    else if(today.getMonth() === 6 && today.getDate() < 8)
    {
      thisHoliday = "foj"
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
                value: bgColor
              },
            },
            detectRetina: true,
            emitters: {
              direction: ["new years", "foj"].includes(thisHoliday) ? "top" : ["thanksgiving", "christmas"].includes(thisHoliday) ? "bottom" :"none",
            
              life: {
                count: 0,
                duration: 0.1,
                delay: 0.1
              },
              rate: {
                delay: 0.06,
                quantity: ["new years"].includes(thisHoliday) ? 1 : 0
              },
              size: {
                width: 100,
                height: 0
              },
              position: {
                y: 100,
                x: 50
              }
            },
            fpsLimit: 120,
            fullScreen: {
              enable: true                
            },
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
              collisions: {
                enable: false,
              },
              color: {
                value: thisHoliday === "christmas" ? "#FFF" :partColor,
              },
              destroy: {
                mode: ["new years", "foj"].includes(thisHoliday) ? "split" : "none",
                split: {
                  count: 1,
                  factor: { value: 1 / 3 },
                  rate: {
                    value: 75
                  },
                  particles: {
                    color: {
                      value: thisHoliday === "new years" ? ["#e8b923", "#ffffff", partColor] : ["#B42033", "#CECECE", "#FEFEFE", "#3C3B6E"] 
                    },
                    stroke: {
                      width: 0
                    },
                    number: {
                      value: 0
                    },
                    collisions: {
                      enable: false
                    },
                    opacity: {
                      value: 1,
                      animation: {
                        enable: true,
                        speed: 0.6,
                        minimumValue: 0.1,
                        sync: false,
                        startValue: "max",
                        destroy: "min"
                      }
                    },
                    shape: {
                      type: "circle"
                    },
                    size: {
                      value: 1,
                      animation: {
                        enable: false
                      }
                    },
                    life: {
                      count: 1,
                      duration: {
                        value: {
                          min: 1,
                          max: 2
                        }
                      }
                    },
                    move: {
                      enable: true,
                      gravity: {
                        enable: true,
                        inverse: false,
                        acceleration: 2
                      },
                      speed: 2,
                      direction: "none",
                      random: true,
                      straight: false,
                      outMode: "destroy"
                    }
                  }
                }
              },
              life: {
                count: ["new years", "foj"].includes(thisHoliday) ? 1 : 0
              },
              links: {
                color: partColor,
                distance: 150,
                enable: !["new years", "foj", "thanksgiving", "christmas"].includes(thisHoliday),
                opacity: 0.5,
                width: 1,
              },
              move: {
                enable: true,
                angle:{
                  offset: 0,
                  value: ["new years","thanksgiving", "christmas"].includes(thisHoliday) ? 90 : 0
                },
                direction: ["thanksgiving", "christmas"].includes(thisHoliday) ? "bottom" :"none",
                gravity: {
                  acceleration: ["new years", "foj"].includes(thisHoliday) ? 15 : thisHoliday === "christmas" ? 9.81 : 0,
                  enable: ["new years", "foj"].includes(thisHoliday),
                  inverse: ["new years", "foj"].includes(thisHoliday),
                  maxSpeed: ["new years", "foj"].includes(thisHoliday) ? 100 : 0
                },
                outModes: {
                  default: ["new years", "foj"].includes(thisHoliday) ? "destroy" : ["thanksgiving", "christmas"].includes(thisHoliday) ? "out" : "bounce",
                  top: ["new years", "foj"].includes(thisHoliday) ? "none" : ["thanksgiving", "christmas"].includes(thisHoliday) ? "out" : "bounce",
                },
                speed: ["new years", "foj"].includes(thisHoliday) ? { min: 10, max: 20 } : thisHoliday === "thanksgiving" ? {min: 1, max: 2.5} : 2,
                trail: {
                  fillColor: bgColor,
                  enable: ["new years", "foj"].includes(thisHoliday),
                  length: 5
                }
              },
              number: {
                density: {
                  enable: !["new years", "foj"].includes(thisHoliday),
                  width: thisHoliday === "christmas" ? 1920 : 0,
                  height: thisHoliday === "christmas" ? 1080 : 0,
                },
                limit: 0,
                value: ["new years", "foj"].includes(thisHoliday) ? 0 : thisHoliday === "christmas" ? 450 : 80,
              },
              opacity: {
                random: {
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
              rotate: {
                path: ["new years", "foj"].includes(thisHoliday)
              },
              shape: {
                type: ["new years", "foj"].includes(thisHoliday) ? "line" :
                thisHoliday === "christmas" ? "circle" :
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
                value: { 
                  min: ["new years", "foj"].includes(thisHoliday) ? 0.1 : thisHoliday === "christmas" ? 1 : 15,
                  max: ["new years", "foj"].includes(thisHoliday) ? 50 : thisHoliday === "christmas" ? 10 : 30,
                },
                animation: {
                  enable: ["new years", "foj"].includes(thisHoliday),
                  sync: ["new years", "foj"].includes(thisHoliday),
                  speed: 90,
                  startValue: "max",
                  destroy: "min"
                }
              },
              stroke: {
                color: {
                  value: "#303030"
                },
                width: 1,
                opacity: 0.1
              },
            },
              
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