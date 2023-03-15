function fib(numMax){
    for(var fibArray = [0,1], i=0,j=1,k=0; k<numMax;i=j,j=x,k++ ){
        x=i+j;
        fibArray.push(x);
    }
    return fibArray;
}
// console.log(fib(10));

module.exports = fib;