function primo(a) {
    for (var i = 2; i < a; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
  return numero !== 1;
}
  
// document.write(primo(5)); 
// // true
module.exports = primo;
