const universalLogger = (type: string, message: string): string => {
  return ``
}

/**
 * @description logger
 */
export default class Log {

  /**
   * @description universal log
   * @param msg
   */
  info(msg: string) {

  }

  /**
   * @description error log
   * @param msg
   */
  error(msg: string) {

  }

  /**
   * @description debug log
   * @param msg
   */
  debug(msg: string) {

  }

  /**
   * @description custom log
   * @param msg
   */
  custom(msg: string) {
    console.log(`[CUSTOM] ${msg}`);
  }
}
