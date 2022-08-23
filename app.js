

const multiplicar=require("./helpers/multiplicar")
const argv=require("./config/yargs")
const colors=require("colors")
console.clear();

multiplicar(argv.b ,argv.l)
.then(nombreArchivo=>console.log(nombreArchivo.red,"creado"))
.catch(err=>console.log(err))