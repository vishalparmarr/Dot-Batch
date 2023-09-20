let rectangle = {
    length: 3,
    breadth: 6,
    height: null
};

let square = {}; 

// Iterative method
for(value in rectangle){
   square[value] = rectangle[value];
}
console.log(square);

// Assign method
let circle = Object.assign({},rectangle);
console.log(circle);

//Spread method
let triangle = {...rectangle};
console.log(triangle);

