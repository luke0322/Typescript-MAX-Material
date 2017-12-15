"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(userName, password, firstName, lastName, phone, email, admin, reviewer, active) {
        this.userName = userName;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email; //do not need id when creating a new entry 
        this.admin = admin;
        this.reviewer = reviewer;
        this.active = active;
    }
    User.prototype.display = function () {
        console.log(this);
    };
    return User;
}());
exports.User = User;
// let users: User[] = [
// 	new User("bmarley","iriemon","bob","marley","555-555-5555","bmarley@gmail.com",true,true,true),
// 	new User("kmill","amillie","kevin","miller","555-555-5231","kmill@gmail.com",true,true,true),
// 	new User("jbroni","jobb","ja","broni","555-555-9999","jbrones@gmail.com",true,true,true)
// ];
// function getAllUsers(){
// 	for (let user of users){
// 	console.log("ID          :   " + user.id);
// 	console.log("First name  :   " + user.firstName);
// 	console.log("Last name   :   " + user.lastName);
// 	console.log("username    :   " + user.userName);
// 	console.log("password    :   " + user.password);
// 	console.log("phone       :   " + user.phone);
// 	console.log("email       :   " + user.email);
// 	console.log("Is Admin    :   " + (user.admin? "yes": "no"));
// 	console.log("Is Reviewer :   " + (user.reviewer? "yes": "no"));
// 	console.log("Is Active   :   " + (user.active? "yes": "no"));
// 	console.log("**************************************");
// 	}
//}
//getAllUsers(); 
