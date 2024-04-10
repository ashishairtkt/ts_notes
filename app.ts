//  Type Annotations:
// Type annotations in TypeScript are a way to explicitly specify the types of variables, function parameters, and return types within your code. By providing type annotations, you can catch type-related errors early in the development process and improve the maintainability of your code. Here's how you can use type annotations:. For example:

// Variables:
// You can annotate variables with their respective types using a colon (:) followed by the desired type.
let message: string = "Hello, TypeScript!";
let age: number = 25;
let isApproved: boolean = true;

// Function Parameters and Return Types:
// You can specify the types of function parameters and return types similarly.

function greet(name: string): string {
  return "Hello, " + name;
}

// Arrays and Objects:
// You can also annotate arrays and objects with specific types.

let numbers: number[] = [1, 2, 3, 4, 5];
let person: { name: string; age: number } = {
  name: "John",
  age: 30,
};

// Union Types:
// You can define a variable that can hold values of multiple types using union types.

let id: string | number = 123;
id = "ABC";

// Type Aliases:
// You can create aliases for complex types using the type keyword.

type Point = {
  x: number;
  y: number;
};
let point: Point = { x: 10, y: 20 };

// Type Assertion:
// Type assertion is a way to tell the TypeScript compiler about the type of a variable when you know more about its type than TypeScript does.

let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

// Type Inference:
// Type inference is a feature in TypeScript that allows the compiler to automatically deduce the types of variables, function parameters, and return types based on the context and the value assigned. This means that in many cases, you don't have to explicitly specify types because TypeScript can infer them from the code itself..

// Variables:
let user_Message = "Hello, TypeScript!"; // TypeScript infers the type string
let user_age = 25; // TypeScript infers the type number
let user_isApproved = true; // TypeScript infers the type boolean

// Function Parameters and Return Types:
// TypeScript infers the type of the name parameter as string and the return type of the function as string based on the string concatenation operation.
function NewGreet(name: string) {
  return "Hello, " + name;
}

// Arrays and Objects:
let newNumbers = [1, 2, 3, 4, 5]; // TypeScript infers the type number[]
let newPerson = { name: "John", age: 30 }; // TypeScript infers the type { name: string, age: number }
// Type Inference with Union Types:

// let newid = 123; // TypeScript infers the type number
// newid = "ABC"; // Error: Type '"ABC"' is not assignable to type 'number'

// Interfaces
// Interfaces in TypeScript are used to define the structure of objects. They allow you to declare the shape that an object should have by specifying the names and types of its properties. Interfaces are a powerful tool for defining contracts within your code, ensuring that objects adhere to a certain structure and making your code more predictable and maintainable.

// Declaring Interfaces:
// You declare an interface using the interface keyword followed by the interface name and the properties it should contain.

interface Person {
  name: string;
  age: number;
  gender?: string; // Optional property
}

// Using Interfaces:
function mgreet(person: Person) {
  return "Hello, " + person.name;
}

let john: Person = { name: "John", age: 30 };
console.log(mgreet(john)); // Output: Hello, John

// Optional Properties:
interface Car {
  brand: string;
  model: string;
  year?: number; // Optional property
}

// Readonly Properties:

// You can mark properties in an interface as readonly, meaning they can only be assigned a value when the object is created.

interface mPoint {
  readonly x: number;
  readonly y: number;
}

// Extending Interfaces:
// You can extend interfaces to create new interfaces that inherit properties from existing interfaces.

interface Animal {
  name: string;
  eat(): void;
}

interface Dog extends Animal {
  breed: string;
  bark(): void;
}

// Here, the Dog interface extends the Animal interface, inheriting its properties (name) and methods (eat()), and adds its own property (breed) and method (bark()).

// Classes

// In TypeScript, classes are a fundamental part of object-oriented programming (OOP). They provide a blueprint for creating objects with similar characteristics and behavior. Here's a basic example of a class in TypeScript:

class Animal {
  // Properties
  name: string;
  age: number;

  // Constructor
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Method
  makeSound() {
    console.log("Some generic sound");
  }
}

// Creating an instance of the Animal class
let myAnimal = new Animal("Buddy", 3);

// Accessing properties and methods
console.log(myAnimal.name); // Output: Buddy
console.log(myAnimal.age); // Output: 3
myAnimal.makeSound(); // Output: Some generic sound

// Classes can also inherit from other classes in TypeScript using the extends keyword. Here's an example:

class Dog extends Animal {
  breed: string;

  constructor(name: string, age: number, breed: string) {
    super(name, age); // Call the constructor of the parent class
    this.breed = breed;
  }

  // Overriding the makeSound method
  makeSound() {
    console.log("Woof!");
  }
}

// Creating an instance of the Dog class
let myDog = new Dog("Bella", 2, "Labrador");

