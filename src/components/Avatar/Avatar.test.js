import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';

test.skip('renders individual post detail', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/posts/36']}>
      <Route path="/posts/:id" component={PostDetail} />
    </MemoryRouter>
  );
  await screen.findByDisplayValue('ta overload');
  expect(container).toMatchSnapshot();
});
