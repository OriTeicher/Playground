import axios from "axios"
import logger from "./logger.service"
const fs = require("fs")
const path = require("path")

const JSON_PLACEHOLDER_URL = "https://jsonplaceholder.typicode.com/posts"

export async function fetchData(
  baseUrl: string = JSON_PLACEHOLDER_URL
): Promise<any> {
  try {
    const response = await axios.get(baseUrl)
    return response.data
  } catch (error) {
    throw new Error(error)
  }
}

export async function saveFetchedData(
  caseNum: number,
  url: string = JSON_PLACEHOLDER_URL,
  filePath: string = `data/case_${caseNum}-saved-data.txt`
): Promise<any> {
  try {
    const dir = path.dirname(filePath)
    if (!fs.existsSync(dir)) {
      console.log(`Directory '${dir}' does not exist. Creating it...`)
      fs.mkdirSync(dir, { recursive: true })
      console.log(`Directory '${dir}' created.`)
    }
    const data = await fetchData(url)
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
    logger.info(`Data: ${JSON.stringify(data)} saved to ${filePath} \n`)
    return data
  } catch (err) {
    console.error("Error saving data:", err.message)
    throw new Error(err.message)
  }
}
