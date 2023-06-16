/*
  3 - Omit
  -------
  by Anthony Fu (@antfu) #medium #union #built-in

  ### Question

  Implement the built-in `Omit<T, K>` generic without using it.

  Constructs a type by picking all properties from `T` and then removing `K`

  For example

  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  type TodoPreview = MyOmit<Todo, 'description' | 'title'>

  const todo: TodoPreview = {
    completed: false,
  }
  ```

  > View on GitHub: https://tsch.js.org/3
*/

/* _____________ Your Code Here _____________ */

// we want our result to only contain keys not in K
// and use those keys to index T in a mapped type

// Tried different ways of operating on the key of T, but no luck
// Going through the docs https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as
// The `as` remapping section caught my eyes as they demostrate how to filter out keys via conditional type after the `as` clause

type MyOmit<T, K extends keyof T> = {
  [key in keyof T as (key extends K ? never : key)]: T[key]
}

type testcase1 = MyOmit<Todo, 'description'>
type testcase2 = MyOmit<Todo, 'description' | 'completed'>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>,
]

// @ts-expect-error
type error = MyOmit<Todo, 'description' | 'invalid'>

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/3/answer
  > View solutions: https://tsch.js.org/3/solutions
  > More Challenges: https://tsch.js.org
*/
