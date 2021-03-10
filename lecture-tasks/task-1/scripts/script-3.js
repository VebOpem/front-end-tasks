var a = 'The Quick Brown Fox'
console.log(a)

var ans = a.split('').map(function(c){
  return c === c.toUpperCase()
  ? c.toLowerCase()
  : c.toUpperCase()
}).join('')

console.log(ans)