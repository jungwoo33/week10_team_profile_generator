/* test...
const jw = (data) => {
   const jw1 = data[0];
   console.log(jw1);
}
module.exports = jw;
*/
//! =============================================================================================!
// generate each team member's info card: =======================================================!
const generate_manager = function(manager){
   return `
   <div class="each_person" id="p1">
      <div class="each_person_header">
         <p class="each_person_name">${manager.name}</p>
         <p class="each_person_level"><i class="fa-sharp fa-solid fa-user-pen"></i> Manager</p>   
      </div>
      <div class="each_person_body">
         <p class="id">ID: ${manager.id}</p>
         <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
         <p class="office">Office number: ${manager.office_num}</p>
      </div>
   </div>
   `;
}

const generate_engineer = function(engineer){
   return `
   <div class="each_person" id="p1">
      <div class="each_person_header">
         <p class="each_person_name">${engineer.name}</p>
         <p class="each_person_level"><i class="fa-sharp fa-solid fa-user-gear"></i> Engineer</p>
      </div>
      <div class="each_person_body">
         <p class="id">ID: ${engineer.id}</p>
         <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
         <p class="github">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
      </div>
   </div>
   `;
}

const generate_intern = function(intern){
   return `
   <div class="each_person" id="p1">
      <div class="each_person_header">
         <p class="each_person_name">${intern.name}</p>
         <p class="each_person_level"><i class="fa-sharp fa-solid fa-user-graduate"></i> Intern</p>
      </div>
      <div class="each_person_body">
         <p class="id">ID: ${intern.id}</p>
         <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
         <p class="school">School: ${intern.school}</p>
      </div>
   </div>
   `;
}
// End of team member info card ==================================================================!

// generate main html page: ===============================================!
const generate_html_main_page = function(employee_card){
   return `
   <!DOCTYPE html>
   <html lang="en">
      <head>
         <meta charset="UTF-8" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <title>Team Profile Generator</title>
         <!--<link rel="stylesheet" type="text/css" href="./assets/css/normalize.css" />-->
         <link rel="stylesheet" type="text/css" href="./assets/css/reset_v1.css" />
         <link rel="stylesheet" type="text/css" href="./assets/css/style_v1.css" />
         <!-- include font awesome icons -->
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
      </head>
   
      <body>
         <header>
            <h1>My Team</h1>
         </header>
   
         <main>         
            <div class="container_box">
               <!--
               <div class="person" id="p1"></div>
               <div class="person" id="p2"></div>
               ...
               -->
               ${employee_card}
            </div>
            <!--
            <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
            <script type="module" src="./assets/js/script_v8.js"></script>
            -->
         </main>
      </body>
   </html>      
   `;
}


// This is the main function =====================================================================!
const generate_html = (team) => {
   // Create an empty array that includes all html contents,
   // then, generate each person's info card:
   const page_array = [];
   for(let i=0; i<team.length; i++){
      const employee = team[i];
      const role = employee.getRole(); // either "manager", "engineer", or "intern"

      // create each person's card depending on his/her role:
      if(role === "Manager"){
         const manager_card = generate_manager(employee);
         // push (i.e., add) "manager_card" into "page_array", which is an array that includes all the page contents:
         page_array.push(manager_card);
      }else if(role === "Engineer"){
         const engineer_card = generate_engineer(employee);
         // push (i.e., add) "engineer_card" into "page_array", which is an array that includes all the page contents:
         page_array.push(engineer_card);
      }else if(role === "Intern"){
         const intern_card = generate_intern(employee);
         // push (i.e., add) "intern_card" into "page_array", which is an array that includes all the page contents:
         page_array.push(intern_card);
      }
   }
   // now, let's join strings into "employee_card"
   const employee_card = page_array.join('');

   // then, return to generate html page:
   const generate_team = generate_html_main_page(employee_card);
   return generate_team;
}


module.exports = generate_html;
