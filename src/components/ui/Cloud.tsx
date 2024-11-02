import { useMemo } from "react";
import { Spherical, Vector3 } from "three";
import Word from "./Word";

const randomWord = () => {
  return Math.random() > .5 ? "NYAH" : "I LOVE YOU!"
}

function Cloud({ count = 8, radius = 20 }) {
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const temp: ([Vector3, string])[] = [];
    const spherical = new Spherical();

    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;

    for (let i = 1; i < count + 1; i++) {
      for (let j = 0; j < count; j++) {
        temp.push([
          new Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)),
          randomWord(),
        ]);
      }
    }
    return temp;
  }, [count, radius]);
  return words.map(([pos, word], index) => <Word key={index} position={pos} children={word} />);
}
export default Cloud;
