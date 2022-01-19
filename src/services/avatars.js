import { checkError, client } from './client';

export async function uploadAvatar(userId, file) {
  const ext = file.name.split('.').pop();
  await client.storage.from('avatars').upload(`${userId}.${ext}`, file, { upsert: true });
  const { publicURL } = await client.storage.from('avatars').getPublicUrl(`${userId}.${ext}`);
  const resp = await client
    .from('profiles')
    .update({ avatar: publicURL })
    .eq('id', userId)
    .single();
  return checkError(resp);
}
