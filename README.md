# Type Annotations

#### Type annotations in TypeScript are a way to explicitly specify the types of variables, function parameters, and return types within your code. By providing type annotations, you can catch type-related errors early in the development process and improve the maintainability of your code

# Variables

##### You can annotate variables with their respective types using a colon (:) followed by the desired type

###### Example

```typeScript
let message: string = "Hello, TypeScript!";
let age: number = 25;
let isApproved: boolean = true;
```

# Function Parameters and Return Types

#### You can specify the types of function parameters and return types similarly

###### Example

```typeScript
function greet(name: string): string {
return "Hello, " + name;
}
```

# Arrays and Objects

#### You can also annotate arrays and objects with specific types

###### Example

```typeScript
let numbers: number[] = [1, 2, 3, 4, 5];
let person: { name: string; age: number } = {
name: "John",
age: 30,
};
```

# Union Types

##### You can define a variable that can hold values of multiple types using union types

###### Example

```typeScript
let id: string | number = 123;
id = "ABC";
```

# Type Aliases

##### You can create aliases for complex types using the type keyword

###### Example

```typeScript
type Point = {
x: number;
y: number;
};
let point: Point = { x: 10, y: 20 };
```

Type Assertion

##### Type assertion is a way to tell the TypeScript compiler about the type of a variable when you know more about its type than TypeScript does

###### Example

```typeScript
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

# Type Inference

##### Type inference is a feature in TypeScript that allows the compiler to automatically deduce the types of variables, function parameters, and return types based on the context and the value assigned. This means that in many cases, you don't have to explicitly specify types because TypeScript can infer them from the code itself

# Interfaces

##### Interfaces in TypeScript are used to define the structure of objects. They allow you to declare the shape that an object should have by specifying the names and types of its properties. Interfaces are a powerful tool for defining contracts within your code, ensuring that objects adhere to a certain structure and making your code more predictable and maintainable

# Declaring Interfaces

##### You declare an interface using the interface keyword followed by the interface name and the properties it should contain

###### Example

```typeScript
interface Person {
name: string;
age: number;
gender?: string; // Optional property
}
```

# Using Interfaces

##### You can use interfaces to define the structure of objects and ensure that they adhere to a certain contract

###### Example

```typeScript
function greet(person: Person) {
return "Hello, " + person.name;
}

let john: Person = { name: "John", age: 30 };
console.log(greet(john)); // Output: Hello, John
```

# Optional Properties

#### You can mark properties in an interface as optional using the ? symbol

###### Example

```typeScript
interface Car {
brand: string;
model: string;
year?: number; // Optional property
}
```

# Readonly Properties

##### You can mark properties in an interface as readonly, meaning they can only be assigned a value when the object is created

###### Example

```typeScript
interface Point {
readonly x: number;
readonly y: number;
}
```

# Extending Interfaces

##### You can extend interfaces to create new interfaces that inherit properties from existing interfaces

###### Example

```typeScript
interface Animal {
name: string;
eat(): void;
}

interface Dog extends Animal {
breed: string;
bark(): void;
}
```

# Classes

##### In TypeScript, classes are a fundamental part of object-oriented programming (OOP). They provide a blueprint for creating objects with similar characteristics and behavior

# Basic Example

##### Here's a basic example of a class in TypeScript

###### Example

```typeScript
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
```

# Inheritance

##### Classes can also inherit from other classes in TypeScript using the extends keyword

###### Example

```typeScript
class Dog extends Animal {
breed: string;

constructor(name: string, age: number, breed: string) {
super(name,age); // Call the constructor of the parent class
this.breed = breed;
}

# // Overriding the makeSound method
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
```

# Generics

##### Generics in TypeScript allow you to create reusable components or functions that can work with various data types while maintaining type safety. They enable you to write code that is flexible yet type-safe, as the specific types are determined by the caller rather than the implementer

# Basic Example

#### Here's a basic example of generics in TypeScript

###### Example

```typeScript
function identity<T>(arg: T): T {
console.log(arg);
return arg;
}

// Using the generic function with different types
let output1 = identity<string>("Hello, world!"); // Output: Hello, world!
let output2 = identity<number>(123); // Output: 123
Generic Class
Here's an example of a generic class:
###### Example
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
```

# Enums

##### Enums, short for enumerations, in TypeScript allow you to define a set of named constants. Enums make it easier to work with a set of related values, providing descriptive names to these values

# Basic Example

##### Here's a basic example of enums in TypeScript

###### Example

```typeScript
enum Direction {
Up,
Down,
Left,
Right,
}

// Using the enum
let playerDirection: Direction = Direction.Right;
console.log(playerDirection); // Output: 3

```

# Custom Values

##### You can assign custom numeric or string values to enum members

###### Example

```typeScript
enum Color {
Red = 1,
Green = 2,
Blue = 4,
}

enum LogLevel {
Error = "ERROR",
Warning = "WARNING",
Info = "INFO",
Debug = "DEBUG",
}

```

# Decorators

##### Decorators are a feature in TypeScript that allow you to add metadata or behavior to classes, methods, properties, or parameters at design time. They are declared with the @ symbol followed by the decorator name, placed just before the declaration of the target element. Decorators make it possible to modularize and customize the behavior of your code without modifying its actual implementation

# Basic Example

##### Here's a basic example of decorators in TypeScript

###### Example

```typeScript
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

class MyClass {
@log
myMethod(arg: number): number {
return arg \* 2;
}
}

// Create an instance of MyClass
const myInstance = new MyClass();

// Call the decorated method
myInstance.myMethod(5);


age); // Call the constructor of the parent class
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
```
