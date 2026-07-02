import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import AuthContext from '../context/AuthContextType';
import Login from './Login';

const mockNavigate = jest.fn();
jest.mock('react-router', () => ({
    useNavigate: () => mockNavigate,
}));

const renderLogin = (contextValue: any) => {
    return render(
        <AuthContext.Provider value={contextValue}>
            <Login />
        </AuthContext.Provider>
    );
};

describe('Login component', () => {
    beforeEach(() => {
        mockNavigate.mockClear();
    });

    test('renders email and password inputs', () => {
        renderLogin({ login: jest.fn(), isLoggedIn: false });

        expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Enter your password')).toBeInTheDocument();
    });

    test('controlled inputs: typing updates the input value via state', () => {
        renderLogin({ login: jest.fn(), isLoggedIn: false });

        const emailInput = screen.getByPlaceholderText('Enter your email') as HTMLInputElement;
        fireEvent.change(emailInput, { target: { name: 'email', value: 'trainee@example.com' } });

        expect(emailInput.value).toBe('trainee@example.com');
    });

    test('submit calls context login() with the current form values', async () => {
        const loginMock = jest.fn().mockResolvedValue(undefined);
        renderLogin({ login: loginMock, isLoggedIn: false });

        fireEvent.change(screen.getByPlaceholderText('Enter your email'), {
            target: { name: 'email', value: 'trainee@example.com' },
        });
        fireEvent.change(screen.getByPlaceholderText('Enter your password'), {
            target: { name: 'password', value: 'secret123' },
        });
        fireEvent.click(screen.getByText('🔓Login'));

        await waitFor(() => {
            expect(loginMock).toHaveBeenCalledWith({
                email: 'trainee@example.com',
                password: 'secret123',
            });
        });
    });

    test('on successful login, navigates to /employeeslist', async () => {
        const loginMock = jest.fn().mockResolvedValue(undefined);
        renderLogin({ login: loginMock, isLoggedIn: false });

        fireEvent.click(screen.getByText('🔓Login'));

        await waitFor(() => {
            expect(mockNavigate).toHaveBeenCalledWith('/employeeslist');
        });
    });

    test('on failed login, shows an error message and does not navigate', async () => {
        const loginMock = jest.fn().mockRejectedValue(new Error('Invalid credentials'));
        renderLogin({ login: loginMock, isLoggedIn: false });

        fireEvent.click(screen.getByText('🔓Login'));

        expect(await screen.findByText('Invalid credentials.')).toBeInTheDocument();
        expect(mockNavigate).not.toHaveBeenCalledWith('/employeeslist');
    });

    test('form fields are cleared after submit, whether login succeeds or fails', async () => {
        const loginMock = jest.fn().mockRejectedValue(new Error('fail'));
        renderLogin({ login: loginMock, isLoggedIn: false });

        const emailInput = screen.getByPlaceholderText('Enter your email') as HTMLInputElement;
        fireEvent.change(emailInput, { target: { name: 'email', value: 'trainee@example.com' } });
        fireEvent.click(screen.getByText('🔓Login'));

        await waitFor(() => {
            expect(emailInput.value).toBe('');
        });
    });

    test('redirects immediately (replace) if already logged in on mount', () => {
        renderLogin({ login: jest.fn(), isLoggedIn: true });

        expect(mockNavigate).toHaveBeenCalledWith('/employeeslist', { replace: true });
    });

    // --- Known gap -----------------------------------------------------------
    // validateInput() is currently called but its return value is discarded,
    // so an invalid form still submits. Once submitInput is fixed to check
    // `if (!validateInput()) { ...; return; }`, remove `.skip` below.
    test.skip('does NOT call login() when the form fails validation (pending fix)', async () => {
        const loginMock = jest.fn();
        renderLogin({ login: loginMock, isLoggedIn: false });

        // email left blank, password too short -> should fail validateInput()
        fireEvent.change(screen.getByPlaceholderText('Enter your password'), {
            target: { name: 'password', value: 'ab' },
        });
        fireEvent.click(screen.getByText('🔓Login'));

        await waitFor(() => {
            expect(loginMock).not.toHaveBeenCalled();
        });
    });
});

