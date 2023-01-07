// call "Intern" class
const Intern = require('../lib/Intern');

describe("Intern tests",()=>{
   // let's define the new class here (not in each test):
   //const intern = new Intern("Jungwoo Lee", 33, "jungwoo33@gmail.com", "U of Florida"); // (name, id, email, school)
   test("check if a new 'Intern' object is created",()=>{
      let intern = new Intern("Jungwoo Lee", 33, "jungwoo33@gmail.com", "U of Florida"); // (name, id, email, school)
      expect(intern.name).toEqual(expect.any(String));
      expect(intern.id).toEqual(expect.any(Number));
      expect(intern.email).toEqual(expect.any(String));
      expect(intern.school).toEqual(expect.any(String));

      expect(intern.getRole()).toEqual("Intern");
      expect(intern.getSchool()).toEqual(intern.school);
   });
   /*
   test("getRole() test",()=>{
      expect(intern.getRole()).toEqual("Intern");
   });
   test("getSchool() test",()=>{
      expect(intern.getSchool()).toEqual(intern.school);
   });
   */
})
