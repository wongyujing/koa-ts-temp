interface ProjectConfig {
  /** app name **/
  appName: string;
  /** host **/
  host?: string;
  /** port **/
  port?: number;
  /** environment **/
  env: 'development' | 'production';
}
