import type { IAppContext, NormalizedConfig } from '@modern-js/core';
import type { AppTools } from '../../../types';

export type CreatePreset = (
  appContext: IAppContext,
  config: NormalizedConfig<AppTools>,
  needModernServer?: boolean,
) => DeployPreset;

type DeployPreset = {
  prepare?: () => Promise<void>;
  writeOutput?: () => Promise<void>;
  genEntry?: () => Promise<void>;
  end?: () => Promise<void>;
};
