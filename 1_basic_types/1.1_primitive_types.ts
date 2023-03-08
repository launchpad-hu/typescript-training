// 1.1 - Primitive Types

// Helló! Ez a TypeScript Edzés első fejezete. A feladatokat a TODO kommentekben találod.
// TODO ellenőrizd, hogy aláhúzza-e a szerkesztőd a TODO kommenteket. Ha nem, konfiguráld be az eslint-et!
// TODO töröld a TODO szót a sor elejéről, ha kész vagy vele!

// TODO futtasd ezt a fájlt ts-node-dal (ts-node 1_basic_types/1.1_primitive_types.ts), és nézd meg a kimenetet!
// TODO lesznek benne hibák, ezért nem fut. Futtasd `ts-node -T` paranccsal! (Ez a hibák ellenére futtatja.)

// Fontos tudni, hogy a TypeScript fordítási idejű (compile time) típusrendszerének
// a célja, hogy a hibákat a fordítási időben (compile time) jelezze. Ezek a típusok és
// a hibák csak fordítási időben jelennek meg, futási időben (runtime) nincs hatásuk.
// A TypeScript kód JavaScript kódra fordul, és ez fut futási időben.
// A JavaScript-nek is van egy típusrendszere, és kicsit más, mint a TypeScript-nek.

// Nézzük sorban a típusokat!

// Az első típus a boolean
let isDone = false
console.log('isDone is', typeof isDone)
// TODO Írd be a TypeScript típusdeklarációt a változóhoz! (kettőspont és a típus neve)
// TODO nézd meg a console.log kimenetét, és nézd meg, hogy mi a futásidejű (JavaScript) típusa!
// Válasz:

// number
let szám: number = 6
console.log('szám is', typeof szám)
/* TODO Töröld ki a típusdeklarációt, és ellenőrizd az egérrel rámutatva,
  hogy így is ugyanaz-e a fordítási idejű (TypeScript) típusa!*/

// NaN azaz not a number
const notANumber = NaN
// TODO mi a NaN fordítási idejű (TypeScript) típusa?
// Válasz:
// TODO mi a NaN futásidejű (JavaScript) típusa?
// Válasz:

// string
let color: string = 'blue'
color = 'red'
color = 333
console.log('color is', typeof color)
// TODO Javítsd ki a hibát!

// enum
enum Role {
  Admin,
  Moderator,
  NormalUser,
}
let role: Role = Role.Admin
// TODO - szerinted mi lehet role futásidejű (JavaScript) típusa? Tippeld meg, aztán futtasd az alábbit!
// Tipped:
// console.log('role is', typeof role)
// TODO írd ki a futásidejű értékét is
// console.log('role =', role)

// any
let notSure: any = 4
notSure = 'maybe a string instead'
notSure = false
// TODO mi a notSure fordítási idejű (TypeScript) típusa a második értékadás után?
// Válasz:
// TODO mi lesz a futásidejű (JS) típusa a notSure-nek az egyes értékadások után?
// Válasz:
// TODO Ellenőrizd úgy, hogy beírsz console.log(typeof notSure)-t mindhárom helyre!

// void
function warnUser(): void {
  console.log('This is my warning message')
}
// A void azt jelenti, hogy nincs visszatérési érték.
// De futásidőben (JavaScript) mégis van. Mi lehet az?
// TODO - tippeld meg, aztán logold ki!
// Tipped:
// Mit írt ki:
// TODO Vigyázz, ne maga a függvény típusát logold ki, hanem hívd meg, és a visszatérési értékének típusát!

// never
function error(message: string): never {
  throw new Error(message)
}
// TODO fogalmazd meg, hogy mi lehet a never típus lényege
// Válasz:
// TODO mi lehet a never típus futásidejű (JS) típusa? (becsapós kérdés)
// Válasz:

// Type assertions (típusnyilatkozat?)
let someValue: any = 'this is a string'
let strLength: number = (someValue as string).length
// Nyilatkozunk a TS fordító számára, hogy biztos vagyunk benne, hogy a változó
// futási időben biztosan az adott típusú lesz. Ez a fordítási idejű (TypeScript)
// típust beállítja, de futási időben (JavaScript) nics semmi hatása.
/* TODO hozz létre egy változót, ami a someValue változó értékét tartalmazza
   de a fordítási idejű (TS) típusa - helyesen - string! */
