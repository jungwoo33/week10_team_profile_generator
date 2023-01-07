// call "Employee" class
const Employee = require('../lib/Employee');

describe("Employee tests",()=>{
   // let's define the new class here (not in each test):
   //const employee = new Employee("Jungwoo Lee", 33, "jungwoo33@gmail.com"); // (name, id, email)
   test("check if a new 'Employee' object is created",()=>{
      let employee = new Employee("Jungwoo Lee", 33, "jungwoo33@gmail.com"); // (name, id, email)
      //expect(employee.name).toEqual("Jungwoo Lee");
      //expect(employee.id).toEqual(33);
      //expect(employee.email).toEqual("jungwoo33@gmail.com");
      
      // this approach is identical to above approach (so, I will keep this approach throughout the codes...):
      expect(employee.name).toEqual(expect.any(String));
      expect(employee.id).toEqual(expect.any(Number));
      expect(employee.email).toEqual(expect.any(String));

      expect(employee.getName()).toEqual(employee.name);
      expect(employee.getID()).toEqual(employee.id);
      expect(employee.getEmail()).toEqual(employee.email);
      expect(employee.getRole()).toEqual("Employee");
   });

   /*
   // I am putting all these tests into the first test:
   test("getName() test",()=>{
      expect(employee.getName()).toEqual(employee.name);
   });
   test("getID() test",()=>{
      expect(employee.getID()).toEqual(employee.id);
   });
   test("getEmail() test",()=>{
      expect(employee.getEmail()).toEqual(employee.email);
   });
   test("getRole() test",()=>{
      expect(employee.getRole()).toEqual("Employee");
   });
   */
})
