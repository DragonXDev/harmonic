let notes;
let note1, note2, note3;
let halfsteps, frequencies;
let side1, side2, side3;
let angle1, angle2, angle3;

function setup() {
  createCanvas(600, 600);
  background(220);

  notes = prompt("Enter 3 Notes: ").split(" ");
  note1 = notes[0];
  note2 = notes[1];
  note3 = notes[2];

  halfsteps = [
    note_to_half_steps(note1),
    note_to_half_steps(note2),
    note_to_half_steps(note3),
  ];
  console.log("HS: ", halfsteps);

  frequencies = halfsteps.map(toFreq);
  console.log("FQ: ", frequencies);

  frequencies.sort();

  side1 = 1;
  side2 = frequencies[0] / frequencies[1];
  side3 = frequencies[0] / frequencies[2];
  console.log("Sides: ", side1, side2, side3);

  try {
    angle1 = angleFinder(side3, side1, side2);
    angle2 = angleFinder(side1, side3, side2);
    angle3 = angleFinder(side2, side3, side1);
  } catch (e) {
    console.log("A triangle cannot be made from these tonalities");
    noLoop(); // Stop drawing
  }
  console.log(angle1, angle2, angle3, side1, side2, side3);
}

function draw() {
  translate(200, 400);
  beginShape();
  vertex(0, 0);
  vertex(side1 * SCALE, 0);
  vertex(
    side1 * SCALE - side2 * SCALE * Math.cos(angle1),
    -side2 * SCALE * Math.sin(angle1)
  );
  endShape(CLOSE);
  noLoop(); // Draw once
}
