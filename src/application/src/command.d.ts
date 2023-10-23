import { Command } from "../../core/Command"
import { ApplicationReadDTO } from "./application.read-dto"

/**
 * @description gets a property current application
 * ---
 * @example
 * ```
 * // open a application
 * const command: OpenCommand = {
 *  command: 'application:open',
 *  param: {
 *    name: 'my-application-key'
 *  }
 * }
 * 
 * window.electrodesk.exec(command)
 * ```
 * ---
 * 
 * Example to open application and pass initial data to it
 * @example
 * ```
 * interface TodoPayload {
 *   personId: number
 * }
 * 
 * const command: OpenCommand<TodoPayload> = {
 *  command: 'application:open',
 *  name: 'todo',
 *  data: {
 *    id: 1
 *  }
 * }
 * 
 * window.electrodesk.exec(command)
 * ```
 */
export interface OpenCommand<D = unknown> extends Command<'application:open'> {
  application: string,
  asChild?: boolean,
  data?: D
}
export declare type OpenCommandParam<D = unknown> = Omit<OpenCommand<D>, 'command'>

/**
 * @description gets a property current application
 * @example
 * ```
 * const command: GetPropertyCommand = {
 *  command: 'application:get-property',
 *  property: 'initialData'
 * }
 * 
 * window.electrodesk.exec(command)
 * ```
 */
export interface GetPropertyCommand extends Command<'application:get-property'> {
  property: keyof ApplicationReadDTO
}
export declare type GetPropertyCommandParam = Omit<GetPropertyCommand, 'command'>

/**
 * @description close application, if a uuid is submitted it will close application
 * by given id
 */
export interface CloseCommand extends Command<'application:close'> {
  id?: ApplicationReadDTO['uuid']
}

/** 
 * Execute command on application
 */
export interface ApplicationExecCommand<Payload> extends Command<'application:exec'> {
  /**
   * @description application uuid we want to send the command
   */
  applicationId: ApplicationReadDTO['uuid']
  /**
   * @description data to send to application
   */
  payload: {
    command: string
    data?: Payload
  } 
}
export declare type ApplicationExecCommandParam<Payload = unknown> = Omit<ApplicationExecCommand<Payload>, 'command'>


/**
 *
 */
export interface ApplicationListConfig {
  /** 
   * @description after applications from repository are fetched once they are cached
   * until electron will restarted.
   */
  refresh?: boolean
}

export interface ApplicationListCommand extends Command<'application:list'> {
  config: ApplicationListConfig
}

/**
 * @description command to register listener on application
 */
export interface ApplicationRegisterListenerCommand extends Command<'application:register-listener'> {
  id: ApplicationReadDTO['uuid']
}
export declare type ApplicationRegisterListenerCommandParam = Omit<ApplicationRegisterListenerCommand, 'command'>

/**
 * @description command to remove listener from application
 */
export interface ApplicationRemoveListenerCommand extends Command<'application:remove-listener'> {
  id: ApplicationReadDTO['uuid']
}
export declare type ApplicationRemoveListenerCommandParam = Omit<ApplicationRegisterListenerCommand, 'command'>

/**
 * @description command to close application
 */
export interface ApplicationCloseCommand<D = unknown> extends Command<'application:close'> {
  id?: ApplicationReadDTO['uuid'],
}
export declare type ApplicationCloseCommandParam<D = unknown> = Omit<ApplicationCloseCommand<D>, 'command'>

/**
 * @description command to maximize application
 */
export interface ApplicationMaximizeCommand extends Command<'application:maximize'> {
  id?: ApplicationReadDTO['uuid'],
}
export declare type ApplicationMaximizeCommandParam = Omit<ApplicationMaximizeCommand, 'command'>

/**
 * @description command to minimize application window
 */
export interface ApplicationMinimizeCommand extends Command<'application:maximize'> {
  id?: ApplicationReadDTO['uuid'],
}
export declare type ApplicationMinimizeCommandParam = Omit<ApplicationMinimizeCommand, 'command'>
