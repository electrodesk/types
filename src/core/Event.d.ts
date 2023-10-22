// das erscheint falsch
export interface EventHandlerParam<Payload = unknown> {
  event: string
  payload: Payload
}
export type EventHandler = (message: EventHandlerParam) => void
// das ist falsch weil das nicht in der Applikation ankommt, dort erhalten wir einen ApplicationEvent

/** 
 * nur intern innerhalb von Electron benutzt in der Regel
 */
export interface ElectronEvent<TChannel = string, TData = unknown> {
  name: TChannel // channel
  payload: TData // event daten die wir senden
}
