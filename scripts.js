var age = 31;

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