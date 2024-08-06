let isDone: boolean = true;
let count: number = 10;
let boyName: string = "Awwal";

interface User{
    name: string;
    age: number;
    isAdmin: boolean;
}

function greet(user: User){
    return `Hello, ${user.name}. You are ${user.age} years old.`;
}

const user: User = {
    name: "Awwal",
    age: 50,
    isAdmin: false,
}

// console.log(greet(user))

class Animal{
    private name: string;

    constructor(name: string){
        this.name = name;
    }

    public move(distance:number): void{
        console.log(`${this.name} moved ${distance} meters.`);
    }

    public jump(height:number): void{
        console.log(`${this.name} jumped ${height} meters.`);
    }
}


class Dog extends Animal{
    bark(): void{
        console.log("Woof Woof!");
    }
}

const dog = new Dog("Buddy");
// dog.bark();
// dog.move(10);
// dog.jump(5);

function identity<T>(arg: T): T{
    return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);

// console.log(output1);
// console.log(output2);

import {add} from "./util";

console.log(add(2, 3));