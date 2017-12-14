var a = 0;
a = a + 1;

function xyz(
	a: number,
    b:number,
    c:number) :number { //after the closing parenthesis, before curly brace, type the return type
    return (a + b + c); //cannot make a toString call, because your return type is number
}
//can declare return void with :void


let x: number = xyz(1, 2, 3); //we are capturing a function call and assigning it to x
if (a == 1) {
    console.log("a is 1");
}

let b = 0; //typescript enforces scope properly, use the let keyword in typescript
//in typescript, when declaring variables, use let instead of var (for the most part)
void function(){
	b = 1;
}
b = a+1;

let c = 0; 
c = a + ""1"; 
//typescript now knows that is a is a number, cannot assign a string to a number
c = a + 1; //this works because c is a number
//we'd rather catch that error at transpile time than at runtime

let f: number = 0; //type is declared here, allows you to correct errors
let j: number; //do not have to assign it a value yet
let p: number = "p"; //string is not allowed to be assigned to a number type, transpile time error
f= f + 1;

let k: string = "Hello!"; //typing your variable as a string

let l: string = 1; //cannot type a string as a number

let isActive: boolean = true; //typing as a boolean

let g: number[] = [1,2,3]; //array of numbers declared here, cannot put string in(see error below)
let i: number[];
let h: number[] = [1,"2",3]; //javascript can still be generated from incorrect typescript
// in typescript we must type our arrays before populating them
