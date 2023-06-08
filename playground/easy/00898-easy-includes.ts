/*
  898 - Includes
  -------
  by null (@kynefuk) #easy #array

  ### Question

  Implement the JavaScript `Array.includes` function in the type system. A type takes the two arguments. The output should be a boolean `true` or `false`.

  For example:

  ```ts
  type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
  ```

  > View on GitHub: https://tsch.js.org/898
*/

/* _____________ Your Code Here _____________ */

// my first try is to do U extends T[number]
// but when T is {} and U is {a: 'A'}, the condition {a: 'A'} extends {} will also be true
// I want to make sure that U is an exact match with one of the elements of T

// this challenge is somewhat similar to the one in 00004-easy-pick
// type MyPick<T, K extends keyof T> = {
//  [key in K]: T[key]
// }
// In the sense that for Pick, we pick out the fields in T where the key is an exact match of K, by indexing T with K

// In this challenge, we want to check if U is of the same type as the value of the array T
// we can't use extends for comparison, instead we can use the indexed access to check for an exact match

// We have to turn the value of the array T into the key of an object: { [V in T[number]]: V }
// if U is an exact match of any of the value in T[number], the object access will return the value indexed by the key.
// We then check if the value indexed is the same as U, and do a contional type.

// test case 10 and 14 is failing, but we've made great progress.

type Includes<T extends readonly any[], U> = {
  [V in T[number]]: V
}[U] extends U ? true : false

type testcase1 = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>
type testcase2 = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>
type testcase3 = Includes<[1, 2, 3, 5, 6, 7], 7>
type testcase4 = Includes<[1, 2, 3, 5, 6, 7], 4>
type testcase5 = Includes<[1, 2, 3], 2>
type testcase6 = Includes<[1, 2, 3], 1>
type testcase7 = Includes<[{}], { a: 'A' }>
type testcase8 = Includes<[boolean, 2, 3, 5, 6, 7], false>
type testcase9 = Includes<[true, 2, 3, 5, 6, 7], boolean>
type testcase10 = Includes<[false, 2, 3, 5, 6, 7], false>
type testcase14 = Includes<[1 | 2], 1>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>, true>>,
  Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>, false>>,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 7>, true>>,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 4>, false>>,
  Expect<Equal<Includes<[1, 2, 3], 2>, true>>,
  Expect<Equal<Includes<[1, 2, 3], 1>, true>>,
  Expect<Equal<Includes<[{}], { a: 'A' }>, false>>,
  Expect<Equal<Includes<[boolean, 2, 3, 5, 6, 7], false>, false>>,
  Expect<Equal<Includes<[true, 2, 3, 5, 6, 7], boolean>, false>>,
  Expect<Equal<Includes<[false, 2, 3, 5, 6, 7], false>, true>>,
  Expect<Equal<Includes<[{ a: 'A' }], { readonly a: 'A' }>, false>>,
  Expect<Equal<Includes<[{ readonly a: 'A' }], { a: 'A' }>, false>>,
  Expect<Equal<Includes<[1], 1 | 2>, false>>,
  Expect<Equal<Includes<[1 | 2], 1>, false>>,
  Expect<Equal<Includes<[null], undefined>, false>>,
  Expect<Equal<Includes<[undefined], null>, false>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/898/answer
  > View solutions: https://tsch.js.org/898/solutions
  > More Challenges: https://tsch.js.org
*/
