import { User } from "../types/User";

type Error = {
  [key: string]: string;
};

export const validate = (data: User) => {
  const errors: Error = {};

  if (!data.email) {
    errors["email"] = "Enter a valid email";
  }

  if (!data.agree) {
    errors["agree"] = "You must agree to the terms";
  }

  return errors;
};
