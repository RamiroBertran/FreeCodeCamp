function whatIsInAName(collection, source) {
  let prop = Object.keys(source);
  let container = [];
  let arr = [];

  for (let i = 0; i < prop.length; i++) {
    container.push(
      collection.filter((item) => item[prop[i]] == source[prop[i]])
    );
  }

  for (let i = 0; i < container.length; i++) {
    if (container[i].length === 0) {
      return container[i];
    }
  }
  arr = [...container[0]];
  if (prop.length > 1) {
    for (let i = 0; i < prop.length; i++) {
      let j = 0;
      while (arr.length > j) {
        if (arr[j].hasOwnProperty(prop[i]) === false) {
          arr.splice(j, 1);
          j--;
        }
        j++;
      }
    }
  }
  return arr;
}

console.log(whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 }));

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, cookie: 2 }
  )
);

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, bat: 2 }
  )
);

console.log(
  whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {
    apple: 1,
  })
);

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
);

console.log(
  whatIsInAName([{ a: 1, b: 2, c: 3, d: 9999 }], { a: 1, b: 9999, c: 3 })
);
