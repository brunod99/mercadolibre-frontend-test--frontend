export type HookUseSearchState = { [key: string]: string };
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
  clearValue: () => void;
};
