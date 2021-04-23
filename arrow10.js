function average() {
    return (() => {
      const length = arguments.length;
  
      if (length == 0) return 0;
  
      const numbers = Array.prototype.slice.call(arguments);
      const sumReduceFn = function (a, b) { return a + Number(b) };
  
      return numbers.reduce(sumReduceFn, 0) / length;
    })();
  }

  x=average(1,2,3,4)
  console.log(x)