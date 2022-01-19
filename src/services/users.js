import { checkError, client } from './client';

export async function getUser() {
  try {
    const session = client.auth.session();
    const { data, error, status } = await client
      .from('profiles')
      .select('username')
      .match({ id: session.user.id })
      .single();
    if (error && status !== 406) {
      throw error;
    }
    if (data) {
      return { ...session.user, ...data };
    }
  } catch (error) {
    alert('try again');
  }
}

export async function signUpUser(username, email, password) {
  const { user, error } = await client.auth.signUp({ email, password });
  if (error) {
    throw error;
  }
  const resp = await client.from('profiles').insert({ id: user.id, username }).single();
  if (resp.error) {
    throw error;
  }
  return user;
}

export async function signInUser(email, password) {
  const { user, error } = await client.auth.signIn({ email, password });

  if (error) {
    throw error;
  }
  return user;
}

export async function logout() {
  const resp = await client.auth.signOut();
  return checkError(resp);
}
