import { Person, getPersonEntity } from "../src/getPersonEntity"
import logger from "../src/logger"

describe("getPersonEntity", () => {
  it("should return a Person object with the correct properties", () => {
    const name = "John Doe"
    const age = 30
    const isMarried = true

    const expectedPerson = { name, age, isMarried } as Person
    const result = getPersonEntity(name, age, isMarried)

    logger.info(
      `Tested getPersonEntity with name: ${name}, age: ${age}, isMarried: ${isMarried}`
    )
    logger.info(
      `Expected: ${JSON.stringify(expectedPerson)}, Got: ${JSON.stringify(
        result
      )}`
    )

    expect(result).toEqual(expectedPerson)
  })

  it("should return a Person object with different properties", () => {
    const name = "Jane Smith"
    const age = 25
    const isMarried = false

    const expectedPerson = { name, age, isMarried } as Person
    const result = getPersonEntity(name, age, isMarried)

    logger.info(
      `Tested getPersonEntity with name: ${name}, age: ${age}, isMarried: ${isMarried}`
    )
    logger.info(
      `Expected: ${JSON.stringify(expectedPerson)}, Got: ${JSON.stringify(
        result
      )}`
    )

    expect(result).toEqual(expectedPerson)
  })
})
