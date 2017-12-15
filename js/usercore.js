"use strict";
exports.__esModule = true;
var user_service_1 = require("./user.service");
var user_1 = require("./user");
var UserCore = /** @class */ (function () {
    function UserCore() {
        this.userSvc = new user_service_1.UserService();
        console.log("UserCore constructed!");
    }
    return UserCore;
}());
exports.UserCore = UserCore;
var uc = new UserCore();
var users = uc.userSvc.list();
console.log(users);
var usr = uc.userSvc.get(1)[0];
console.log(usr);
//test the add
var adduser = new user_1.User("bmarley", "iriemon", "bob", "marley", "555-555-5555", "bmarley@gmail.com", true, true, true);
var rc = uc.userSvc.add(adduser);
console.log(rc);
console.log(uc.userSvc.list());
//change user here
var getuser = uc.userSvc.get(1)[0];
getuser.password = "Train@max";
var rc2 = uc.userSvc.change(getuser);
console.log(rc2);
console.log(uc.userSvc.list());
//authenticate user here
var ausrs = uc.userSvc.authenticate("bmarley", "Train@max");
if (ausrs.length == 0) {
    console.log("Not a valid user/pwd combo.");
}
else {
    console.log("Login successful!");
}
//remove user here
var remuser = uc.userSvc.get(1)[0];
var rc3 = uc.userSvc.remove(remuser);
console.log(rc3);
console.log(uc.userSvc.list());
