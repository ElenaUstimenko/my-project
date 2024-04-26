import { fireEvent, render, screen } from '@testing-library/react';
import Sidebar from '@components/Sidebar/Sidebar';

describe('Sidebar', () => {
  test('render component', () => {
    render(<Sidebar />)
    expect(screen.getByTestId('Sidebar')).toBeInTheDocument()
  });

  test('разворачивание Sidebar', () => {
    render(<Sidebar />)
    fireEvent.click(screen.getByTestId('button'))
    expect(screen.getByTestId('Sidebar')).toHaveClass('collapsed')
  });
	
	test('сворачивание Sidebar', () => {
		render(<Sidebar />)
		fireEvent.click(screen.getByTestId('button'))
		fireEvent.click(screen.getByTestId('button'))
		expect(screen.getByTestId('Sidebar')).not.toHaveClass('collapsed')
	});
});