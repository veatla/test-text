import { PointMaterial, Points } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { random } from "maath";
import type * as THREE from "three";

const sphere = random.inSphere(new Float32Array(6000), { radius: 50 }) as Float32Array;

const Stars = () => {
  const ref = useRef<THREE.Points>(null);
  useFrame((_, delta) => {
    const el = ref.current;
    if (!el) return;
    el.rotation.x -= delta / 10;
    el.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial color="#ffa0e0" size={0.03} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
};

export default Stars;
