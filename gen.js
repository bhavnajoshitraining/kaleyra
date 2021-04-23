// natural numbers
function* nNext(){
   var natnum =1;
   while(true){
       yield natnum++
   }
}
var g = nNext();
for(var i =0;i<10;i++){
    console.log(g.next().value);
    console.l
}
a=g.next();
console.log(a)
a=g.next()
console.log(a)
