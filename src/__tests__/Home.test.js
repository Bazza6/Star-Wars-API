import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../pages/Home'

test('existe el texto "benvingut"?', () => {
    render(<Home />);
    const element = screen.getByText(/benvingut/i);
    expect(element).toBeInTheDocument();
});