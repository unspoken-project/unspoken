import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Create from '../Create/Create';

test('should render create post page', async () => {
  const { container } = render(
    <MemoryRouter>
      <Create />
    </MemoryRouter>
  );
  await screen.findByText('create post');
  expect(container).toMatchSnapshot();
});
