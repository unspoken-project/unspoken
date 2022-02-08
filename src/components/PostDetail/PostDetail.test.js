import { render, screen } from '@testing-library/react';
import PostDetail from './PostDetail';
import { MemoryRouter, Route } from 'react-router-dom';

test.skip('renders individual post detail', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/posts/49']}>
      <Route path="/posts/:id">
        <PostDetail
          post={{
            id: 49,
            user_id: '0180dfe8-93a1-41d0-a796-b2ae86039de3',
            post_content: 'mookie is an emotional lil bean\n',
            is_private: false,
            inserted_at: '2022-01-20T22:13:36.535343+00:00',
            post_title: 'mookie',
            date: '2022-01-20',
          }}
          currentUser={{
            id: '0180dfe8-93a1-41d0-a796-b2ae86039de3',
            aud: 'authenticated',
            role: 'authenticated',
            email: 'mirak@e.com',
            email_confirmed_at: '2022-01-20T17:20:47.932079Z',
            phone: '',
            confirmed_at: '2022-01-20T17:20:47.932079Z',
            last_sign_in_at: '2022-01-21T00:38:46.410701408Z',
            app_metadata: {
              provider: 'email',
              providers: ['email'],
            },
            user_metadata: {},
            identities: [
              {
                id: '0180dfe8-93a1-41d0-a796-b2ae86039de3',
                user_id: '0180dfe8-93a1-41d0-a796-b2ae86039de3',
                identity_data: {
                  sub: '0180dfe8-93a1-41d0-a796-b2ae86039de3',
                },
                provider: 'email',
                last_sign_in_at: '2022-01-20T17:20:47.930506Z',
                created_at: '2022-01-20T17:20:47.930542Z',
                updated_at: '2022-01-20T17:20:47.930542Z',
              },
            ],
            created_at: '2022-01-20T17:20:47.928564Z',
            updated_at: '2022-01-21T00:38:46.411903Z',
            username: 'miraie',
            avatar:
              'https://ipvfiyhmiwmzfnzlbhov.supabase.co/storage/v1/object/public/profile-images/avatars/0180dfe8-93a1-41d0-a796-b2ae86039de3.jpg',
          }}
        />
      </Route>
    </MemoryRouter>
  );
  await screen.findByText('mookie');
  expect(container).toMatchSnapshot();
});
