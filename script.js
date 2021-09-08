'use strcit';
/*
//LEC forEach()
const numbers = [20, 21, 22, 23, 34, 25, 26, 27];

numbers.forEach(function (num) {
  console.log(num);
});

// function printTriple(n) {
  console.log(n * 3);
}

numbers.forEach(printTriple);

numbers.forEach(function (num, idx) {
  console.log(idx, num);
});

const books = [
  {
    title: 'Secret Garden',
    authors: ['Frances Hodgson Burnett'],
    rating: 4.5,
  },
  {
    title: 'Spy School',
    authors: ['Stuart Gibbs'],
    rating: 4.21,
  },
  {
    title: 'Harry Potter',
    authors: ['J. K. Rowling'],
    rating: 4.36,
  },
];

console.log(books[0].title);

books.forEach(function (book) {
  console.log(book.title.toUpperCase());
});

for (let book of books) {
  console.log(book.title.toUpperCase());
}

for (let i = 0; i < books.length; i++) {
  console.log(books[i].title.toUpperCase());
}


//LEC 96 map()
const numbers = [20, 21, 22, 23, 34, 25, 26, 27];
const words = ['love', 'smile', 'hope', 'like'];

// numbers.map(function (num) {
//   console.log(num);
//   return num * 2;
// });

const double = numbers.map(function (num) {
  return num * 2;
});
console.log(double);

const numberDetail = numbers.map(function (n) {
  return {
    value: n,
    isEven: n % 2 === 0,
  };
});
console.log(numberDetail);

const double2 = [];
for (let num of numbers) {
  double2.push(num * 2);
}
console.log(double2);

const abbrevs = words.map(function (word) {
  return word.toUpperCase().split('').join('.');
});

console.log(abbrevs);
*/
/*
//LEC Arrow fucntion: implicit

// const square = n => {return n* n};
// const square = n => (n * n);
// const square = n => n * n;

const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const double1 = nums.map(function (n) {
  return n * 2;
});
console.log(double1);

const double2 = nums.map((n) => {
  return n * 2;
});

const double3 = nums.map((n) => n * 2);
console.log(double3); //[2, 4, 6, 8, 10, 12, 14, 16]

// const parityList = nums.map(function (n) {
//   if (n % 2 === 0) return 'even';
//   return 'odd';
// });

// const parityList = nums.map((n) => {
//   if (n % 2 === 0) return 'even';
//   return 'odd';
// });

const parityList = nums.map((n) => (n % 2 === 0 ? 'even' : 'odd'));
*/
/*
//LEC find
// const books = ['Secret Garden', 'Spy School', 'Harry Potter'];

// const book = books.find((book) => {
//   return book.includes('P');
// });
// console.log(book);

// const book2 = books.find((b) => b.indexOf('S') === 0); // S가 beginning of the string인 경우)

let movies = [
  'The Fatastic Mr.Fox',
  'Mr. and Mrs. Smith',
  'Mrs. Doubtfire',
  'Mr.Deeds',
];
// const movie = movies.map((m) => m.includes('Mrs'));
// console.log(movie);
// const movie = movies.find((m) => {
//   return m.includes('Mrs');
// });
// console.log(movie);
// const movie2 = movies.find((m) => m.indexOf('Mrs') === 0);
// console.log(movie2);

// const books = [
//   {
//     title: 'Secret Garden',
//     authors: ['Frances Hodgson Burnett'],
//     rating: 4.5,
//   },
//   {
//     title: 'Spy School',
//     authors: ['Stuart Gibbs'],
//     rating: 4.21,
//   },
//   {
//     title: 'Harry Potter',
//     authors: ['J. K. Rowling'],
//     rating: 4.36,
//   },
// ];

// const goodBook = books.find((b) => b.rating >= 4.3);
// console.log(goodBook);

// const rowlingBook = books.find((b) => b.authors.includes('J. K. Rowling'));
// console.log(rowlingBook);

const nums = [34, 23, 15, 56, 45, 68, 89];
const odd = nums.filter((n) => n % 2 === 1);
const bigNums = nums.filter((n) => n > 50);

const books = [
  {
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy'],
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays'],
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy'],
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy'],
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction'],
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy'],
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories'],
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic'],
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction'],
  },
];

const goodBooks = books.filter((b) => b.rating > 4.5);
const fantasyBooks = books.filter((b) => b.genres.includes('fantasy'));
console.log(fantasyBooks);
const shortForm = books.filter(
  (b) => b.genres.includes('essays') || b.genres.includes('short stories')
);

console.log(shortForm);

// const query = 'The';
// const results = books.filter((b) => {
//   const title = b.title.toLowerCase();
//   return title.includes(query.toLowerCase());
// });
// console.log(results);

const query = 'The';
const results = books.filter((b) =>
  b.title.toLowerCase().includes(query.toLowerCase())
);
console.log(results);

//LEC some & every (true or false)
const words = ['dog', 'dig', 'log', 'bag', 'wag'];
const all3Letters = words.every((word) => word.length === 3);
// const allEndInG = words.every((word) => word[word.length - 1] === 'g');
const allEndInG = words.every((word) => {
  const last = word.length - 1;
  return word[last] === 'g';
});

const someStartWithD = words.some((w) => w[0] === 'd');
console.log(someStartWithD);
const everyStartWithD = words.every((w) => w[0] === 'd');

const allGoodBooks = books.every((b) => b.rating > 3.8);
console.log(allGoodBooks);
const any2Authors = books.some((book) => book.authors.length === 2);
*/
/*
//LEC sort
const prices = [20, 50, 30, 10, 70];

prices.sort();

const ascSort = prices.sort((a, b) => a - b);
console.log(ascSort);
const descSort = prices.sort((a, b) => b - a);
console.log(descSort);
console.log(ascSort);
console.log(prices);
const ascSort2 = prices.slice().sort((a, b) => a - b);
console.log(ascSort2);

const books = [
  {
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy'],
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays'],
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy'],
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy'],
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction'],
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy'],
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories'],
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic'],
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction'],
  },
];
// lowest rating order
books.sort((a, b) => a.rating - b.rating);
console.log(books);
*/
/*
//LEC reduce intro summing an array
const nums = [3, 4, 5, 6, 7];
const product = nums.reduce((acc, curVal) => {
  return acc + curVal;
});
console.log(product);

// Finding Max Value
const grades = [93, 95, 45, 86, 59, 75];
// const maxGrade = grades.reduce((max, cur) => {
//   if (cur > max) return cur;
//   return max;
// });

const maxGrade = grades.reduce((accu, cur) => {
  return Math.max(accu, cur);
});
console.log(maxGrade);
const minGrade = grades.reduce((accu, cur) => {
  return Math.min(accu, cur);
});
console.log(minGrade);
*/
/*
//LEC Spread
const str = 'abcde';
console.log(str.split('')); //["a", "b", "c", "d", "e"]
console.log([...str]); //["a", "b", "c", "d", "e"]
console.log(str.slice()); //abcde

const nums = [9, 3, 2, 8];
const maxNum = Math.max(nums);
console.log(nums);
console.log(Math.max(...nums));
Math.max(...nums);
Math.max(9, 3, 2, 8);

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

[...num1, ...num2];

function giveFour(a, b, c, d) {
  console.log('a', a);
  console.log('b', b);
  console.log('c', c);
  console.log('d', d);
}
giveFour(5, 6, 7, 8);

const colors = ['red', 'orange', 'purple', 'pink'];
giveFour(colors);
giveFour(...colors);
*/
/*
//LEC 112 Spread in object literals
const feline = {
  legs: 4,
  family: 'Felidae',
};

const canine = {
  family: 'Caninae',
  furry: true,
  leg: 4,
};

const dog = {
  ...canine,
  isPet: true,
  adorable: true,
};

const houseCat = {
  ...feline,
  isGrumpy: true,
  personality: 'unpredictable',
};

const catDog = {
  ...canine,
  ...feline,
};
console.log(catDog);

//순서 상관 있음 마지막에 온 것으로 overrode 됨
const pet = {
  ...canine,
  leg: 3,
};

const catDogClone = {
  ...catDog,
};
console.log(catDogClone);

const colors1 = ['red', 'orange', 'purple', 'pink'];
const colors2 = ['green', 'black', 'yellow', 'white'];
const colors3 = [...colors1, ...colors2];
console.log(colors3);
*/

