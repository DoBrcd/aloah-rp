import * as winston from "winston";
import * as path from "path";

const logsDirectory = process.env.LOGS_DIRECTORY || "logs";

function createLogger(label: string) {
  const allFilename = path.join(logsDirectory, `all.log`);
  const labelFilename = path.join(
    logsDirectory,
    `${label.toLocaleLowerCase()}.log`
  );
  const log = winston.createLogger({
    level: process.env.LOGGER_LEVEL || "info",
    format: winston.format.combine(
      winston.format.label({ label: label }),
      winston.format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss",
      }),
      winston.format.printf(
        (info) =>
          `${info.timestamp} [${info.label}] (${info.level}) ${info.message}`
      )
    ),
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({
        filename: labelFilename,
      }),
      new winston.transports.File({
        filename: allFilename,
      }),
    ],
  });

  return {
    error: (msg: string) => {
      log.error(msg);
    },
    warning: (msg: string) => {
      log.warn(msg);
    },
    info: (msg: string) => {
      log.info(msg);
    },
    debug: (msg: string) => {
      log.debug(msg);
    },
  };
}

export const systemLogger = createLogger("System");
export const discordLogger = createLogger("Discord");
export const webLogger = createLogger("WebServer");

systemLogger.info(`Logs directory : ${logsDirectory}`);
