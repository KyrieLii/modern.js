import type { RouterConfig } from '../dist/types';
import '../dist/types/runtime';

declare module '@modern-js/runtime/router-v5' {
  export * from '../dist/types/runtime';
}

declare module '@modern-js/runtime' {
  interface AppConfig {
    router?: RouterConfig | boolean;
  }

  interface RuntimeConfig {
    router?: RouterConfig;
    routerEntries?: {
      [name: string]: RouterConfig;
    };
  }
}