// const valueAt = (arr, i) => arr[Math.floor(i)];
// console.log(valueAt([1, 2, 3, 4], 6.535355314 / 2));
// valueAt([1, 2, 3, 4], 6.535355314 / 2);

// function valueAt(arr, i) {
//   return arr[Math.floor(i)];
// }
// valueAt([1, 2, 3, 4], 6.535355314 / 2);
// console.log();
// console.log(valueAt([1, 2, 3, 4], 6.535355314 / 2));

// valueAt([1, 2, 3, 4, 5, 6], 10 / 2);
// function valueAt(arr, i) {
//   console.log(arr, i);
//   console.log(arr.indexOf(10 / 2));
// }

// valueAt([1, 2, 3, 4, 5, 6], 10 / 2);

// function incrementItems(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] += 1;
//   }
//   return arr;
// }

// console.log(incrementItems([0, 1, 2, 3])); //1234
// incrementItems([0, 1, 2, 3]);

// function incrementItems(arr) {
//   for (let plusOne of arr) {
//     console.log(plusOne);
//   }
// }

// function integerBoolean(n) {
//   arr = [];
//   for (let i = 0; i < n.length; i++) {
//     n[i] == 0 ? (arr[i] = false) : (arr[i] = true);
//     console.log(n[i]);
//   }
//   return arr;
// }

