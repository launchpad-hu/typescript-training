// node --loader=ts-node/esm 4_validation/4.1_validate.ts
export interface Person {
  name: string
  age: number
  address: Address
  emails: string[]
}

export interface Address {
  streetAddress: string
  city: string
  stateOrProvince: string
  zipCode: string
  country: string
}

const person1 = require('./person1')
const person2 = require('./person2')

// A data1 és data2 változóban van valamilyen adat, elvileg megfelel a Person interface-nek,
// de nem tudhatjuk biztosan.

// Validáld, hogy az adat tényleg olyan formátumú-e. A validate függvény
// - ha megfelelő az adat, akkor ne csináljon semmit
// - ha nem, dobjon egy Error-t

export function validate(p: unknown) {
  // TODO
}

// pár ötlet:
// 'age' in person1
// typeof person1.age
// Array.isArray
