import { ElectronEvent } from "../../core/Event";

/**
 * Command completed event
 */
export interface CommandCompletedEventPayload<T = unknown> {
  commandId: string,
  data?: T
}
export type CommandCompletedEvent = ElectronEvent<`command:completed`, CommandCompletedEventPayload>

/**
 * Event to publish messages from 1 Application, so we can 
 */
export interface ApplicationDispatchEventPayload<T = unknown> {
  broadcast?: boolean,
  data?: T
  event: string
}
export type ApplicationDispatchEvent = ElectronEvent<`application:dispatch`, ApplicationDispatchEventPayload>
