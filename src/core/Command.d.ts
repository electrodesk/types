export interface Command<C = string> {
  command: C
}

export interface CommandErrorResponse {
  code: number
  error: Error
}

export interface CommandResponse<R = unknown> { 
  code: 0
  data: R
}

/**
 * command handler to handle commands from renderer process
 */
export interface CommandHandlerParam<Payload = unknown> {
  commandId: string
  command: string
  payload: Payload
}
export declare type CommandHandler<Payload = unknown> = (param: CommandHandlerParam<Payload>) => void