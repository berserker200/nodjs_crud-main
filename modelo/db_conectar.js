
import mysql from 'mysql2' // o tambien const mysql = require('mysql');


  var conectar = mysql.createConnection({
    host     : 'localhost',
    port     : 3306,
    user     : 'root',
    password : '12345',
    database : 'chatbot'
});
  conectar.connect(function(err) {
      if (err) {
          console.error('Error en la conexion: ' + err.stack);
      return;
    }
 
        console.log('conexion exitosa ID: ' + conectar.threadId);
  });

  export {conectar}