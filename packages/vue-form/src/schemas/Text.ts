import validator from "validator";
import { z } from "zod";

import type { TextErrorMessages } from "../types";
import type { IsTextOptions } from "../types/validator";

const schema = (
  errorMessages: TextErrorMessages,
  options: IsTextOptions | undefined,
) => {
  return z
    .string({
      required_error: errorMessages.required,
      invalid_type_error: errorMessages.invalid,
    })
    .refine(
      (value) => {
        if (options?.required) {
          return !validator.isEmpty(
            value,
            { ignore_whitespace: options?.ignore_whitespace } || {},
          );
        }

        return true;
      },
      {
        message: errorMessages.required,
      },
    );
};

export default schema;
