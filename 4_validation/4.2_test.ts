// node --loader=ts-node/esm 4_validation/4.2_test.ts
import assert from 'node:assert'
import test from 'node:test'
import { validate } from './4.1_validate'
//import { validate } from './4.3_zod'

// Ezzel a fájllal le lehet tesztelni, hogy a 4.1-ben készülő validat függvény jó-e
// node --loader=ts-node/esm 4_validation/4.2_test.ts

// TODO fejezd be a teszteket: a country és az emails még nincs tesztelve

const person = {
  name: 'John Doe',
  age: 42,
  address: {
    streetAddress: '123 Main St',
    city: 'Anytown',
    stateOrProvince: 'CA',
    zipCode: '12345',
    country: 'USA',
  },
  emails: ['hello@example.com'],
}

test('good', () => assert.doesNotThrow(() => validate(person)))
test('must be an object', () => {
  assert.throws(() => validate('John Doe'))
})
test('name must be a string', () => {
  assert.throws(() => validate({ ...person, name: 42 }))
})
test('age must be a number', () => {
  assert.throws(() => validate({ ...person, age: '42' }))
})
test('address must be an object', () => {
  assert.throws(() => validate({ ...person, address: '123 Main St' }))
})
test('streetAddress must be a string', () => {
  assert.throws(() =>
    validate({ ...person, address: { ...person.address, streetAddress: 42 } })
  )
})
test('city must be a string', () => {
  assert.throws(() =>
    validate({ ...person, address: { ...person.address, city: 42 } })
  )
})
test('stateOrProvince must be a string', () => {
  assert.throws(() =>
    validate({ ...person, address: { ...person.address, stateOrProvince: 42 } })
  )
})
test('zipCode must be a string', () => {
  assert.throws(() =>
    validate({ ...person, address: { ...person.address, zipCode: 42 } })
  )
})
