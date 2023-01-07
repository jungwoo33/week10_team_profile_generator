// call "Manager" class
const Manager = require('../lib/Manager');

describe("Manager tests",()=>{
   // let's define the new class here (not in each test):
   //const manager = new Manager("Jungwoo Lee", 33, "jungwoo33@gmail.com", 123); // (name, id, email, office_num)
   test("check if a new 'Manager' object is created",()=>{
      let manager = new Manager("Jungwoo Lee", 33, "jungwoo33@gmail.com", 123); // (name, id, email, office_num)
      expect(manager.name).toEqual(expect.any(String));
      expect(manager.id).toEqual(expect.any(Number));
      expect(manager.email).toEqual(expect.any(String));
      expect(manager.office_num).toEqual(expect.any(Number));

      expect(manager.getRole()).toEqual("Manager");
   });
   /*
   test("getRole() test",()=>{
      expect(manager.getRole()).toEqual("Manager");
   });
   */
})
