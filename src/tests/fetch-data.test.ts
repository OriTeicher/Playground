import { fetchData, saveFetchedData } from "../services/fetch-data.service"
import logger from "../services/logger.service"

const API_URL = "https://jsonplaceholder.typicode.com/users"

const TEST_CASE_1 = "fetchData should return data from API"
const TEST_CASE_2 = "fetchData should be an array of at least 3 objects"
const TEST_CASE_3 = "fetchData should be an array of exactly 5 objects"

test(TEST_CASE_1, async () => {
  const data = await fetchData(API_URL)
  expect(data).toBeDefined()
  logger.info(`Fetched data: ${JSON.stringify(data)} \n`)
})

test(TEST_CASE_2, async () => {
  const data = await saveFetchedData(2, API_URL)
  logger.info(`Fetched data from CASE_2 ${JSON.stringify(data)}`)
  expect(Array.isArray(data)).toBe(true)
  expect(data.length).toBeGreaterThanOrEqual(3)
  data.forEach((item) => {
    expect(typeof item).toBe("object")
    expect(item).not.toBeNull()
  })
  logger.info(
    `Fetched data: ${data.forEach((item) =>
      logger.info(`${JSON.stringify(item)}`)
    )} \n `
  )
})

test(TEST_CASE_3, async () => {
  const data = await saveFetchedData(3, API_URL)
  expect(Array.isArray(data)).toBe(true)
  expect(data.length).toBeGreaterThanOrEqual(5)
  data.forEach((item: any) => {
    expect(typeof item).toBe("object")
    expect(item).not.toBeNull()
  })
  logger.info(`Fetched data from CASE_3: ${JSON.stringify(data)}`)
})
