class Bootcamp { //don't forget it is case sensitive, always start classes with capital letter
	name: string;

	about() :void{ //we dont intend to return anything here
		console.log(name);
	}

	constructor(aName: string){ //can only have 1 constructor per class in typescript
		this.name = aName;
		this.about(); //the this keyword must be declared when referencing other methods and variables
	}
}

let bc: Bootcamp = 
	new Bootcamp("Great Eight"); //passing in the string with constructor, calling the instance type as :Bootcamp

	bc.name;
	bc.about();