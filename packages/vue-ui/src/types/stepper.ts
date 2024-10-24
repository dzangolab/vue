interface StepProperties {
  content?: string;
  label?: string;
  step?: number | string;
}

interface ActionButtonProperties {
  disabled?: boolean;
  iconLeft?: string;
  iconRight?: string;
  label?: string;
  rounded?: boolean;
  severity?: string;
  size?: string;
  variant?: string;
}

export type { ActionButtonProperties, StepProperties };
