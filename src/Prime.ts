function Prime (number:number):boolean{
  let isPrime=true;
  if (number<2){
    isPrime=false;
  }
  else if (number>2){
    for (let i=2;i<=Math.sqrt(number);i++){
      if (number% i==0){
        isPrime=false;
        break;
      }
    }
  }return isPrime;
}
let array=[Math.random()*1];
console.log(array);
let sum=0;
for (let number of array){
  if (Prime(number)){
    sum+=number;
  }
}
console.log("Tổng các số nguyên tố trong mảng trên là: " + sum)
