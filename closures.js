function Counters(){
    var count = 0;
    function IncreaseCounter(){
        return count += 1;
    };
    return IncreaseCounter;
}

var counter = Counters();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());