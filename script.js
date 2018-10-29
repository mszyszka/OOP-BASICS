//Object define with object literal {} 
//It can be problematic when object has methods
const circle = {
    //property
    radius: 1,
    //object
    location: {
        //property
        x:1,
        //property
        y: 1
    },
    //method
    draw: function() {
        console.log('Drawing circle with object literal {}');
    }
};

circle.draw();

//Factory function
//Factory function is a function that return an Object
//they offer the ability to easily produce obhect instances 
//without diving into the complexities of classes and the new keyword
function createCircle(radius) {
    return {
        radius: radius,
        draw: function() {
            console.log('Drawing circle with radius: ' + radius + ', with factory function');
        }
    };
}

const myCircle = createCircle(1);
myCircle.draw();

//Constructor Function
function Circle(radius) {
    this.radius = radius;  
    this.draw = function() {
        console.log('Drawing circle with constructor function');
    }
}

const anotherCircle = new Circle(1);
anotherCircle.draw();
