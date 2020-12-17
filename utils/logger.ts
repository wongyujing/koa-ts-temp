const universalLogger = (type: string, message: string): string => {
  return ``
}

/**
 * logger
 */
export default class Log {

  /**
   * universal log
   * @param msg
   */
  info(msg: string) {

  }

  /**
   * error log
   * @param msg
   */
  error(msg: string) {

  }

  /**
   * debug log
   * @param msg
   */
  debug(msg: string) {

  }

  /**
   * custom log
   * @param msg
   */
  custom(msg: string) {
    console.log(`[CUSTOM] ${msg}`);
  }
}
