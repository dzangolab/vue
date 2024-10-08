interface EmailErrorMessages {
  invalid?: string;
  required?: string;
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

interface SelectOption {
  label: string;
  value: string | number;
}

interface TextErrorMessages {
  invalid?: string;
  required?: string;
}

export type {
  EmailErrorMessages,
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
