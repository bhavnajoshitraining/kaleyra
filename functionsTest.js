function multiply(x){
   function myfun(y){
       return x+y;
   }
   return myfun;
}

var x=multiply(3)
a=x(2);
console.log(x);
console.log(a);
a=x(8);
console.log(a);
