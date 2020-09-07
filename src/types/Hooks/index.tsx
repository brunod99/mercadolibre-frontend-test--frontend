import { HeaderSearchType } from "../Pages";

export type HookUseSearchState = HeaderSearchType;
type HookUseSearchErrorType = Partial<HookUseSearchState>;

export type HookUseSearchValidationType = (
  values: HookUseSearchState
) => HookUseSearchErrorType;

export type HookUseSearchType = (
  initialState: HookUseSearchState,
  validations: HookUseSearchValidationType,
  fn: () => any
) => {
  values: HookUseSearchState;
  errors: HookUseSearchErrorType;
  handleFieldEvents: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};
