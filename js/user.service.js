"use strict";
exports.__esModule = true;
//. convention says theyre in the same folder(js)
var UserService = /** @class */ (function () {
    function UserService() {
        this.nextId = 1;
        this.users = [];
    }
    //this array will simulate the database(fudge it)
    UserService.prototype.list = function () {
        return this.users;
    };
    UserService.prototype.get = function (id) {
        var usrs = [];
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            if (id == user.id) {
                usrs.push(user);
                break;
            }
        }
        return usrs;
    };
    UserService.prototype.add = function (user) {
        user.id = this.nextId++;
        this.users.push(user);
        return "Added.";
    };
    UserService.prototype.change = function (user) {
        var dbusr = this.get(user.id)[0]; //getting the one element
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
    };
    UserService.prototype.remove = function (user) {
        //will not work with multiple users(pop)
        var index = -1;
        for (var idx = 0; idx < this.users.length; idx++) {
            if (user.id == this.users[idx].id) {
                index = idx;
            }
        }
        this.users.splice(index, 1);
        return "Deleted.";
    };
    UserService.prototype.authenticate = function (username, password) {
        var usrs = [];
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            if (username.toLowerCase() == user.userName.toLowerCase() && password == user.password) {
                usrs.push(user);
                break;
            }
        }
        return usrs;
    };
    return UserService;
}());
exports.UserService = UserService;
