const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Base",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    demandOption: false,
    default: false,
    describe: "Lista tabla en consola",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    demandOption: false,
    default: 10,
    describe: "limite de la tabla",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      console.log("La base debe ser un numero");
    }
    return true;
  }).argv;

module.exports = argv;
