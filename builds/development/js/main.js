function greet(person) {
    var message = "Hello, " + person;
    console.log(message);
    return message;
}
///<reference path="./greet.ts"/>
greet("Daniel");
greet("Bobby");
