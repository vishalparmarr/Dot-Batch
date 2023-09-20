let array = ["Vishal", 21, 95, true];
console.log(array);

let Rectangle = {
    length: 1,
    breadth: 1,

    draw: function(){
        console.log("Circle hai ye");
    }
};

//console.log(Rectangle);

function createRectangle() {

    let Rectangle = {
        length: 1,
        breadth: 1,
    
        draw: function(){
            console.log("Circle hai ye");
        }
    };
    return Rectangle;
}

let var1 = createRectangle();
console.log(var1);
