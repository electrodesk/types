export interface Command<C = string> {
  command: C
}

export declare type CommandResponse<R = unknown> = Promise<{
  code: 0
  data: R
}>

export declare type CommandErrorResponse = Promise<{
  code: number
  error: Error
}>

/**
 * command handler to handle commands from renderer process
 */
export interface CommandHandlerParam<Payload = unknown> {
  commandId: string
  command: string
  payload: Payload
}
export declare type CommandHandler<Payload = unknown> = (param: CommandHandlerParam<Payload>) => void