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
    title: post.post_title,
    content: post.post_content,
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
