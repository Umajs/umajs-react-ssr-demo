/// <reference types="node" />

declare global {
  export interface Window {
    __SSR_DATA__:any
  }

}

export {};
