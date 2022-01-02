const fs = require("fs");
const colors = require("colors");

const crearTabla = async (base, listar, hasta = 10) => {
  try {
    let salida = "";
    for (let i = 1; i <= hasta; i++) {
      salida += `${base}x${i}=${base * i}\n`;
    }
    if (listar) {
      console.log("==================".green);
      console.log("   TABLA DEL: ".green, colors.blue(base));
      console.log("==================".green);
      console.log(salida);
    }
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = crearTabla;
