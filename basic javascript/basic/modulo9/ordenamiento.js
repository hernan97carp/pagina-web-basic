
let array =[2,6,3,4,1,5];
let aux;
for(let i= 0;i< array.length - 1;i++){
   for(let j=i+1; j <array.length;j++){
      if(array[i] > array[j]){
       aux= array[i];
       array[i]= array[j];
       array[j]= aux;    
      }
   }
}
console.log(array);