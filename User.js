var User = /** @class */ (function () {
    function User(id, userName, password, firstName, lastName, phone, email, admin, reviewer, active) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.admin = admin;
        this.reviewer = reviewer;
    }
    User.prototype.display = function () {
        console.log(this);
    };
    return User;
}());
var users = [
    new User(1, "bmarley", "iriemon", "bob", "marley", "555-555-5555", "bmarley@gmail.com", true, true, true),
    new User(2, "kmill", "amillie", "kevin", "miller", "555-555-5231", "kmill@gmail.com", true, true, true),
    new User(3, "jbroni", "jobb", "ja", "broni", "555-555-9999", "jbrones@gmail.com", true, true, true)
];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    user.display();
}
