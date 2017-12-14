class User{
	id: number;
	userName: string;
	password: string;
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
	admin: boolean;
	reviewer: boolean;
	active: boolean;

	display(): void {
		console.log(this);
	}

	constructor(id: number,userName: string,password: string,firstName: string, lastName: string,
		phone: string,email: string,admin: boolean,reviewer: boolean,active: boolean){
		this.id = id;
		this.userName = userName;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.phone = phone;
		this.email = email;
		this.admin = admin;
		this.reviewer = reviewer;
		this.active = active;
	}

}
let users: User[] = [
	new User(1,"bmarley","iriemon","bob","marley","555-555-5555","bmarley@gmail.com",true,true,true),
	new User(2,"kmill","amillie","kevin","miller","555-555-5231","kmill@gmail.com",true,true,true),
	new User(3,"jbroni","jobb","ja","broni","555-555-9999","jbrones@gmail.com",true,true,true)
];

function getAllUsers(){
	for (let user of users){
	console.log("ID: " + user.id);
	console.log("First name: " + user.firstName);
	console.log("Last name: " + user.lastName);
	console.log("username: " + user.userName);
	console.log("password: " + user.password);
	console.log("phone: " + user.phone);
	console.log("email: " + user.email);
	console.log("Is Admin: " + (user.admin? "yes": "no"));
	console.log("Is Reviewer: " + (user.reviewer? "yes": "no"));
	console.log("Is Active: " + (user.active? "yes": "no"));
	console.log("**************************************");
	}
}
getAllUsers();