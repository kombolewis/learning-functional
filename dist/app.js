const dataFn = () => {
  console.log("I am a function");
};
const tellType = arg => {
  if (typeof arg === 'function') arg();else console.log("the data passed is: " + arg);
};

// tellType(dataFn);

// Fn => String
let crazy = () => {
  return String;
};