// Accessing properties and methods
console.log(myDog.name); // Output: Bella
console.log(myDog.age); // Output: 2
console.log(myDog.breed); // Output: Labrador
myDog.makeSound(); // Output: Woof!

// Generics

// Generics in TypeScript allow you to create reusable components or functions that can work with various data types while maintaining type safety. They enable you to write code that is flexible yet type-safe, as the specific types are determined by the caller rather than the implementer. Here's a basic example of generics in TypeScript:

// A generic function to log and return the input value
function identity<T>(arg: T): T {
  console.log(arg);
  return arg;
}

// Using the generic function with different types
let output1 = identity<string>("Hello, world!"); // Output: Hello, world!
let output2 = identity<number>(123); // Output: 123
// In this example:

// T is a type parameter declared within angle brackets (<T>), indicating that identity is a generic function that can work with any type.
// The function identity takes an argument arg of type T and returns the same type.
// You can call the identity function with different types (e.g., string, number) by specifying the type explicitly within angle brackets (<string>, <number>).
// Generics are commonly used in classes, interfaces, and functions to create flexible and reusable code. Here's an example of a generic class:

// A generic class representing a box that holds a value of any type
class Box<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

// Creating instances of the Box class with different types
let box1 = new Box<string>("Hello");
console.log(box1.getValue()); // Output: Hello

let box2 = new Box<number>(123);
console.log(box2.getValue()); // Output: 123

// In this example, Box is a generic class that can hold values of any type. The type parameter T is used to specify the type of the value held by the box. You can create instances of Box with different types by specifying the type parameter when instantiating the class.

// Enums
// Enums, short for enumerations, in TypeScript allow you to define a set of named constants. Enums make it easier to work with a set of related values, providing descriptive names to these values. Here's a basic example:

// Define a simple enum for different directions
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

// Using the enum
let playerDirection: Direction = Direction.Right;
console.log(playerDirection); // Output: 3
// In this example:

// enum Direction { ... } defines an enum named Direction.
// Inside the enum, each member is assigned an automatically incrementing numeric value starting from 0 (Up is 0, Down is 1, Left is 2, Right is 3).
// You can assign a variable of type Direction to one of the enum members. When you print the variable, it displays the corresponding numeric value.
// However, if you want to assign custom numeric values or string values to enum members, you can explicitly specify them:

// Define an enum with custom values
enum Color {
  Red = 1,
  Green = 2,
  Blue = 4,
}

// Using the enum with custom values
let primaryColor: Color = Color.Red;
console.log(primaryColor); // Output: 1
// In this example:

// Color.Red, Color.Green, and Color.Blue are explicitly assigned values 1, 2, and 4, respectively.
// Enums can also be used with string values:

// Define an enum with string values
enum LogLevel {
  Error = "ERROR",
  Warning = "WARNING",
  Info = "INFO",
  Debug = "DEBUG",
}

// Using the enum with string values
let logLevel: LogLevel = LogLevel.Error;
console.log(logLevel); // Output: ERROR

// Decorators

// Decorators are a feature in TypeScript that allow you to add metadata or behavior to classes, methods, properties, or parameters at design time. They are declared with the @ symbol followed by the decorator name, placed just before the declaration of the target element. Decorators make it possible to modularize and customize the behavior of your code without modifying its actual implementation.

// Here's a basic example of how decorators can be used in TypeScript:

// Decorator function
function log(target: any, key: string, descriptor: PropertyDescriptor) {
  // Save a reference to the original method
  const originalMethod = descriptor.value;

  // Replace the original method with a new method
  descriptor.value = function (...args: any[]) {
    console.log(`Calling method ${key} with arguments ${args}`);
    const result = originalMethod.apply(this, args);
    console.log(`Method ${key} returned ${result}`);
    return result;
  };

  return descriptor;
}

// Class with a method decorated with log
class MyClass {
  @log
  myMethod(arg: number): number {
    return arg * 2;
  }
}

// Create an instance of MyClass
const myInstance = new MyClass();

// Call the decorated method
myInstance.myMethod(5);

// In this example:

// @log is a decorator that applies logging functionality to the myMethod of the MyClass.
// The decorator log takes three parameters:
// target: The constructor function of the class for a method decorator.
// key: The name of the decorated method.
// descriptor: An object that describes the property or method being decorated.
// Inside the decorator, the original method is replaced with a new method that logs information before and after invoking the original method.
// When myMethod is called on an instance of MyClass, it automatically logs the method name and arguments before executing the original method and logs the return value afterward.
// Decorators are commonly used in frameworks like Angular for various purposes such as adding metadata for dependency injection, routing, or authentication. They provide a powerful way to extend and modify the behavior of your code in a clean and modular manner.
