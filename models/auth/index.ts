export interface LoginModel {
  email: string
  password: string
}

export interface TokenResponseModel {
  token: {
    user_id: string
    refresh_token: string
    access_token: string
    token_type: string
  }
}
