import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AuthForm from './AuthForm';

test.skip('renders authentication form', async () => {
  const { container } = render(
    <MemoryRouter>
      <AuthForm
        currentUser={{
          username: '',
          setUsername: 'ƒ bound dispatchAction() {}',
          errorMessage: '',
          email: '',
          setEmail: 'ƒ bound dispatchAction() {}',
          password: '',
          setPassword: 'ƒ bound dispatchAction() {}',
          handleSubmit: 'ƒ handleSubmit() {}',
          type: 'signin',
        }}
      />
    </MemoryRouter>
  );
  await screen.findByText('Sign In');
  expect(container).toMatchSnapshot();
});
