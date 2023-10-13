import React from "react";
import Particles from "react-tsparticles";
let {LinkSettings}  = require('../modules/modSettings')

let bgColor = LinkSettings.backgroundColor
let partColor = LinkSettings.particleColor
let isParticles = LinkSettings.particlesOn

const Link = (props) => {

  function changeColors(){
    if(props.props){
      let temp = props.props
      console.log("Props.props", props.props)

      console.log("Links Here")
      console.log("is particles on", isParticles)
      console.log("props particles", temp.particlesOn)
      // console.log("bgColor", bgColor)
      // console.log("props.backgroundColor", temp.backgroundColor)
      // // console.log("props.particleColor", props.props.particleColor)
      // console.log("partColor", partColor)
      // console.log(props)
      // console.log("Are we going in?",!(bgColor === props.props.backgroundColor))
      if(!(bgColor === temp.backgroundColor))
      {
        bgColor = temp.backgroundColor
        // console.log("Links bgcolor here", bgColor)
        // // bgColor = LinkSettings.backgroundColor
        // // props.props.backgroundColor = bgColor
        // console.log("did")
        // // updateState()
      }
      if(!(isParticles === temp.particlesOn))
      {
        isParticles = temp.particlesOn
        console.log("did")
        console.log("isParticles", isParticles)
      }
    }
  }

  
  changeColors()
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
                  type: "circle",
                },
                size: {
                  random: true,
                  value: 5,
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