// integerBoolean('100101');

// const integerBoolean = (n) => [...n].map((a) => a == 1);

// integerBoolean('100101');

// function ingegerBoolean() {

// }

// integerBoolean("100101") ➞ [true, false, false, true, false, true]

// integerBoolean("10") ➞ [true, false]

// integerBoolean("001") ➞ [false, false, true]

/*
function integerBoolean(n) {
  let result = [];

  for (let i = 0; i < n.length; ++i) result.push(n[i] === '1' ? true : false);

  return result;
}
console.log(integerBoolean('100101'));
integerBoolean('100101');

var i = 0;
while (i < 10) {
  document.write(`${i + 1} Coding everybody <br> `);
  i += 1;
}

for (let i = 0; i < 10; i++) {
  document.write(`${i + 1} Coding everybody <br> `);
}

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  document.write(`${i + 1} Coding everybody <br> `);
}

function isLastCharacterN(word) {
  return word[word.length - 1] === 'n';
}

console.log(isLastCharacterN('Aiden'));
isLastCharacterN('Aiden');

//edabit
// function fiftyThirtyTwenty(ati) {
//   return { Needs: ati * 0.5, Wants: ati * 0.3, Savings: ati * 0.2 };
// }

// fiftyThirtyTwenty(10000);

function fiftyThirtyTwenty(ati) {
  Moneyneeded = Object.create({});
  Moneyneeded.Needs = (ati * 50) / 100;
  Moneyneeded.Wants = (ati * 30) / 100;
  Moneyneeded.Savings = (ati * 20) / 100;
  return Moneyneeded;
}
// fiftyThirtyTwenty(10000) ➞ { "Needs": 5000, "Wants": 3000, "Savings": 2000 }

// fiftyThirtyTwenty(50000) ➞ { "Needs": 25000, "Wants": 15000, "Savings": 10000 }

// fiftyThirtyTwenty(13450) ➞ { "Needs": 6725, "Wants": 4035, "Savings": 2690 }
*/

/*
//LEC Shorthand properties

// const reviews = [3, 5, 4, 1, 4.5];
// const max = Math.max(...reviews);
// const min = Math.min(...reviews);
// const sum = reviews.reduce((sum, r) => sum + r);
// const avg = sum / reviews.length;

// const stats = { min, max, sum, avg };
// console.log(stats);

// const getStats = (arr) => {
//   const max = Math.max(...arr);
//   const min = Math.min(...arr);
//   const sum = reviews.reduce((sum, r) => sum + r);
//   const avg = sum / reviews.length;

//   return {
//     max: max,
//     min: min,
//     sum: sum,
//     avg: avg,
//   };
// };

const getStats = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = reviews.reduce((sum, r) => sum + r);
  const avg = sum / reviews.length;

  return {
    max,
    min,
    sum,
    avg,
  };
};

const reviews = [3, 5, 4, 1, 4.5];
const stats = getStats(reviews);
console.log(stats);
*/

//LEC COMPUTED PROPERTIES
let fruit = 'mango';
let color = fruit;
console.log(color);
console.log(fruit);
fruit = 'passion fruit';
console.log(fruit);
console.log(color);
