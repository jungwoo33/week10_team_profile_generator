// import "Employee" class:
const Employee = require('./Employee');

// create "Engineer" class that extends the "Employee" class:
class Engineer extends Employee{
   // Engineer class will have: name,id,email,github)
   constructor(name,id,email,github){
      // include basic info from "Employee":
      super(name,id,email);

      // new for "Engineer":
      this.github = github;
   }

   // override "Employee" role to "Engineer":
   getRole(){
      return "Engineer";
   }

   // return "github" info from input:
   getGithub(){
      return this.github;
   }
}
module.exports = Engineer;