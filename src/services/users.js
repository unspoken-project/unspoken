import { checkError, client } from './client';

export function getUser() {
  return client.auth.session();
}

export async function signUpUser(username, email, password) {
  const { user, error } = await client.auth.signUp({ username, email, password });
  if (error) {
    throw error;
  }
  return user;
}

export async function signInUser(username, email, password) {
  const { user, error } = await client.auth.signIn({ username, email, password });

  if (error) {
    throw error;
  }
  return user;
}

export async function signOut() {
  const resp = await client.auth.signOut();
  return checkError(resp);
}
