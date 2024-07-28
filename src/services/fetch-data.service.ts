import axios from "axios"
import logger from "./logger.service"
const fs = require("fs")
const path = require("path")

const JSON_PLACEHOLDER_URL = "https://jsonplaceholder.typicode.com/users"

export async function fetchData(
  baseUrl: string = JSON_PLACEHOLDER_URL
): Promise<any> {
  try {
    const response = await axios.get(baseUrl)
    const { title, body } = response.data
    logger.info("from fetch data: ", title, body, response)
    return response.data
  } catch (error) {
    throw new Error(error)
  }
}

export async function saveFetchedData(
  caseNum: number,
  url: string = JSON_PLACEHOLDER_URL,
  filePath: string = `data/case_${caseNum}.json`
): Promise<any> {
  try {
    const dir = path.dirname(filePath)
    if (!fs.existsSync(dir)) {
      logger.info(`Directory '${dir}' does not exist. Creating it...`)
      fs.mkdirSync(dir, { recursive: true })
      logger.info(`Directory '${dir}' created. \n`)
    }
    const data = await fetchData(url)
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
    return data
  } catch (err) {
    console.error("Error saving data:", err.message)
    throw new Error(err.message)
  }
}
