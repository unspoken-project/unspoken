import { checkError, client } from './client';

export async function uploadAvatar(userId, file) {
  const ext = file.name.split('.').pop();
  console.log(ext);
  await client.storage
    .from('profile-images')
    .upload(`avatars/${userId}.${ext}`, file, { upsert: true });
  const { publicURL } = await client.storage
    .from('profile-images')
    .getPublicUrl(`avatars/${userId}.${ext}`);
  const resp = await client
    .from('profiles')
    .update({ avatar: publicURL })
    .eq('id', userId)
    .single();
  return checkError(resp);
}
