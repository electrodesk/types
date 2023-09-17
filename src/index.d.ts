import { ElectronApi } from "./core/Electron.api";
export * from './core/Command';
export * from './core/Electron.api';
export * from './core/Event';


declare global {
  interface Window {
    tm_electron: ElectronApi
  }
}
