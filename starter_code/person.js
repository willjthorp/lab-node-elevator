/*jshint esversion: 6 */

class Person {
  constructor(name, originFloor, destinationFloor){
    this.name = name;
    this.originFloor = originFloor;
    this.destinationFloor = destinationFloor;
  }
}

let person = new Person("Will", 0, 5);

module.exports = Person;
