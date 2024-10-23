import Glados from "@/components/models/Glados";
import { Canvas } from "@react-three/fiber";
import { Fragment, Suspense } from "react";
import { useHomePageLogic } from "./hook";

export const Home = () => {
  const { camera } = useHomePageLogic();

  return (
    <Fragment>
      <Canvas
        style={{ position: "absolute", zIndex: -1 }}
        className="inset-0"
        camera={camera}
      >
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Glados
            scale={[0.001, 0.001, 0.001]}
            position={[4.8, 26.01, -37.6]}
            rotation={[-0.3, 2.7, 0]}
          />
        </Suspense>
      </Canvas>
    </Fragment>
  );
};
