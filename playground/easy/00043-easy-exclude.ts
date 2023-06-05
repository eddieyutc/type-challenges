/*
  43 - Exclude
  -------
  by Zheeeng (@zheeeng) #easy #built-in #union

  ### Question

  Implement the built-in Exclude<T, U>

  > Exclude from T those types that are assignable to U

  For example:

  ```ts
  type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
  ```

  > View on GitHub: https://tsch.js.org/43
*/

/* _____________ Your Code Here _____________ */

// https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types

// When a conditional type is acting on a union type, the condition is distributed over the types of the union.
// The condition sort of acts like a map over the union type, and then combining them at the end
// In Test case 1, the condition T extends U is applied to every member of T, i.e. 'a', 'b' and 'c'.
// We have 3 conditional types operation in the union:
// - 'a' extends 'a' ? never : 'a'
// - 'b' extends 'a' ? never : 'b'
// - 'c' extends 'a'? never : 'c'
// Finally combining them results in the union type: 'b' | 'c'

type MyExclude<T, U> = T extends U ? never : T

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/43/answer
  > View solutions: https://tsch.js.org/43/solutions
  > More Challenges: https://tsch.js.org
*/
