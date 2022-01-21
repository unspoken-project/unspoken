import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AuthForm from './AuthForm';

test.skip('renders individual post detail', async () => {
  const { container } = render(
    <MemoryRouter>
      <AuthForm />
    </MemoryRouter>
  );
  await screen.findByText('Sign in');
  expect(container).toMatchSnapshot();
});
