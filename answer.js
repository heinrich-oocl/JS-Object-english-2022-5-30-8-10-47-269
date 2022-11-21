let obj = {}
obj['name'] = "John"
obj['surname'] = "Mike"
obj['name'] = "Peter"
delete obj.name;
console.log(obj)

var fruit = {
apple: 20,
pear: 20,
peach: 10
};
let total = 0
for (i in fruit)
  total += fruit[i]
console.log(total)
