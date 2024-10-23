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

      <section className="col-span-4 col-start-2 self-center">
        <h1 className="font-black text-6xl uppercase">
          Junte-se à Revolução Científica
        </h1>
        <h3 className="font-medium text-md text-gray-500">
          Participe da nossa missão de redefinir o futuro com tecnologias
          revolucionárias e experimentos de ponta.
        </h3>

        <p className="text-md mt-11 font-medium">
          Na Aperture Science, acreditamos que o impossível é apenas mais uma
          barreira a ser superada. Venha fazer parte de uma equipe dedicada à
          inovação, onde o próximo grande avanço depende da sua criatividade e
          coragem para testar o desconhecido.
        </p>
      </section>
    </Fragment>
  );
};
