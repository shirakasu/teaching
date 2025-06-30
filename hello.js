let num = 100
const PI = 3.14
PI = 3.1415 // エラー発生

console.log("Hello World!")
console.log(num)
console.log(PI)

let x = 100;

if (x < 10) {
  console.log("This variable is smaller than 10.");
} else if (x >= 10 && x < 20) {
  console.log("This variable is larger than 10 and smaller than 20.");
} else {
  console.log("This variable is larger than 20.");
}

let weather = 'sunny';

switch(weather) {
  case 'sunny':
    console.log('It is sunny!');
    break;

  case 'cloudy':
    console.log('It is cloudy!');
    break;

  case 'rainy':
    console.log('It is rainy!');
    break;

  default:
    console.log('weather fetching now...');
    break;
}

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

let i = 1;
while (i <= 5) {
  console.log(i);
}


