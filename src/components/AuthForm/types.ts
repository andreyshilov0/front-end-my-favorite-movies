export interface IUserFormLogin {
  email: string;
  password: string;
}

export interface ISignInResponseData {
  token: string;
  user: IUserFormLogin;
}

export interface ISignInUserMutation {
  signInUser: ISignInResponseData;
}

export interface IRenderUserEmail {
  user: {
    email: string;
  };
}
