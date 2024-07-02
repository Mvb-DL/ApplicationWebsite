import { lazy, Suspense, useEffect, useMemo, useState, useCallback } from "react";
import { loadSlim } from "@tsparticles/slim";

const Particles = lazy(() => import("@tsparticles/react"));

const BackgroundEffect = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initParticles = async () => {
      const { initParticlesEngine } = await import("@tsparticles/react");
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });
      setInit(true);
    };

    initParticles();
  }, []);

  const particlesLoaded = useCallback((container) => {}, []);

  const options = useMemo(() => ({
    background: {
      color: {
        value: "#202226",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: false,
          mode: "push",
        },
      },
      modes: {
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
        value: "#6225e6",
      },
      links: {
        color: "#6225e6",
        distance: 300,
        enable: true,
        opacity: 0.7,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1.1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 120,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  }), []);

  return (
    <div className="background-effect">
      {init && (
        <Suspense fallback={<div>Loading...</div>}>
          <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />
        </Suspense>
      )}
    </div>
  );
};

export default BackgroundEffect;
