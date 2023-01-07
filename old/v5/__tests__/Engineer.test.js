// call "Engineer" class
const Engineer = require('../lib/Engineer');

describe("Engineer tests",()=>{
   // let's define the new class here (not in each test):
   //const engineer = new Engineer("Jungwoo Lee", 33, "jungwoo33@gmail.com", "jungwoo33"); // (name, id, email, github)
   test("check if a new 'Engineer' object is created",()=>{
      let engineer = new Engineer("Jungwoo Lee", 33, "jungwoo33@gmail.com", "jungwoo33"); // (name, id, email, github)
      expect(engineer.name).toEqual(expect.any(String));
      expect(engineer.id).toEqual(expect.any(Number));
      expect(engineer.email).toEqual(expect.any(String));
      expect(engineer.github).toEqual(expect.any(String));

      expect(engineer.getRole()).toEqual("Engineer");
      expect(engineer.getGithub()).toEqual(engineer.github);
   });
   /*
   test("getRole() test",()=>{
      expect(engineer.getRole()).toEqual("Engineer");
   });
   test("getGithub() test",()=>{
      expect(engineer.getGithub()).toEqual(engineer.github);
   });
   */
})
