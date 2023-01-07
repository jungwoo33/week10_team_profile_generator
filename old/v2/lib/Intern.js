// import "Employee" class:
const Employee = require('./Employee');

// create "Intern" class that extends the "Employee" class:
class Intern extends Employee{
   // Engineer class will have: name,id,email,github)
   constructor(name,id,email,school){
      // include basic info from "Employee":
      super(name,id,email);

      // new for "Intern":
      this.school = school;
   }

   // override "Employee" role to "Intern":
   getRole(){
      return "Intern";
   }

   // return "school" info from input:
   getSchool(){
      return this.school;
   }
}
module.exports = Intern;