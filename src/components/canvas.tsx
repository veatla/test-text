import { Canvas as TreeCanvas } from "@react-three/fiber";
import Stars from "./ui/Stars";

const Canvas = () => {
  return (
    <TreeCanvas camera={{ position: [0, 0, 1] }}>
      <Stars />
    </TreeCanvas>
  );
};

export default Canvas;
