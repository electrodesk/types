export interface EventHandlerParam<Payload = unknown> {
  event: string
  payload: Payload
}
export type EventHandler = (message: EventHandlerParam) => void

/** 
 * basic event we send to electron
 */
export interface ElectronEvent<EventName = string, EventPayload = unknown> {
  name: EventName
  payload: EventPayload
}

