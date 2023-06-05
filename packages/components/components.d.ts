import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    WlButton: typeof components.Button;
    WlIcon: typeof components.Icon;
  }
}
export {};

