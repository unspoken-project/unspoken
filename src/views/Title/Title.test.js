import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Title from '../Title/Title';
import { render, screen } from '@testing-library/react';

test('should render title of post', async () => {
  const { container } = render(
    <MemoryRouter>
      <Title />
    </MemoryRouter>
  );
  await screen.findByText('Sign In');
  expect(container).toMatchSnapshot();
});
