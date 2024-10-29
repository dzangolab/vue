const parse = (
  value: bigint | number | string | boolean | undefined,
  fallback: bigint | number | string | null | boolean,
) => {
  if (typeof value === "undefined") {
    return fallback;
  }

  if (typeof value === "boolean") {
    return value;
  }

  switch (typeof fallback) {
    case "boolean":
      return !!JSON.parse(value as string);

    case "number":
      return JSON.parse(value as string);

    default:
      return value;
  }
};

export default parse;
