var age = 31;

var david = {
    name: 'David',
    email: 'david@somedomain.com',
    performanceGrade: 'A'
};
var tyler = {
    name: 'Tyler',
    email: 'tyler@somedomain.com',
    performanceGrade: 'B'
};
var haley = {
    name: 'Haley',
    email: 'haley@somedomain.com',
    performanceGrade: 'F'
};

var staff = [david, tyler, haley];

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

if (age > 100) {
    console.log('Wow, you are old!');
} else {
    console.log('Nice age, bro.');
}

for (var i = 0; i < 3; i++) {
    var staffMember = staff[i];
    console.log(staffMember.name + ' : ');
    switch (staffMember.performanceGrade) {
    case 'A':
        console.log('Gold star!');
        break;
    case 'B':
        console.log('Pretty good!');
        break;
    case 'F':
    console.log('Better luck next time!');
        break;
    }  
}