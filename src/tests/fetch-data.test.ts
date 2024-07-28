import axios from "axios"
import { fetchData, saveFetchedData } from "../services/fetch-data.service"
import logger from "../services/logger.service"

jest.mock("axios")
const mockedAxios = axios as jest.Mocked<typeof axios>

// CASES TO TEST
const TEST_CASE_1 = "fetchData should return data from API"
const TEST_CASE_2 = "fetchData should be an array of at least 3 objects"
const TEST_CASE_3 = "fetchData should be an array of exactly 5 objects"

test(TEST_CASE_1, async () => {
  const mockData = { data: "test data" }
  mockedAxios.get.mockResolvedValue(mockData)
  const data = await saveFetchedData(1)
  expect(data).toEqual("test data")
  logger.info(`Fetched data: ${JSON.stringify(data)} \n`)
})

test(TEST_CASE_2, async () => {
  const mockData = {
    data: [
      { id: 1, value: "item 1" },
      { id: 2, value: "item 2" },
      { id: 3, value: "item 3" },
    ],
  }
  mockedAxios.get.mockResolvedValue(mockData)
  const data = await saveFetchedData(2)
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
  const mockData = {
    data: [
      { id: 1, value: "item 1" },
      { id: 2, value: "item 2" },
      { id: 3, value: "item 3" },
      { id: 4, value: "item 4" },
      { id: 5, value: "item 5" },
    ],
  }
  mockedAxios.get.mockResolvedValue(mockData)
  const data = await saveFetchedData(3)
  expect(Array.isArray(data)).toBe(true)
  expect(data.length).toEqual(mockData.data.length)
  data.forEach((item, idx) => {
    logger.info(`item#${idx}: ${JSON.stringify(item)}`)
    expect(typeof item).toBe("object")
    expect(item).not.toBeNull()
  })
})
