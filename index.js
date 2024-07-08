// # Problem 2619

Array.prototype.last = function () {
  return this.length > 0 ? this[this.length - 1] : -1;
};

const arr = [];
console.log(arr.last());

// Problem 2620. Leet Code

var createCounter = function (n) {
  const counter = n - 1;
  return function () {
    counter++;
    return counter;
  };
};

// Problem 2621. Leet Code

async function sleep(millis) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, millis);
  });
}

// Problem 2626

var reduce = function (nums, fn, init) {
  for (i = 0; i < nums.length; i++) {
    init = fn(init, nums[i]);
  }

  return init;
};

console.log(
  reduce(
    [1, 2, 3, 4],
    function sum(accum, curr) {
      return accum + curr * curr;
    },
    100
  )
);

// Problem 2629

var compose = function (functions) {
  return function (x) {
    let modX = x;
    for (i = functions.length - 1; i >= 0; i--) {
      modX = functions[i](modX);
    }
    return modX;
  };
};

const fn = compose([(x) => 10 * x, (x) => 10 * x, (x) => 10 * x]);
console.log(fn(1)); // 1000
