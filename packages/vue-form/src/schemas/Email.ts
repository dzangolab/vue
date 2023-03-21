import validator from "validator";
import { z } from "zod";

import type { EmailErrorMessages } from "../types";
import type { IsEmailOptions } from "../types/validator";

const schema = (
  errorMessages: EmailErrorMessages,
  options: IsEmailOptions | undefined
) => {
  return z
    .string({
      required_error: errorMessages.required,
    })
    .superRefine((value, context) => {
      if (value.length === 0) {
        context.addIssue({
          code: "invalid_string",
          message: errorMessages.required,
          validation: "email",
        });
      }

      if (!validator.isEmail(value, options || {})) {
        context.addIssue({
          code: "invalid_string",
          message: errorMessages.invalid,
          validation: "email",
        });
      }
    });
};

export default schema;
