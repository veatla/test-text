import { Canvas as TreeCanvas } from "@react-three/fiber";
import Stars from "./ui/Stars";
import Cloud from "./ui/Cloud";
import { Suspense } from "react";
import { TrackballControls } from "@react-three/drei";

const Canvas = () => {
  return (
    <TreeCanvas  className="canvas" dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
      <fog attach="fog" args={["#202025", 0, 80]} />

      <Stars />
      <Suspense fallback={null}>
        <group rotation={[10, 10.5, 10]}>
          <Cloud />
        </group>
      </Suspense>
      <TrackballControls noZoom />
    </TreeCanvas>
  );
};

export default Canvas;
