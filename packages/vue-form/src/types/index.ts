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

interface SelectOption extends InputOption {
  disabled?: boolean;
  label: string;
  value: string | number;
}

interface TextErrorMessages {
  invalid?: string;
  required?: string;
}

export type {
  EmailErrorMessages,
  FileExtended,
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
