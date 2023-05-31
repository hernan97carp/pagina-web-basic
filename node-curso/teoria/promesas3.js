function ordenarProducto(producto) {
  return new Promise((resolve, reject) => {
    console.log(`ordenado: ${producto} de freecodeCamp.`);
    setTimeout(() => {
      if (producto === "taza") {
        resolve("ordenando una taza ");
      } else {
        reject("este producto no esta ");
      }
    }, 2000);
  });
}
function procesarPedido(respuesta) {
  return new Promise((resolve) => {
    console.log(`the answer is:  ${respuesta}`);
    setTimeout(() => {
      resolve("gracias por tu paciencia");
    }, 4000);
  });
}

// ordenarProducto("taza")
//   .then((respuesta) => {
//     console.log("respuesta recibida");
//     console.log(respuesta);
//     return procesarPedido(respuesta);
//   })
//   .then((respuestaProcesada) => {
//     console.log(respuestaProcesada);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

async function realizarPedido(producto) {
  try {
    const respuesta = await ordenarProducto(producto);
    console.log("respuesta recibida");
    const respuestaProcesada = await procesarPedido(respuesta);
    console.log(respuestaProcesada);
  } catch (err) {
    throw err("error en la respuesta");
  }
}
realizarPedido("taza");
