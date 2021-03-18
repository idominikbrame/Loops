
// PROBLEM 1
let i = 1;
while(i < 1001) {
  console.log(i)
  i++
}

//PROBLEM 2 && 5
let people = [{
  firstName: "Joe",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "male"
}, {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1926",
  gender: "female"
}]


////////////Return Values
let values = people.map(people => Object.values(people));
let valuesConcat = values[0].concat(values[1])

console.log(valuesConcat)
for (element of people) {
  console.log(Object.keys(people))
}



//////////Return Keys PROBLEM 3

let keys = people.map(people => Object.keys(people));
let keysConcat = keys[0].concat(keys[1])
console.log(keysConcat)
console.log(valuesConcat)
for (element of people) {
  console.log(Object.keys(people))
}




///////////Return key value pairs PROBLEM 4
people.forEach(element => console.log(element))


// PROBLEM 6
//Return Odd Birthdays
for (let i = 0; i < people.length; i++) {
  let year =parseInt(people[i].birthDate.slice(7))
  if(year % 2 == 1) {
    console.log(people[i]) 
  }
}

people.map(people => console.log(people))

// PROBLEM 7
for (let i = 0; i < people.length; i++) {
  if(people[i].gender.toLowerCase() == "male") {
    console.log(people[i])
  }
}

// OR

let males = people.filter(people => people.gender == "male")

console.log(males)


// PROBLEM 9

for (let i = 0; i < people.length; i++) {
  let year =parseInt(people[i].birthDate.slice(7))
  if(year < 1990) {
    console.log("True") 
  }
}



//PROBLEM 10

let before90 = people.filter(people => parseInt(people.birthDate.slice(7)) < 1990)

console.log(before90)



// BONUS

function check21(passedDate) {
  let check = (Math.abs(new Date)) - (Math.abs(1990, 10, 2));
  console.log(check)
  console.log(Math.abs(new Date))
  if (check >= 21) {
    return (check  / (1000 * 60 * 60 * 24))
  }
}

check21(Date(1990, 11, 24))

let d; 
// d = new Date()
// d = new Date(1164411006456) 
// d = new Date("2019-08-02T11:30:00+10:00")
d = new Date(2019, 7, 2, 11, 30, 27, 0)
console.log(d.toString())
console.log(d.getFullYear())
console.log(d.getHours())
console.log(d.getMonth())