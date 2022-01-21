import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import About from '../About/About';

test.skip('should render about us page', async () => {
  const { container } = render(
    <MemoryRouter>
      <About />
    </MemoryRouter>
  );
  await screen.findByText('Karyssa');
  expect(container).toMatchSnapshot();
});
