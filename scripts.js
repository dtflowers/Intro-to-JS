var age = 31;

var david = {
    name: 'David',
    email: 'david@somedomain.com'
};
var tyler = {
    name: 'Tyler',
    email: 'tyler@somedomain.com'
};
var haley = {
    name: 'Haley',
    email: 'haley@somedomain.com'
};

var staff = [tyler, haley, haley];

console.log(staff);
console.log(staff[2]);

function getAgeInDogYears(humanAge) {
    var dogAge = humanAge * 7;
    return dogAge;
}


function sayHello(name) {
    age = 23;
    alert('Hello, ' + name + '. Your age is ' + getAgeInDogYears(age) + '.');
    age = getAgeInDogYears(age);
}

sayHello('Tyler');
console.log(age);