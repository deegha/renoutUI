import { handleCall } from './backendClient';

import { RegisterProps, RegisterResponse, LoginResponse } from './d';

export async function register(user: RegisterProps) {
  const response: RegisterResponse = await handleCall('user', 'POST', user);

  if (!response.success) {
    throw new Error(response.message);
  }

  return response.data;
}

export async function login(email: string, password: string) {
  const response: LoginResponse = await handleCall(
    'login',
    'POST',
    { email, password },
    'no-cache',
  );
  return response;
}

export async function getUser(): Promise<LoginResponse> {
  return await handleCall('user', 'GET', undefined, 'no-cache');
}

export async function logout() {
  const response = await handleCall('logout', 'POST', undefined, 'no-cache');
  return response;
}
