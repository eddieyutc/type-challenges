/*
  15 - Last of Array
  -------
  by Anthony Fu (@antfu) #medium #array

  ### Question

  > TypeScript 4.0 is recommended in this challenge

  Implement a generic `Last<T>` that takes an Array `T` and returns its last element.

  For example

  ```ts
  type arr1 = ['a', 'b', 'c']
  type arr2 = [3, 2, 1]

  type tail1 = Last<arr1> // expected to be 'c'
  type tail2 = Last<arr2> // expected to be 1
  ```

  > View on GitHub: https://tsch.js.org/15
*/

/* _____________ Your Code Here _____________ */

// It is easy to do Head, i.e. [infer Head, ...infer Rest]
// but it would be quite challenging to do a Tail

// how about doing a recursion until we reach the end?
// T extends [infer Last] ? Last : T extends [infer Head, ...infer Rest] ? Last<Rest> : never

// I was stupid I could have just reverse them [...infer First, infer Last]

type Last<T extends any[]> = T extends [...infer First, infer Last] ? Last : never

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Last<[2]>, 2>>,
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/15/answer
  > View solutions: https://tsch.js.org/15/solutions
  > More Challenges: https://tsch.js.org
*/
