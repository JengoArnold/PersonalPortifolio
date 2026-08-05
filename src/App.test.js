import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from './components/Navbar';

test('toggles the mobile navigation menu', async () => {
  render(<Navbar />);

  const toggleButton = screen.getByRole('button', { name: /toggle navigation menu/i });
  expect(toggleButton).toBeInTheDocument();

  await userEvent.click(toggleButton);
  expect(screen.getByRole('navigation')).toHaveClass('open');
});
