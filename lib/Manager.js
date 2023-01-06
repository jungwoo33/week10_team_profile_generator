// import "Employee" class:
const Employee = require('./Employee');

// create "Manager" class that extends the "Employee" class:
class Manager extends Employee{
   // Manager class will have: name,id,email,officeNumber)
   constructor(name,id,email,officeNumber){
      // include basic info from "Employee":
      super(name,id,email);

      // new for "Manager":
      this.officeNumber = officeNumber;
   }

   // override "Employee" role to "Manager":
   getRole(){
      return "Manager";
   }
}
module.exports = Manager;