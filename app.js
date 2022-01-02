const crearTabla = require("./helpers/multiplicar");
const argv = require("./config/yargs");
const colors = require("colors");
// console.log(process.argv);
// const [, , arg3] = process.argv;
// const [, base] = arg3.split("=");

console.clear();

// console.log(argv);

crearTabla(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, "creado"))
  .catch((err) => console.log(err));
