const Elevator = require('./elevator.js', './person.js');

var newElevator = new Elevator();

newElevator.start();

newElevator.floorUp();

newElevator.floorUp();

newElevator.stop();
