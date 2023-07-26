import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particleConfig from "./config/particle-config";

export default function Particlebg() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
       <Particles
      id="tsparticles"
      init={particlesInit}

      options={particleConfig}
    />
  );
}