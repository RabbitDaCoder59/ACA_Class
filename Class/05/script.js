const greet = (name = "Guest") => {
  console.log(`Hello ${name}!`);
};

greet("John");

greet(); // Hello Guest!

const sumOfsqares = (...args) => {
  const number = args.map((num) => num * num);
  const AddNumbers = (number) => {
    return number.reduce((acc, arg) => acc + arg, 0);
  };
  return AddNumbers(number);
};

console.log(sumOfsqares(1, 2, 3, 4, 5));
