import { ICommonApiResponse } from "commonTypes";

export interface IUser {
  email: string;
  password: string;
}

export interface ISignInResponseData {
  token: string;
  user: IUser;
}

export interface ISignInUserMutation {
  signInUser: ISignInResponseData;
}

export interface IRenderUserEmail {
  email: string[];
}
