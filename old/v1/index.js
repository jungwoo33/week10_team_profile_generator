const inquirer = require('inquirer');

/* 
   Let's construct "Employee" object (or class), which includes:
      name
      id
      email
      getName()
      getId()
      getEmail()
      getRole() -> this will return "Employee"
*/
function Employee(){
   // (1) receive employee's name from user input
   this.getName = function(){
      const questions = [
         {
            name: "employee_name",
            type: "input",
            message: "Provide employee's name: ",
            validate: function(answer){
               if(answer.length < 1){
                  return console.log("A valid name is required.");
               }
               return true; // default: false.
            }
         }
      ];
      inquirer
         .prompt(questions)
         .then((answers)=>{
            this.name = answers.employee_name;
            //console.log(this); // check if "this" is refereing "Employee"
            //console.log(this.name);
         })
         .catch((error)=>{
            if(error.isTtyError){
               // Prompt couldn't be rendered in the current environment.
            }else{
               // Something else went wrong.
            }
         }); // End of inquirer
   } // End of getName()

   // (2) receive employee's id from user input
   this.getId = function(){
      const questions = [
         {
            name: "employee_id",
            type: "input",
            message: "Provide employee's id: ",
            validate: function(answer){
               if(answer.length < 1){
                  return console.log("A valid id is required.");
               }
               if(typeof(answer) !== 'number'){
                  return console.log("You need to provide a number for ID.");
               }
               return true; // default: false.
            }
         }
      ];
      inquirer
         .prompt(questions)
         .then((answers)=>{
            this.id = answers.employee_id;
            //console.log(this); // check if "this" is refereing "Employee"
            console.log(this.id);
         })
         .catch((error)=>{
            if(error.isTtyError){
               // Prompt couldn't be rendered in the current environment.
            }else{
               // Something else went wrong.
            }
         }); // End of inquirer
   } // End of getId()

   // (3) receive employee's email from user input

} // End of Employee()
const employee = new Employee();

// Now, let's fill "Employee's each item"
employee.getName();
