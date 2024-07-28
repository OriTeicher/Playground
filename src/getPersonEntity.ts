export interface Person {
  name: string
  age: number
  isMarried: boolean
}

export function getPersonEntity(
  name: string,
  age: number,
  isMarried: boolean
): Person {
  return { name, age, isMarried }
}
