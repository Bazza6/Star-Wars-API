import { render, screen, fireEvent } from '@testing-library/react';
import SignUp from '../pages/SignUp';

test('está el titulo?', () => {
    render(<SignUp />);
    const element = screen.getByText(/CREATE YOUR ACCOUNT/i);
    expect(element).toBeInTheDocument();
})

test('se acutaliza el valor del imput "nombre"?', () => {
    render(<SignUp />);
    const inputElement = screen.getByPlaceholderText("Nombre...");
    fireEvent.change(inputElement, { target: { value: "Nazareno" } })
    expect(inputElement.value).toBe("Nazareno");
})

test('se acutaliza el valor del imput "apellido"?', () => {
    render(<SignUp />);
    const inputElement = screen.getByPlaceholderText("Apellido...");
    fireEvent.change(inputElement, { target: { value: "Valentini" } })
    expect(inputElement.value).toBe("Valentini");
})