import { Dodecahedron } from "@react-three/drei";
import { useSpring } from "@react-spring/three";

export const AnimatedDodecahedron = () => {
  const { x, y, rotationX, rotationZ } = useSpring({
    from: {
      x: -1,
      y: 1,
      rotationX: 0,
      rotationZ: 0,
    },
    to: [
      {
        x: 1,
        y: 1,
        delay: 500,
      },
      {
        x: -1,
        y: 0,
        rotationX: Math.PI,
        rotationZ: Math.PI,
        delay: 50,
      },
      {
        x: 1,
        y: 0,
        delay: 50,
      },
      {
        x: -1,
        y: -1,
        rotationX: Math.PI * 2,
        rotationZ: Math.PI * 2,
        delay: 50,
      },
      {
        x: 1,
        y: -1,
        delay: 50,
      },
      {
        x: -1,
        y: 1,
        rotationX: 0,
        rotationZ: 0,
        delay: 500,
      },
    ],
    config: {
      mass: 4,
      tension: 600,
      friction: 80,
    },
    loop: true,
    immediate: true,
  });
  return (
    <group position-x={-1} position-y={1}>
      <Dodecahedron>
        <meshStandardMaterial color="red" transparent opacity={0.6} />
      </Dodecahedron>
    </group>
  );
};
