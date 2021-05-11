var userOne = {
    email: 'ryu@ninjas.com',
    name: 'Ryu',
    login() {
        console.log(this.email, 'has logged in');
    },
    logout() {
        console.log(this.email, 'has logged out');
    }
};

// change the name property
userOne.name = 'Yoshi';
console.log(userOne.name);
console.log(userOne['name']);
userOne['name'] = 'mario';
console.log(userOne.name);

//dynamic property (can be chosen by user)
var prop = 'name';
console.log(userOne[prop]);
prop = 'email';
console.log(userOne[prop]);

//add a new property (not the best way)
//age should be in the object literal definition
userOne.age = 25;
console.log(userOne.age);