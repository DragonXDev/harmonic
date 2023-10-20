import React from "react";
import Sketch from "react-p5";

export default function GenerateTriangle({ sides }) {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(800, 800).parent(canvasParentRef);
    p5.angleMode(p5.RADIANS);
  };

  const draw = (p5) => {
    p5.background(0);

    if (sides && sides.length === 3) {
      let [a, b, c] = sides;

      if (a + b <= c || a + c <= b || b + c <= a) {
        console.error("Invalid side lengths for a triangle.");
        return;
      }

      const v1 = { x: 0, y: 0 };
      const v2 = { x: a, y: 0 };

      let cosA = (b * b + c * c - a * a) / (2 * b * c);
      let sinA = Math.sqrt(1 - cosA * cosA);
      const v3 = {
        x: c * cosA,
        y: -c * sinA,
      };

      // Compute the centroid of the triangle
      const centroid = {
        x: (v1.x + v2.x + v3.x) / 3,
        y: (v1.y + v2.y + v3.y) / 3,
      };

      // Determine the shifts to center the triangle
      const dx = p5.width / 2 - centroid.x;
      const dy = p5.height / 2 - centroid.y;

      p5.beginShape();
      p5.vertex(v1.x + dx, v1.y + dy);
      p5.vertex(v2.x + dx, v2.y + dy);
      p5.vertex(v3.x + dx, v3.y + dy);
      p5.endShape(p5.CLOSE);
    }
  };

  return <Sketch setup={setup} draw={draw} />;
}
