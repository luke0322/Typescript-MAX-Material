import {UserService} from './user.service'; 
import {User} from './user'; 

export class UserCore{
	userSvc: UserService;

	constructor(){
		this.userSvc = new UserService();
		console.log("UserCore constructed!");
	}
}

let uc: UserCore = new UserCore();
let users: User[] = uc.userSvc.list();
console.log(users);
let usr: User = uc.userSvc.get(1)[0];
console.log(usr);

//test the add
let adduser: User = new User("bmarley","iriemon","bob","marley","555-555-5555","bmarley@gmail.com",true,true,true);
let rc: string = uc.userSvc.add(adduser);
console.log(rc);
console.log(uc.userSvc.list());

//change user here
let getuser: User = uc.userSvc.get(1)[0];
getuser.password = "Train@max";
let rc2: string = uc.userSvc.change(getuser);
console.log(rc2);
console.log(uc.userSvc.list());

//authenticate user here

let ausrs: User[] = uc.userSvc.authenticate("bmarley","Train@max");
	if(ausrs.length == 0){
		console.log("Not a valid user/pwd combo.");
	}else{
		console.log("Login successful!");
	}

//remove user here
let remuser: User = uc.userSvc.get(1)[0];
let rc3: string = uc.userSvc.remove(remuser);
console.log(rc3);
console.log(uc.userSvc.list());

