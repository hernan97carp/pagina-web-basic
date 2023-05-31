const estatusPedido = () => {
  return Math.random() < 0.8;
};

const miPedidoPizza = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (estatusPedido()) {
      resolve("pedido hecho con exito");
    } else {
      reject("pedido rechazado");
    }
  }, 3000);
});

// const manejarPedido = (requestedMessage) => {
//   console.log(requestedMessage);
// };
// const rechazarPedido = (rejectMessage) => {
//   console.log(rejectMessage);
// };
// miPedidoPizza.then(manejarPedido, rechazarPedido);

//otra forma mejor seria

miPedidoPizza
  .then((requestedMessage) => {
    console.log(requestedMessage);
  })
  .then(null, (rejectMessage) => {
    console.log(rejectMessage);
  });

// miPedidoPizza.then(requestedMessage).catch(rejectMessage)

// const estatusPedido = () => {
//   const estatus = Math.random() < 0.8;
//   console.log(estatus);
//   return estatus;
// };

// for (let i = 0; i < 10; i++) {
//   console.log(estatusPedido());
// }
