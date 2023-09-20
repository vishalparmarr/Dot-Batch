let rectangle = {
    length: 3,
    breadth: 6,
    height: null
};

// For in loop
for(value in rectangle){
    console.log(value, rectangle[value]);
};
//For of loop
for(value of Object.keys(rectangle)){
    console.log(value);
};

for(value of Object.entries(rectangle)){
    console.log(value);
};