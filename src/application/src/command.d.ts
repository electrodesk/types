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
