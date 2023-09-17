import { Command, CommandErrorResponse, CommandHandler, CommandResponse } from "./Command"
import { ElectronEvent, EventHandler } from "./Event"

/**
 * pass Request which should return specific value
 */
export interface ElectronApi {
  /** 
   * dispatch event on electron
   */
  dispatchEvent<T extends ElectronEvent>(event: T): void
  /**
   * execute command on electron
   */
  execCommand<R = unknown>(command: Command): CommandResponse<R> | CommandErrorResponse
  /**
   * register event handler for events from main process to renderer process
   * 
   * @example
   * 
   * ```
   * function myEventHandler(data: EventHandlerParam<User>) {
   *   if (data.event === 'user:added') {
   *     this.store.add(data.payload)
   *   }
   * }
   * 
   * electrodesk.addEventHandler(myCommandHandler)
   * ```
   */
  addEventHandler(handler: EventHandler): void
  /**
   * remove event handler for events from electron
   * 
   * @example
   * 
   * ```
   * function myEventHandler(param: CommandHandlerParam) {
   *   ...
   * }
   * 
   * // add event handler if component gets initialized
   * function onInit() {
   *   electrodesk.addEventHandler(myEventHandler) 
   * }
   * 
   * // remove event handler if component gets destroyed
   * function onDestroy() {
   *   electrodesk.removeEventHandler(myEventHandler)
   * }
   * ```
   */
  removeEventHandler(handler: EventHandler): void
  /**
   * register command listener to execute commands from electron, mostly from other applications. Since this is a
   * a command there is a timeout of 30sec until an error is thrown.
   * 
   * @example
   * 
   * ```
   * function myCommandHandler(param: CommandHandlerParam<number>) {
   *    if (param.command === 'duplicate') {
   *      const {commandId, payload} = param;
   *      const result =  payload * 2
   *      // send result back and complete command
   *      electrodesk.dispatchEvent('command:completed', { commandId, data: result })
   *    }
   * }
   * 
   * electrodesk.addCommandHandler(myCommandHandler)
   * ```
   */
  addCommandHandler(handler: CommandHandler): void
  /**
   * Remove command handler. Important if command is not handled and never complete
   * even with an error, it will automatically complete after 30sec with a timeout exception.
   * 
   * @example
   * 
   * ```
   * function myCommandHandler(param: CommandHandlerParam) {
   *   ...
   * }
   * 
   * // add commmand handler if component gets initialized
   * function onInit() {
   *   electrodesk.addCommandHandler(myCommandHandler) 
   * }
   * 
   * // remove commmand handler if component gets destroyed
   * function onDestroy() {
   *   electrodesk.removeCommandHandler(myCommandHandler)
   * }
   * ```
   */
  removeCommandHandler(handler: CommandHandler): void
}
