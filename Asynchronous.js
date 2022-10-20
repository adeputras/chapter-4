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
//   for(let i = 0; i < cars.length; i++) {
//   console.log(cars[i])
// }
// }, 2000);
// console.log('selesai')

//synchrnous
// console.log('mulai')
// for(let i = 0; i < cars.length; i++) {
//     for(let a = 0; a < 2000000000; a++) {
//       const b = ""
//     }
//   console.log(cars[i])
// }
// console.log('selesai')


// merubah fungsi jadi asyncronous
// console.log('mulai');
// const getData = () => {
//   fetch('https://bootcamp-rent-cars.herokuapp.com/customer/v2/car')
//     .then((response) => response.json())
//     .then((data) => {
//     console.log(data.cars)
//     })
//     .catch((error) => console.log(error));
// };
// getData();
// console.log('selesai');

// fething api with callback
// console.log('mulai');

// const getData = (callback) => {
//   fetch('https://bootcamp-rent-cars.herokuapp.com/customer/v2/car')
//     .then((response) => response.json())
//     .then((data) => {
//       callback(data)
//     })
//     .catch((error) => console.log(error));
// };

// const callbackFunction = (data) => {
//   console.log('callback data', data)

// }

// getData(callbackFunction);

// console.log('selesai');


// callback hell
// firstFunction(args, () => {
//   secondFunction(args, () => {
//     thirdFunction(args, () => {
//       // dan seterusnya...
//     });
//   });
// });

// callback hell
// getUser(1, (user) => {
//   console.log('User', user);
//   getRepositories(user.githubUsername, (repos) => {
//     console.log(repos);
//     getCommits(repos[0], (commits) => {
//       console.log(commits);
//       // Callback Hell ("-_-)
//     });
//   });
// });


//Promises
const getUser = (id) => {
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
      console.log("Reading from a database....");
      resolve({ id: id, githubUsername: "jerrycode06" });
      reject(new Error("Error"));
    // }, 1000);
  });
};

const getRepositories = (username) => {
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
      console.log(`Extracting Repositories for ${username}....`);
      resolve(["repo1", "repo2", "repo3"]);
      reject(new Error("Error"));
    // }, 500);
  });
};

const getCommits = (repo) => {
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
      console.log("Extracting Commits for " + repo + "....");
      resolve(["commits"]);
      reject(new Error("Error"));
    // }, 2000);
  });
};


// getUser(1)
//   .then((user) => getRepositories(user.githubUsername))
//   .then((repos) => getCommits(repos[0]))
//   .then((commits) => console.log("Commits", commits))
//   .catch((err) => console.log("Error: ", err.message));

  // Async- await approach
const displayCommits = async () => {
  try {
    const user = await getUser(1);
    const repos = await getRepositories(user.githubUsername);
    const commits = await getCommits(repos[0]);
    console.log(commits);
  } catch (err) {
    console.log("Error: ", err.message);
  }
};

displayCommits();