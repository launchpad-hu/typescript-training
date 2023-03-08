// 1.2 - Data Structures

// object
let person: { name: string; age: number } = {
  name: 'Alice',
  age: 22,
}
// TODO mi a person fordítási idejű (TypeScript) típusa?
// Válasz:
// segítség: mutass rá az egérrel a változóra!
// TODO mi a person futásidejű (JavaScript) típusa?
// Válasz:
// segítség:
//console.log('person is', typeof person);

// TODO mi a fordítási idejű (TypeScript) típusa az alábbi kifejezésnek?
person.name
// Válasz:

// TODO adj hozzá egy új tulajdonságot a person objektumhoz, és írd be a típusát!

/* TODO adj hozzá egy address tulajdonságot a person objektumhoz, ami szintén egy
   objektum, és a cím egyes részeit tartalmazza (street, city, country, zipCode)!  */


// Array - tömb
let nyerőszámok: number[] = [1, 2, 3]
// TODO mi a futásidejű (JavaScript) típusa a nyerőszámok tömbnek?
let tegnapiNyerőszámok: Array<number> = [4, 5, 6]
// TODO mi a tegnapiNyerőszámok fordítási idejű (TypeScript) típusa?
// Add meg olyan formában, ahogy az IDE kiírja, ha rámutatsz az egérrel!
// Válasz:

// TODO Hozz létre egy listát, amelyben sztringek vannak!
// let nevek = ...

// TODO Hozz létre egy listát, amelyben sztringek és számok is vannak!
// const stringsAndNumbers = ...
// TODO mi ennek a listának a fordítási idejű (TypeScript) típusa?

// TODO adj hozzá egy új számot a nyerőszámok végére!

// TODO szúrj be egy új számot a nyerőszámok közé középre!

console.log('Nyerőszámok:')
for (let i = 0; i < nyerőszámok.length; i++) {
  console.log(nyerőszámok[i])
}
// TODO írd ki a tegnapiNyerőszámok tömböt számlálós for ciklussal!

// TODO írd ki a nevek listát forEach ciklussal!

// TODO írd ki a sztringek és számok listáját for(of) ciklussal!
// for (let item of stringsAndNumbers) {

// TODO cseréld le a for(of) ciklusban a let-et const-ra! Működik így is?

// TODO írd ki a nyerőszámokat vesszővel elválasztva! Legyen a vessző után szóköz (pl.: 1, 2, 3)!
// Segítség: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

// Tuple - rendezett n-es
// fix hosszúságú tömb, az egyes elemeknek pedig fix típusa van
let x: [string, number]
x = ['hello', 10] // OK
x = [20, 'goodbye'] // ERROR
console.log(typeof x[0], typeof x[1])
// TODO Javítsd a hibát!

// Map - asszociatív tömb / hash tábla / leképezés / szótár / kulcs-érték párok
const scores = new Map<string, number>()
scores.set('Alice', 10)
scores.set('Bob', 20)
scores.set('Charlie', 30)
// TODO írd ki Charlie pontszámát!
// TODO töröld ki Alice-t a Map-ből!
console.log('Scores:')
scores.forEach((score, name) => {
  console.log(`${name}: ${score}`)
})
// TODO alakítsd át a fenti ciklust for(of) ciklussá!
// for (let [name, score] of scores) {

// Set - halmaz
const winners = new Set<string>()
winners.add('Alice')
winners.add('Bob')
console.log('Winners:', Array.from(winners).join(', '))
// TODO töröld ki Bob-ot a Set-ből!
// TODO írd ki, hogy Bob benne van-e a Set-ben!
// TODO add hozzá Charlie-t a Set-hez!
// TODO írd ki ezután a Set tartalmát!
// TODO írd ki a Set elemszámát!
// TODO írd ki a Set tartalmát for(of) ciklussal!
