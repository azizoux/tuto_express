const a = "12";
const b = 12;
const test = () => {
  setInterval(() => {
    console.log("setInvall executed...");
  }, 5000);
};
test();
console.log("a == b => ", a == b);
console.log("a === b => ", a === b);
