const mysql = require(`mysql2`);

const connection = mysql.createConnection({
    host: `localhost`,
    user:`root`,
    password:`root`,
    database: `blog`
});

connection.connect((error)=>{
    if(error) throw err;
    console.log("connetc to MySql");
    
});

module.exports = mysql;