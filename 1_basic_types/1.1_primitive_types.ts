// 1.1 - Primitive Types

// Helló! Ez a TypeScript Edzés első fejezete. A feladatokat a TODO kommentekben találod.

// A TypeScriptet azért használjuk, hogy a JavaScript kódunkat már fordítási időben
// (compile time) ellenőrizzük. Elsősorban azt ellenőrzi, hogy a változókban
// a helyes típusú értékek vannak-e.

// A TypeScript kód JavaScript kódra fordul, és ez fut futási időben (run time).
// A JavaScript-nek is van egy típusrendszere, és kicsit más, mint a TypeScript-nek.

// Nézzün néhány elemi típust (primitive types)!

let isDone: boolean = false
let szám: number = 0 / 0 // NaN, Not a Number
let color: string = 'blue'
console.log(`${isDone} is ${typeof isDone}`)
console.log(`${szám} is ${typeof szám}`)
console.log(`${color} is ${typeof color}`)

// TODO futtasd a fájlt, és nézd meg, hogy melyik értéknek mi a futásidejű (JavaScript) típusa?
// $ ts-node -T 1_basic_types/1.1_primitive_types.ts
