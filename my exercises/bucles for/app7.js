function createFunctions() {
  const array = [];
  let number = 1;

  array.push(
    (function (numero) {
      return function () {
        console.log(number);
      };
    })(number)
  );

  number = 2;

  array.push(function () {
    console.log(number);
  });

  number = 3;

  array.push(function () {
    console.log(number);
  });

  return array;
}

let functions = createFunctions();

functions[0]();
functions[1]();
functions[2]();
