import { render, screen } from '@testing-library/react';
import Login from '../pages/LogIn';

// esto sirve si no da un error por usar useNavigate en el componente Login
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));


test('existe el input "nombre"?', () => {
    render(<Login />);
    const banana = screen.getByPlaceholderText("Nombre...");
    expect(banana).toBeInTheDocument();
})