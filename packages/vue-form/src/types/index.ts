interface CurrencyOption extends SelectOption {
  code?: string;
  symbol?: string;
}

interface EmailErrorMessages {
  invalid?: string;
  required?: string;
}

interface FileExtended extends File {
  description?: string;
}

interface InputOption {
  label: string;
  value: string | number;
}

interface MonthPickerValue {
  month: number | string;
  year: number | string;
}

interface NumberErrorMessages {
  invalid?: string;
  required?: string;
}

interface PasswordErrorMessages {
  required?: string;
  weak?: string;
}

interface SelectOption extends Record<string, unknown> {
  disabled?: boolean;
  label?: string;
  value?: string | number;
  groupLabel?: string;
};

interface GroupedOption {
  label: string;
  options: SelectOption[];
}

interface TextErrorMessages {
  invalid?: string;
  required?: string;
}

export type {
  CurrencyOption,
  EmailErrorMessages,
  FileExtended,
  GroupedOption,
  InputOption,
  MonthPickerValue,
  NumberErrorMessages,
  PasswordErrorMessages,
  SelectOption,
  TextErrorMessages,
};

export type {
  IsEmailOptions,
  IsTextOptions,
  IsIntOptions,
  StrongPasswordOptions,
} from "./validator";
