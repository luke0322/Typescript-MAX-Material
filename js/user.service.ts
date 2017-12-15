import {User} from './user'; 
//. convention says theyre in the same folder(js)

export class UserService {

	nextId: number = 1;
	users: User[] = [];
	 //this array will simulate the database(fudge it)

	list(): User[]{  //all of our methods will be lowercase for it
		return this.users;
	}

	get(id:number): User[]{
		let usrs: User[] = [];
		for(let user of this.users ){
			if (id == user.id){
				usrs.push(user);
				break;
			}
		}
		return usrs;
	}

	add(user: User):string{
		user.id = this.nextId++;
		this.users.push(user);
		return "Added.";
	}

	change(user: User):string{
		let dbusr: User = this.get(user.id)[0];//getting the one element
		dbusr.userName = user.userName;
		dbusr.password = user.password;
		dbusr.phone = user.phone;
		dbusr.active = user.active;
		dbusr.admin = user.admin;
		dbusr.reviewer = user.reviewer;
		dbusr.firstName = user.firstName;
		dbusr.lastName = user.lastName;
		dbusr.email = user.email;
		return "Changed.";

	}

	remove(user: User):string{
		//will not work with multiple users(pop)
		let index: number = -1;
		for(let idx: number = 0; idx < this.users.length; idx++){
			if (user.id == this.users[idx].id){
				index = idx;
			}
		}
		this.users.splice(index,1);
		return "Deleted.";
	}

	authenticate(username: string, password: string):User[]{
		let usrs: User[] = [];
		for(let user of this.users ){
			if (username.toLowerCase() == user.userName.toLowerCase() && password == user.password){
				usrs.push(user);
				break;
			}
		}
		return usrs;
	}
}