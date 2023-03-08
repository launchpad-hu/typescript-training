// Truthiness
// A truthiness azt jelenti, hogy egy érték 'truthy' vagy 'falsy' - azaz
// igaz jellegűen vagy hamis jellegűen viselkedik egy feltétel vizsgálatánál.
// A legtöbb érték truthy, de az alábbiak például falsy értékek:
//   * undefined
//   * null
//   * NaN
//   * 0
//   * '' (empty string)

const truthyValue = 'Hello, world!'

if (truthyValue) {
  console.log('Truthy!')
} else {
  console.log('Falsy!')
}

// TODO próbáld ki a fent felsorolt falsy értékeket, és néhány más értéket is!

// TODO truthy vagy falsy az alábbi értékek? Állapítsd meg a Boolean() függvénnyel!
// console.log('empty string', Boolean(""))
// Tipped:
// Válasz:
// console.log('empty array', Boolean([]))
// Tipped:
// Válasz:
// console.log('empty object', Boolean({}))
// Tipped:
// Válasz:
// console.log('0.0', Boolean(0.0))
// Tipped:
// Válasz:

// && - és
// Az && operátor az első operandust adja vissza, ha az falsy, egyébként pedig a második operandust.
// Ha az első operandus falsy, akkor a második operandust nem is értékeli ki.

// TODO mi lesz az eredménye a következő kódoknak? Tippeld meg, aztán futtasd!
// console.log('false && true', false && true)
// Tipped:
// Válasz:
// console.log('true && false', true && false)
// Tipped:
// Válasz:
// console.log('false && 10', false && 10)
// Tipped:
// Válasz:
// console.log('true && 10', true && 10)
// Tipped:
// Válasz:
// console.log('10 && true', 10 && true)
// Tipped:
// Válasz:
// console.log('10 && false', 10 && false)
// Tipped:
// Válasz:

// || - vagy
// TODO próbálj ki néhány a fentiekhez hasonló kifejezést, és nézd meg, hogy milyen eredményt kapsz!
