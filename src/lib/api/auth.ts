import { apiClient } from "./client";

export type LoginPayload = {
  email: string;
  password: string;
  rememberMe?: boolean;
};

export type LoginResponse = {
  token: string;
  user: {
    id: string;
    email: string;
    name?: string;
  };
};

const loginEndpoint =
  process.env.NEXT_PUBLIC_LOGIN_API ?? "/auth/login";

export async function loginUser(payload: LoginPayload): Promise<LoginResponse> {
  return apiClient<LoginResponse>(loginEndpoint, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
