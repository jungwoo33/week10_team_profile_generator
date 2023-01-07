// construct "Employee" class - this will be the base class for other classes(i.e.g, Manager, Engineer, & Intern)
class Employee{
   constructor(name,id,email){
      this.name = name;
      this.id = id;
      this.email = email;
   }
   getName(){
      return this.name;
   }
   getID(){
      return this.id;
   }
   getEmail(){
      return this.email;
   }
   
   // return "Employee"
   getRole(){
      return 'Employee';
   }
}
module.exports = Employee;