import { ChangeEvent } from "react";

export type InputProp = {
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  error?: boolean;
  type: string;
  disabled?: boolean;
  search?: boolean;
  handleClearInput?: () => void;
};
