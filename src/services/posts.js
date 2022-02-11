import { client, checkError } from './client';

export async function getPosts() {
  const resp = await client.from('unspoken').select('*');
  return checkError(resp);
}

export async function getPostById(id) {
  const resp = await client.from('unspoken').select('*').match({ id }).single();
  return checkError(resp);
}

export async function createPost(post) {
  const resp = await client.from('unspoken').insert({
    post_title: post.post_title,
    post_content: post.post_content,
    user_id: client.auth.user().id,
  });
  return checkError(resp);
}

export async function editPost(post) {
  const resp = await client.from('unspoken').update(post).eq('id', post.id);
  return checkError(resp);
}

export async function deletePost(id) {
  const resp = await client.from('unspoken').delete().match({ id });
  return checkError(resp);
}

export async function getMyPosts(user) {
  const resp = await client.from('unspoken').select('*').match({ user });
  return checkError(resp);
}
