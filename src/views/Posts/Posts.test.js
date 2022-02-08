import { MemoryRouter } from 'react-router-dom';
import Posts from '../Posts/Posts';
import { render, screen } from '@testing-library/react';

test.skip('should render list of posts', async () => {
  const { container } = render(
    <MemoryRouter>
      <Posts />
    </MemoryRouter>
  );
  await screen.findByText('Dear Julie...');
  expect(container).toMatchSnapshot();
});
