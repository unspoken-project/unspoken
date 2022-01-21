import { render, screen } from '@testing-library/react';
import Edit from '../Edit/Edit';
import { MemoryRouter, Route } from 'react-router-dom';

test('should render details and edit', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/posts/37/edit']}>
      <Route exact path="/posts/:id/edit" component={Edit} />
    </MemoryRouter>
  );
  await screen.findByDisplayValue('cuties');
  expect(container).toMatchSnapshot();
});
