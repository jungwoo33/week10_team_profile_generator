// import "Employee" class:
const Employee = require('./Employee');

// create "Manager" class that extends the "Employee" class:
class Manager extends Employee{
   // Manager class will have: name,id,email,office_num)
   constructor(name,id,email,office_num){
      // include basic info from "Employee":
      super(name,id,email);

      // new for "Manager":
      this.office_num = office_num;
   }

   // override "Employee" role to "Manager":
   getRole(){
      return "Manager";
   }
}
module.exports = Manager;