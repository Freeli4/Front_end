const mainFun = require('./task3.js'); 

mainFun(5)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });
