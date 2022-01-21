import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import Preview from './Preview';

test.skip('renders preview of post', async () => {
  const { container } = render(
    <MemoryRouter>
      <Route>
        <Preview
          currentUser={{
            id: 67,
            user_id: '990a417d-683d-4944-b213-a9f2419e6ac9',
            post_content:
              "more like, what I can do. You've changed my life. I know you might not want all the credit, but I wouldn't have gotten this far without you. You were the key to the start of the rest of my life. And I look forward to seeing you throughout the future.",
            is_private: false,
            inserted_at: '2022-01-21T19:46:34.550197+00:00',
            post_title: 'Julie...what can I say',
            date: '2022-01-21',
          }}
        />
      </Route>
    </MemoryRouter>
  );
  await screen.findByText('Julie...what can I say');
  expect(container).toMatchSnapshot();
});
