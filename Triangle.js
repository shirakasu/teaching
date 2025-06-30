let getTriangle = function (base, height) {
  return base * height / 2;
};

let BASE = 10;
let HEIGHT = 20;

console.log('三角形の面積は' + getTriangle(BASE, HEIGHT));

let getTriangle_arrow = (base, height) => {
  return base * height / 2;
};

console.log('三角形の面積は' + getTriangle_arrow(BASE, HEIGHT));
