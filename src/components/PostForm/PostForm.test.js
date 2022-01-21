import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import PostForm from './PostForm';

test('renders blank post form', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/create']}>
      <Route path="/create">
        <PostForm post={''} />
      </Route>
    </MemoryRouter>
  );
  await screen.findByText('create post');
  expect(container).toMatchSnapshot();
});
