import { MemoryRouter } from 'react-router-dom';
import Auth from '../Auth/Auth';
import { render, screen } from '@testing-library/react';

test('should show signin', async () => {
  const { container } = render(
    <MemoryRouter>
      <Auth />
    </MemoryRouter>
  );
  await screen.findByText('Sign In');
  expect(container).toMatchSnapshot();
});
