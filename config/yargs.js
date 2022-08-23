
const argv=require("yargs")
.options("b",{
    alias:"base",
    type:"number",
    demandOption:true,
    describe:"Es la base de la tabla de multiplicar"
})
.option("l",{
     alias:"listar",
    type:"boolean",
    default:false,
    describe:"Muestra la tabla en consola"
})
.option("h",{
    alias:"hasta",
    type:"number",
    describe:"Multiplicacion hasta el numero que pidas"
})
.check((argv,options)=>{
    if(isNaN(argv.b)){
       
     throw"La base tiene que ser un número"
    }
    return true
})
.argv;

module.exports=argv


/* 
 .options({
    "b":{
        alias:"base",
        type:"number",
        demandOption:true
        },
    "l":{
        alias:"listar",
        type:"boolean",
        default:false
        }  
}) 
.argv;

 */
//option(listar)
/* listar 
boolean */
/* default:false */
