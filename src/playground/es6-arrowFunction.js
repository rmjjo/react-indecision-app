const square = function(x) {
    return x * x;
};

// const squareArrow =(x) => {
//     return x * x;
// };

const squareArrow = (x) => x * x;


console.log(squareArrow(4));



// const getFirstName = (fullName) => {
//     return fullName.split(' ')[0];
// };

const getFirstName = (fullName) =>  fullName.split(' ')[1];
console.log(getFirstName('Raj Lakhanpal'));