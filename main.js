//Exercise #1
///1.1
function functionOne() {
  console.log(this)
};

const firstObject = {
    name: "Ball",
    saying: function() {
     console.log(this);
    }
};
const secondObject = {
    name: "Tire",
    printName: () => {
        console.log(this);
    }
};
functionOne();
firstObject.saying();
secondObject.printName();
//1.2
