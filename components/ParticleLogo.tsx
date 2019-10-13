import Particles from "react-particles-js";

interface ParticleLogoProps {
  width?: string;
}

function ParticleLogo(props: ParticleLogoProps) {
  return (
    <Particles
      width={props.width}
      height="500px"
      params={{
        fps_limit: 28,
        particles: {
          number: {
            value: 200,
            density: {
              enable: false
            }
          },
          line_linked: {
            enable: true,
            distance: 30,
            color: "#333",
            opacity: 0.6
          },
          move: {
            speed: 1
          },
          opacity: {
            anim: {
              enable: true,
              opacity_min: 0.05,
              speed: 2,
              sync: false
            },
            value: 0.4
          },
          color: {
            value: "#000"
          }
        },
        polygon: {
          enable: true,
          scale: 1.5,
          type: "inline",
          move: {
            radius: 30
          },
          url: "/static/d.svg",
          inline: {
            arrangement: "equidistant"
          },
          draw: {
            enable: false
          }
        },
        retina_detect: false,
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "bubble"
            }
          },
          modes: {
            bubble: {
              size: 4,
              distance: 40
            }
          }
        }
      }}
    />
  );
}

export default ParticleLogo;
