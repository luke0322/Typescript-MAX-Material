let a = 0;

class Students{

	name: string;
	color: string;
	number: number;

	constructor(name: string, color: string, numb: number){ //can only have 1 constructor per class in typescript
		this.name = name;
		this.color = color;
		this.number = numb; //the this keyword must be declared when referencing other methods and variables
	}
}
let bill: Students = new Students ("Bill","Blue",6);
let joe: Students = new Students ("Joe","Blue",6);
let eric: Students = new Students ("Eric","Blue",6);
let denise: Students = new Students ("Denise","Blue",6);
let luke: Students = new Students ("Luke","Blue",6);
let andrew: Students = new Students ("Andrew","Blue",6);
let lisa: Students = new Students ("Lisa","Blue",6);
let emilie: Students = new Students ("Emilie","Blue",6);

let student: Students[] = [bill,joe,eric,denise,luke,andrew,lisa,emilie];
console.log(student);

 //passing in the string with constructor, calling the instance type as :Bootcamp
