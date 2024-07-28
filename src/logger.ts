import { createLogger, format, transports } from "winston"

const logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level}]: ${message}`
    })
  ),
  transports: [new transports.File({ filename: "test-results.log" })],
})

export default logger
