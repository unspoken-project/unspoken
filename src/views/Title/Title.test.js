import { MemoryRouter } from 'react-router-dom';
import Title from '../Title/Title';
import { render, screen } from '@testing-library/react';

test.skip('should render title of post', async () => {
  const { container } = render(
    <MemoryRouter>
      <Title />
    </MemoryRouter>
  );
  await screen.findByText('Sign In');
  expect(container).toMatchSnapshot();
});
