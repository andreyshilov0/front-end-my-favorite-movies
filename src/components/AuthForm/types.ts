import { ICommonApiResponse } from "commonTypes";

export interface IAuthForm {
  login: string;
  password?: string;

}

export interface IAuthData extends ICommonApiResponse {
  user: Array<IAuthForm>
}
