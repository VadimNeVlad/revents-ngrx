export interface User {
  id: string;
  name: string;
  email: string;
  gender: string;
}

export interface UserResponse {
  accessToken: string;
  user: User;
}

export interface SignUpData {
  name: string;
  email: string;
  password: string;
  gender: string;
}

export interface SignInData {
  email: string;
  password: string;
}
