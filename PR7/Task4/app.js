const cookBreakfast = require('./task4.js'); 

cookBreakfast("Lipton", null, "Bread", "Sausage", "Butter")
    .then(() => console.log("bon appetit!"))
    .catch(error => console.error(error.message));
