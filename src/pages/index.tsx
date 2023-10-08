import Scene from "~/components/Scene";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Home() {
  return (
    <div className="h-screen">
      <Canvas>
        <Scene />
        <axesHelper />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
