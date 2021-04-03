function log(){
    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;
    if (login=="admin" && password=="5677"){
        document.location.href='menu.html';
    }
    else
    {
        document.location.href='index.html';
    }
}
const sqlite = require('sqlite3');
//const db = new sqlite.Database('./public/db.sqlite3', (err) => {
//    if (err) console.error('Database opening error: ', err);
//});
//db.run()
// let db = new sqlite3.Database('avto');
async function main () {
    console.log('Start');
    let db = await new Promise((resolve, rejectc) =>{
        let db = new sqlite.Database('avto', (err) => {
            if (err) {
              return rejectc(err.message);
            }
            console.log('Connected to the in-memory SQlite database.');
            resolve(db);
            
        })
    });
    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Close the database connection.');
    });
      console.log('finish cmd');
    };
    
async function main2 () {
    console.log('start');
    let db = new sqlite.Database('avto');
    console.log('Connected to the in-memory SQlite database.');
    db.close();
    console.log('end')
    
}

main2();
