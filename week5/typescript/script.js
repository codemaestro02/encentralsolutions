"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var isDone = true;
var count = 10;
var boyName = "Awwal";
function greet(user) {
    return "Hello, ".concat(user.name, ". You are ").concat(user.age, " years old.");
}
var user = {
    name: "Awwal",
    age: 50,
    isAdmin: false,
};
// console.log(greet(user))
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distance) {
        console.log("".concat(this.name, " moved ").concat(distance, " meters."));
    };
    Animal.prototype.jump = function (height) {
        console.log("".concat(this.name, " jumped ").concat(height, " meters."));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log("Woof Woof!");
    };
    return Dog;
}(Animal));
var dog = new Dog("Buddy");
// dog.bark();
// dog.move(10);
// dog.jump(5);
function identity(arg) {
    return arg;
}
var output1 = identity("myString");
var output2 = identity(100);
// console.log(output1);
// console.log(output2);
var util_1 = require("./util");
console.log((0, util_1.add)(2, 3));
