// import { error } from "node:console";
import fs from "node:fs";
import { stringify } from "node:querystring";
// console.log(`🚀 ~ fs:`, fs)

// forma1
// const read = () => {
//   return (
//     fs.promises
//       .readFile("./package.json", "utf-8")
//       //     .then((data) => console.log(data));
//       .then(console.log)
//   );
// };
// // forma2
// const read = () => {
//   return fs.promises.readFile("./package.jso", "utf-8");
// };
// read()
//   .then(console.log)
//   .catch((error) => console.log(error.message));
// console.log(`🚀 ~ read ~ read:`, read());

// forma3
const read = async () => {
    try {
        const data = await fs.promises.readFile("./package.json", "utf-8");
        console.log(`🚀 ~ read ~ data:`, data);
    } catch (error) {
        console.log(`🚀 ~ read ~ error:`, error.message);
    }
};



const modify = async (url) => {
    try {
        let data = await fs.promises.readFile(url, "utf-8");
        data = JSON.parse(data);
        data.scripts.start = "node .";
        data = JSON.stringify(data, null, 2);
        await fs.promises.writeFile(url, data);
        console.log(`🚀 ~ read ~ data:`, data);
    } catch (error) {
        console.log(`🚀 ~ read ~ error:`, error.message);
    }
};

//tarea modificar el package.json y agregar start:"node ."
read();
modify("./package.json");