import { IAuthForm } from "./types";

export const isCredintialValid = (data: IAuthForm) => {
  if (
    localStorage.getItem("user") === data.username &&
    localStorage.getItem("user_password") === data.password
  ) {
    return true;
  }
};
