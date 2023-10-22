import { ElectronEvent } from "../../core/Event";

/**
 * Command completed event
 */
export interface CommandCompletedEventPayload<T = unknown> {
  commandId: string;
  data?: T;
}
export type CommandCompletedEvent = ElectronEvent<
  `command:completed`,
  CommandCompletedEventPayload
>;

export interface ApplicationEvent<Payload = unknown> {
  name: string;
  sender: 'APPLICATION' | 'SYSTEM',
  senderId?: string;
  data?: Payload;
}

export interface ApplicationClosedEvent extends ApplicationEvent {
  name: "application:closed";
  sender: 'APPLICATION'
}

/** 
 * @description send event to 1 or more applications
 */
export interface ApplicationDispatchEvent<TEvent extends ApplicationEvent> extends ElectronEvent<`application:dispatch`, TEvent> {
  broadcast: boolean
}

export type ApplicationEventHandler = (event: ApplicationEvent) => void
