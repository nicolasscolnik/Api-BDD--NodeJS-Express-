const fs = require("node:fs");

const read = () => {
  try {
    return fs.readFileSync("./package.json", "utf-8");
  } catch (error) {
    return error;
  }
};

const write = (param) => {
  try {
    fs.writeFileSync("./package.json", param);
    return "salio todo ok";
  } catch (error) {
    return error;
  }
};

const append = (param) => {
  try {
    fs.appendFileSync("./archivo.txt", param);
    return "salio todo ok";
  } catch (error) {
    return error;
  }
};

console.log('------------------')
console.log(read());
console.log('------------------')
// console.log(write("pepa pig"));
// console.log(append("\npepapig"));
// console.log(append("\npepapig"));
//modificar el package.json y agregar el script "start":"node ."

const modificarJson = () => {
    const jsonContent = read(); // Llama a la función 'read' para obtener el contenido del archivo
    let jsonObject;
  
    try {
      jsonObject = JSON.parse(jsonContent); // Intenta parsear el contenido JSON en un objeto JavaScript
      // Ahora puedes trabajar con 'jsonObject' como un objeto JavaScript
      jsonObject.scripts.start = "node .";// Por ejemplo, acceder a la propiedad 'name' del JSON
      jsonString = JSON.stringify(jsonObject, null, 2);
      write(jsonString);
      console.log(read());
    } catch (error) {
      console.error("Error al analizar el JSON:", error);
    }
  };
  
  modificarJson(); // Llama a la función 'modificarJson' para iniciar el proceso
//   Asegúrate de que tengas fs requerido al principio de tu archivo y de manejar los errores adecuadamente, ya que tanto la lectura del archivo como el análisis del JSON pueden generar excepciones en caso de problemas.
  
  
  
  
  
  