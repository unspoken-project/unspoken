import { MemoryRouter, ProtectedRoute } from 'react-router-dom/cjs/react-router-dom.min';
import Title from '../Title/Title';
import { render, screen } from '@testing-library/react';

test.skip('should render title of post', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/posts/37']}>
      <ProtectedRoute exact path="/posts/:id" component={Title} />
    </MemoryRouter>
  );
  await screen.findByText('Tokio and Nori');
  expect(container).toMatchSnapshot();
});
