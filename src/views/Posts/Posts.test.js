import { MemoryRouter } from 'react-router-dom';
import Posts from '../Posts/Posts';
import { render, screen } from '@testing-library/react';

test('should render list of posts', async () => {
  const { container } = render(
    <MemoryRouter>
      <Posts />
    </MemoryRouter>
  );
  await screen.findByText('Tokio and Nori');
  expect(container).toMatchSnapshot();
});
