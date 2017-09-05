/*jshint esversion: 6 */

class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.waitingList = [];
    this.passengers = [];
    this.requests   = [];
    this.direction = "up";
  }

  start() {
    let timer = setInterval(() => this.update(), 1000);
    setTimeout(() => this.stop(timer), 10000);
  }

  stop(timer) {
    clearInterval(timer, 10000);
  }

  update() {
    this.log();
  }

  _passengersEnter() {
    this.waitingList.forEach((i) => {
      if (i.originFloor === this.floor) {
        this.passengers.push(i);
        this.waitingList.splice(i, 1);
        this.requests.push(i.destinationFloor);
        console.log(`${i.name} has entered the elevator`);
      }
    });
  }

  _passengersLeave() {
    this.passengers.forEach((i) => {
      if (i.destinationFloor === this.floor) {
        this.passengers.splice(i, 1);
        console.log(`${i.name} has left the elevator`);
      }
    });
  }

  floorUp() {
    if (this.floor < this.MAXFLOOR) {
      this.floor++;
    } else {
      this.direction = "down";
    }
  }

  floorDown() {
    if (this.floor > 0) {
      this.floor--;
    } else {
      this.direction = "up";
    }
  }

  call(person) {
    this.requests.push(person.originFloor);
    this.waitingList.push(person);
  }

  log() {
   console.log(`Direction: ${this.direction}, Floor: ${this.floor}`);
  }

}

module.exports = Elevator;
