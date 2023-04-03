function quickSort(array) {
    // Implementar el método conocido como quickSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
  
  if(array.length <= 1) return array
  let pivote= Math.floor(array.length / 2)
  let left= []
  let right=[]
  for(let i = 0; i< array.length;i++){
   if(i !== pivote){// si i es diferente a pivote entra para q no compare a pivote oseea que no se compare a si mismo
    if(array[i] <= array[pivote]){
      left.push(array[i])
    }
    else{
    right.push(array[i])
    }
   }
  
  } 
  return quickSort(left).concat(array[pivote]).concat(quickSort(right))
  } 
  console.log(quickSort([5, 1, 4, 2, 8]))
