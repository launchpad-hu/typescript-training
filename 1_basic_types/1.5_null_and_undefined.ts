// null és undefined

// A JavaScript-ben és TypeScript-ben két érték van a "semmi" jelölésére, az undefined és a null.

// null és undefined
let u: undefined = undefined
let n: null = null
// console.log('u is', typeof u)
// console.log('n is', typeof n)
// TODO futtasd a fenti logolásokat - milyen furcsát veszel észre?
// Válasz:

const num = 0

// TODO próbáld ki az alábbi egyenláség-vizsgálatokat, és nézd meg, hogy milyen eredményt kapsz!
// console.log('num === undefined', num === undefined)
// Válasz:
// console.log('num == undefined', num == undefined)
// Válasz:
// console.log('num === null', num === null)
// Válasz:
// console.log('num == null', num == null)
// Válasz:
// console.log('undefined === null', undefined === null)
// Válasz:
// console.log('undefined == null', undefined == null)
// Válasz:

// TODO fogalmazd meg a szabályt, ami alapján a fenti kifejezések működnek!
// Válasz:

// TODO próbáld ki az alábbi egyenlőség-vizsgálatokat, és nézd meg, hogy milyen eredményt kapsz!
// console.log('num !== undefined', num !== undefined)
// Válasz:
// console.log('null !== undefined', null !== undefined)
// Válasz:
// console.log('undefined != null', undefined != null)
// Válasz:

// "vagy null" és "vagy undefined" fordítási idejű (TypeScript) típusok
const birthYear: number = 1980
const marriageYear: number | null = null

// TODO írd ki a marriageYear-t, de szép formában, ha null, akkor azt írd ki, hogy "(nincs)"
// használj if-et

// TODO ugyanez, csak használd a ? : operátort

// TODO ugyanez, csak használd a ?? operátort

// A ? a típusdefinícióban azt jelenti, hogy nem kötelező megadni az értéket
type Person = {
  name: string
  birthYear: number
  marriageYear?: number | null
  address?: string
}

// TODO hozz létre egy Person típusú változót, ahol az address mező nincs megadva
// const joe =

// TODO mi futásidőben a joe.address típusa? Írd ki a típust!
// Válasz:

// TODO hozz létre egy Person típusú változót, ahol az address mező meg van adva
// const jane =

// TODO írd ki jane.address-t

/* TODO írj egy függvényt, ami kiírja egy személy adatait. A függvény paraméterként egy Person típusú
   változót várjon */

// TODO ha nincs megadva a személy lakcíme, akkor írja ki a függvény, hogy "nincs megadva". Használd a ?? operátort!
/* TODO ha a marriageYear nincs megadva vagy undefined, akkor azt írja ki, hogy "nincs megadva",
   ha null, akkor azt írja ki, hogy "nem házasodott meg"*/
