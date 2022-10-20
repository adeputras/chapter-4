// Callback

// const Greeting = (nama) => {
//   console.log('Hallo', nama);
// };
// // Greeting('ade')
// const displayWelcomeGreeting = (name, callback) => {
//   const welcomeGreeting = `${name}, Selamat Datang`;
//   callback(welcomeGreeting);
// };
// // displayWelcomeGreeting('eko', Greeting);
// displayWelcomeGreeting('eko', (nama) => console.log('Hallo', nama));

// looping array Javascript default function

const cars = [
  {
    name: 'Mazda 3',
    transmission: 'Manual',
  },
  {
    name: 'Ford Impala',
    transmission: 'Automatic',
  },
  {
    name: 'Honda',
    transmission: 'Manual',
  },
];

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }
// for (const key in cars) {
//   const value = cars[key];
//   console.log(value);
// }
// for (const value of cars) {
//   console.log(value);
// }
// cars.forEach(car => console.log(car));
// cars.map(car => console.log(car));


// asynchronous
// console.log('mulai')
// setTimeout(() => {
//   console.log('result')
// }, 2000);
// console.log('selesai')

//synchrnous
console.log('mulai')
for(let i = 0; i < cars.length; i++) {
    for(let a = 0; a < 1000000000; a++) {
      const b = ""
    }
  console.log(cars[i])
}
console.log('selesai')