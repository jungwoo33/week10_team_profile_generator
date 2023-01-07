// call node modules:
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// Create an empty array that includes all team members later:
const team = [];
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

// receive manager info: =================================================================!
function add_manager(){
//const add_manager = ()=>{   
   // before start, let's display the following:
   console.log("!============================================");
   console.log("   Let's build the team that belongs to this manager:");
   console.log("!============================================");

   const questions = [
      {
         name: "name",
         type: "input",
         message: "Provide manager's name: ",
         validate: function(answer){
            if(answer.length < 1){
               return console.log("A valid name is required.");
            }
            return true; // default: false.
         }
      },
      {
         name: "id",
         type: "input",
         message: "Provide manager's employee id: ",
         validate: function(answer){
            if(answer.length < 1){
               return console.log("A valid id is required.");
            }
            /*
            if(typeof(answer) !== 'number'){
               return console.log("You need to provide a number for ID.");
            }
            */
            return true; // default: false.

         }
      },
      {
         name: "email",
         type: "input",
         message: "Provide manager's email: ",
         validate: function(answer){
            if(answer.length < 1){
               return console.log("A valid email is required.");
            }
            return true; // default: false.
         }
      },
      {
         name: "office_num",
         //type: "number",
         type: "input",
         message: "Provide manager's office number: ",
         validate: function(answer){
            if(answer.length < 1){
               return console.log("A valid office number is required.");
            }
            /*
            if(typeof(answer) !== 'number'){
               return console.log("You need to provide a number for office number.");
            }
            */
            return true; // default: false.
         }
      },
   ];
   return inquirer // Note, you should include "return"; why???
   .prompt(questions) // receive manager info from prompt
   .then(answers => {
      // with the given user answers, let's create a "Manager" class
      //const{name,id,email,office_num} = answers;
      let name = answers.name;
      let id = answers.id;
      let email = answers.email;
      let office_num = answers.office_num;
      const manager = new Manager(name,id,email,office_num);
      console.log("Provided manager info: ", manager); // display the provided manager info to confim

      // Now, push (i.e., add) "manage" into "team", which is an array that includes all the team members:
      team.push(manager);
   })
   .catch(error=>{
      if(error.isTtyError){
         // Prompt couldn't be rendered in the current environment.
      }else{
         // Something else went wrong.
      }
   }); // End of inquirer
};

// receive other employee info: ===========================================================!
function add_employee(){
//const add_employee =(team)=>{
   // before start asking team members, let's display the following:
   console.log("");
   console.log("!============================================");
   console.log("   Now, let's add team members...");
   console.log("!============================================");

   const questions = [
      // Note: employee's role must come first!
      {
         name: "role",
         type: "list",
         message: "Choose employee's role in the following list: ",
         choices: ['Engineer', 'Intern'],
         validate: function(answer){
            if(answer.length < 1){
               return console.log("A valid name role must be selected.");
            }
            return true; // default: false.
         }
      },
      {
         name: "name",
         type: "input",
         message: "Provide employee's name: ",
         validate: function(answer){
            if(answer.length < 1){
               return console.log("A valid name is required.");
            }
            return true; // default: false.
         }
      },
      {
         name: "id",
         //type: "number",
         type: "input",
         message: "Provide employee's id: ",
         validate: function(answer){
            if(answer.length < 1){
               return console.log("A valid id is required.");
            }
            /*
            if(typeof(answer) !== 'number'){
               return console.log("You need to provide a number for ID.");
            }
            */
            return true; // default: false.
         }
      },
      {
         name: "email",
         type: "input",
         message: "Provide employee's email: ",
         validate: function(answer){
            if(answer.length < 1){
               return console.log("A valid email is required.");
            }
            return true; // default: false.
         }
      },
      {
         name: "github",
         type: "input",
         message: "Provide employee's GitHub username: ",
         when: (answers) => answers.role === "Engineer", // show only if "Engineer" was selected for the "role".
         validate: function(answer){
            if(answer.length < 1){
               return console.log("A valid GitHub usernmae is required.");
            }
            return true; // default: false.
         }
      },
      {
         name: "school",
         type: "input",
         message: "Provide employee's school: ",
         when: (answers) => answers.role === "Intern", // show only if "Intern" was selected for the "role".
         validate: function(answer){
            if(answer.length < 1){
               return console.log("A valid school info is required.");
            }
            return true; // default: false.
         }
      },
      {
         name: "more_employee",
         type: "confirm", // "y/N" question
         message: "Would you like to add more team members?",
         default: false // so, if a user does not give answer (i.e., y/n), then it will be automatically "N"
      }
   ];
   return inquirer // Note, you should include "return"; why???
   .prompt(questions) // receive manager info from prompt
   .then(answers => {
      // with the given user answers, let's create a either "Employee" or "Intern" class
      //const{role,name,id,email,github,school,more_employee} = answers;
      let role = answers.role;
      let name = answers.name;
      let id = answers.id;
      let email = answers.email;
      let github = answers.github;
      let school = answers.school;
      let more_employee = answers.more_employee;

      // Now, let's construct either "Engineer" or "Intern" class based on the user-provided "role"
      let employee;
      if(role === "Engineer"){
         employee = new Engineer(name,id,email,github);
      }else if(role === "Intern"){
         employee = new Intern(name,id,email,school);
      }
      console.log("Provided employee info: ", employee); // display the provided employee info to confim
      
      // Now, push (i.e., add) "employee" into "team", which is an array that includes all the team members:
      team.push(employee);

      // if "confirm_add_employee" is "true", recall add_employee function with updated "team" array.
      // else, just return current "team" array. 
      if(more_employee){
         console.log("Team: ", team);
         //return add_employee(team);
         return add_employee();
      }else{
         console.log("Team: ", team);
         return team;
      }
   })
   .catch(error=>{
      if(error.isTtyError){
         // Prompt couldn't be rendered in the current environment.
      }else{
         // Something else went wrong.
      }
   }); // End of inquirer
};

// : ===========================================================!

add_manager()
   .then(add_employee) // this will include team members
   .then(team => {
      return generate_html(team);
   })
/*   
   .catch(err=>{
      console.log(err)
   });
*/

/*
function Employee(){
   // (1) receive employee's name from user input
   this.getName = function(){
      const questions = [
         {
            name: "employee_name",
            type: "input",
            message: "Provide employee's name (provide Manager's name first, then include team members): ",
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
*/