function createRectangle(len, bre) {

    return Rectangle = {
        length: len,
        breadth: bre,
    
        draw() {
            console.log("Circle hai ye");
        }
    };
}

let var1 = createRectangle(5,6);
console.log(var1);