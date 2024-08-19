import { conectar } from "../modelo/db_conectar.js";
import  axios from 'axios';
import moment from 'moment';
const ahora = Date.now();

var crud_cliente =({});
crud_cliente.leer = (req,res)=>{
    conectar.query('SELECT DATE_FORMAT(llave_user,"%Y-%m-%d %H:%i:%s") iduser, llave descripcion, valor, DATE_FORMAT(created_at, "%Y-%m-%d %H:%i:%s") creado FROM reg_chatbot WHERE DATE_FORMAT(created_at, "%Y-%m-%d") = ? ORDER by llave_user desc;',[moment(ahora).format('YYYY-MM-DD')],(error,results)=>{
        if (error){
            throw error;

    }else{
    res.render('clientes/index',{resultado:results})
    }
})
};
crud_cliente.cud = (req,res)=>{
    
    const btn_actualizar = req.body.btn_actualizar;
  
    const fecha_nacimiento = req.body.txt_fn;

    if (btn_actualizar){
         conectar.query('SELECT DATE_FORMAT(llave_user,"%Y-%m-%d %H:%i:%s") iduser, llave descripcion, valor, DATE_FORMAT(created_at, "%Y-%m-%d %H:%i:%s") creado FROM reg_chatbot WHERE DATE_FORMAT(created_at, "%Y-%m-%d") = ? ORDER by llave_user desc;',[fecha_nacimiento],(error,results)=>{
            console.log(fecha_nacimiento);
                if(error){
                console.log(error);
            }else{
                res.render('clientes/index',{resultado:results})
            }
        });
       
    }
  
    
    
};

export {crud_cliente}
