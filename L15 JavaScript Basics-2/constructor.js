function Circle(len, bre) {

    this.length = len;
    this.breadth = bre;

    this.draw = function() {
        console.log('Rectangle hai');
    }

let obj1 = new Circle(3,6);
console.log(obj1); 

}