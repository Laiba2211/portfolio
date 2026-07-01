import Particles from "@tsparticles/react";

export default function HeroParticles() {
  return (
    <Particles
      id="hero-particles"
      options={{
        fullScreen: false,
        particles: {
          number: {
            value: 50,
          },
          move: {
            enable: true,
          },
        },
      }}
      style={{
        position: "absolute",
        inset: 0,
      }}
    />
  );
}