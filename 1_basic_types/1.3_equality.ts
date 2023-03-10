// Equality Operators
// TypeScriptben és JavaScriptben két egyenlőségjel van: == és ===

// A === az igazi egyenlőség, és ezt használjuk általában.
const arr = [2, 3, '3', 3n, [3]]
console.log(arr.filter((x) => x === 3))

// A == operátor bajosabb:
// console.log(arr.filter((x) => x == 3))
// TODO próbáld ki a fenti sort!

let result: number | string
if (something()) {
  result = 3
} else {
  result = '3'
}
console.log('== "3"', result == '3') // true
console.log('=== "3"', result === '3') // false
console.log('== 3', result == 3) // true
console.log('=== 3', result === 3) // true

// TODO mi a szabály?

// ezt használjuk fent
function something() {
  return true
}

// Referenciák
const a = { name: 'Joe' }
const b = a

// TODO mi történik, ha b.name-t megváltoztatom? Tippeld meg, majd próbáld ki!
// Tipped:
// Válasz:

// TODO Igazak-e az alábbi egyenlőségek?
// console.log('a === b', a === b)
// console.log('a == b', a == b)

// Egyező objektumok
const c = { name: 'Joe' }
const d = { name: 'Joe' }

// TODO mi történik, ha d.name-t megváltoztatom? Tippeld meg, majd próbáld ki!
// Tipped:
// Válasz:

// TODO Igazak-e az alábbi egyenlőségek?
// console.log('c === d', c === d)
// console.log('c == d', c == d)

// TODO mi a szabály?

// Próbáld ki a fentieket tömbökkel is:
// TODO Hozz létre egy tömböt és tedd be egy másik változóba!
// TODO Írd át az egyik elemét a második változóban!
// TODO Nézd meg, hogy változtt-e az eredeti tömbben is!
// TODO Írd ki az egyenlőségeket!
// TODO Hozz létre egy másik tömböt, aminek az elemei ugyanazok, mint az elsőben!
// TODO Írd ki az egyenlőségeket!
// TODO Ugyanaz a szabály, mint az objektumoknál?
