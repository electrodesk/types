/**
 * configuration to register application inside .env file
 */
export interface ApplicationEntity {
  /**
   * @description short description of application
   */
  description: string
  /**
   * @description name of application, must be unique
   */
  name: string
  /**
   * @description url of application
   */
  url: string
  /**
   * @description icon of appliction, for example an url or base64 encoded image
   * better do not use png files as base64 since they become super large in size
   */
  icon?: string
  /**
   * @description application can opened multiple times, default true
   */
  multi?: boolean
}
