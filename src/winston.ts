import winston, { createLogger, format } from 'winston'
import 'winston-daily-rotate-file'

const { combine, timestamp, printf, colorize, align } = format;

const fileRotateTransport = new winston.transports.DailyRotateFile({
  filename: "log-errors-%DATE%.log",
  dirname: './logs',
  auditFile: './logs/audit-logs.json',
  datePattern: "YYYY-MM-DD",
  maxFiles: "14d",
  level: 'error'
});

export default createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: combine(
    colorize({ all: true }),
    timestamp({
      format: 'YYYY-MM-DD hh:mm:ss.SSS A',
    }),
    align(),
    printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
  ),
  transports: [fileRotateTransport, new winston.transports.Console()],
});