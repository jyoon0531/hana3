const obj = { id: 1, name: "Hong" };
console.log(obj.toString);

class Animal {
  constructor(name) {
    this.name = name || super.constructor.name;
    console.log("🚀 constructor:", super.constructor);
    console.log("🚀 prototype:", super.__proto__);
  }
}
const dog = new Animal("Dog");
console.log("🚀 ~ dog:", dog.name);
const cat = new Animal();
console.log("🚀 ~ cat:", cat.name); //Object
console.log("ok=", Object.keys(obj));
console.log("ak=", Object.keys(dog));
for (let k in dog) console.log("k=", k);
console.log("oh=", obj.hasOwnProperty("id"));
console.log("dh=", dog.hasOwnProperty("id"));
