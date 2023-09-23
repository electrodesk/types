/**
 * configuration to register application inside .env file
 */
export interface ApplicationEntity {
  /**
   * @description name of application, must be unique
   */
  name: string
  /**
   * @description url of application
   */
  url: string
  /**
   * @description application can opened multiple times, default true
   */
  multi: boolean
}
