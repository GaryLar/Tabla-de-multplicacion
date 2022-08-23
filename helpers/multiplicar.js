
const fs=require("fs");
const colors=require("colors")
const numeroX=require("../config/yargs")
const crearArchivo=async (base=5,listar)=>{
    try{
        let salida=""
        for (let index = 1; index < numeroX.h+1; index++) {
            salida += `${index} x ${base} = ${index*base}\n`;  
        }
        
        if(listar==true){
        console.log("==============".green);
        console.log("Tabla del:", colors.bgBlue( base),`|| Solo se muestran ${numeroX.h} multiplicaciones`);
        console.log("==============".green);
        
        console.log(salida);
    }
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida)
    
        return(`tabla-${base} creada`);
    }catch(err){
        throw err
    }
   

}

module.exports=crearArchivo
