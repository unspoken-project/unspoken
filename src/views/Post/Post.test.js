import { MemoryRouter, Route } from 'react-router-dom';
import Post from '../Post/Post';
import { render, screen } from '@testing-library/react';

test.skip('should render individual post', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/posts/53']}>
      <Route exact path="/posts/:id">
        <Post
          currentUser={{
            id: 'f7a7c408-f151-4078-9080-2d73ac54a12f',
            aud: 'authenticated',
            role: 'authenticated',
            email: 'k@example.com',
            email_confirmed_at: '2022-01-20T19:00:15.130542Z',
            phone: '',
            confirmed_at: '2022-01-20T19:00:15.130542Z',
            last_sign_in_at: '2022-01-20T22:22:06.412278Z',
            app_metadata: {
              provider: 'email',
              providers: ['email'],
            },
            user_metadata: {},
            identities: [
              {
                id: 'f7a7c408-f151-4078-9080-2d73ac54a12f',
                user_id: 'f7a7c408-f151-4078-9080-2d73ac54a12f',
                identity_data: {
                  sub: 'f7a7c408-f151-4078-9080-2d73ac54a12f',
                },
                provider: 'email',
                last_sign_in_at: '2022-01-20T19:00:15.128895Z',
                created_at: '2022-01-20T19:00:15.128934Z',
                updated_at: '2022-01-20T19:00:15.128934Z',
              },
            ],
            created_at: '2022-01-20T19:00:15.126893Z',
            updated_at: '2022-01-20T23:21:06.707962Z',
            username: 'kdmami',
            avatar:
              'https://ipvfiyhmiwmzfnzlbhov.supabase.co/storage/v1/object/public/profile-images/avatars/f7a7c408-f151-4078-9080-2d73ac54a12f.png',
          }}
        />
      </Route>
    </MemoryRouter>
  );
  await screen.findByText('Dear Julie...');
  expect(container).toMatchSnapshot();
});
