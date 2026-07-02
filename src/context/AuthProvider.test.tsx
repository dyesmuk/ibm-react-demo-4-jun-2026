import { useContext } from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import AuthContext from '../context/AuthContextType';
import AuthProvider from './AuthProvider';
import { loginUser } from '../services/user.service';

const TestConsumer = () => {
    const { isLoggedIn, employee, login, logout } = useContext(AuthContext);

    const handleLoginClick = async () => {
        try {
            await login({ email: 'trainee@example.com', password: 'secret123' });
        } catch {
            // swallow here -- the error itself is asserted separately below
        }
    };

    return (
        <div>
            <p>isLoggedIn: {String(isLoggedIn)}</p>
            <p>employee: {employee ? employee.name : 'none'}</p>
            <button onClick={handleLoginClick}>trigger-login</button>
            <button onClick={logout}>trigger-logout</button>
        </div>
    );
};

const renderWithProvider = () =>
    render(
        <AuthProvider>
            <TestConsumer />
        </AuthProvider>
    );

jest.mock('../services/user.service', () => ({
    loginUser: jest.fn(),
}));

const mockedLoginUser = loginUser as jest.Mock;

describe('AuthProvider', () => {
    beforeEach(() => {
        localStorage.clear();
        mockedLoginUser.mockReset();
    });

    test('hydrates isLoggedIn/employee from localStorage on mount', () => {
        localStorage.setItem('token', 'existing-jwt');
        localStorage.setItem('employee', JSON.stringify({ name: 'Stored Employee' }));

        renderWithProvider();

        expect(screen.getByText('isLoggedIn: true')).toBeInTheDocument();
        expect(screen.getByText('employee: Stored Employee')).toBeInTheDocument();
    });

    test('defaults to logged out when localStorage is empty', () => {
        renderWithProvider();

        expect(screen.getByText('isLoggedIn: false')).toBeInTheDocument();
        expect(screen.getByText('employee: none')).toBeInTheDocument();
    });

    test('login() success: stores token/employee, updates state', async () => {
        mockedLoginUser.mockResolvedValue({
            data: { token: 'jwt-abc', employee: { name: 'New Employee' } },
        });

        renderWithProvider();
        fireEvent.click(screen.getByText('trigger-login'));

        await waitFor(() => {
            expect(screen.getByText('isLoggedIn: true')).toBeInTheDocument();
        });
        expect(screen.getByText('employee: New Employee')).toBeInTheDocument();
        expect(localStorage.getItem('token')).toBe('jwt-abc');
        expect(localStorage.getItem('employee')).toBe(JSON.stringify({ name: 'New Employee' }));
    });

    test('login() failure: throws and leaves state/localStorage untouched', async () => {
        mockedLoginUser.mockResolvedValue({ data: {} }); // no token in response

        renderWithProvider();
        fireEvent.click(screen.getByText('trigger-login'));

        // give the async login() a tick to run and (not) update state
        await waitFor(() => {
            expect(mockedLoginUser).toHaveBeenCalledTimes(1);
        });

        expect(screen.getByText('isLoggedIn: false')).toBeInTheDocument();
        expect(localStorage.getItem('token')).toBeNull();
        expect(localStorage.getItem('employee')).toBeNull();
    });

    test('login() failure: rejects with "Invalid credentials"', async () => {
        mockedLoginUser.mockResolvedValue({ data: {} });

        let rejection: unknown = null;
        const Capture = () => {
            const { login } = useContext(AuthContext);
            return (
                <button
                    onClick={async () => {
                        try {
                            await login({ email: 'a@b.com', password: 'bad' });
                        } catch (err) {
                            rejection = err;
                        }
                    }}
                >
                    go
                </button>
            );
        };
        render(
            <AuthProvider>
                <Capture />
            </AuthProvider>
        );

        fireEvent.click(screen.getByText('go'));

        await waitFor(() => {
            expect(rejection).toBeInstanceOf(Error);
        });
        expect((rejection as Error).message).toBe('Invalid credentials');
    });

    test('logout() clears localStorage and resets state', async () => {
        localStorage.setItem('token', 'existing-jwt');
        localStorage.setItem('employee', JSON.stringify({ name: 'Stored Employee' }));

        renderWithProvider();
        expect(screen.getByText('isLoggedIn: true')).toBeInTheDocument();

        fireEvent.click(screen.getByText('trigger-logout'));

        expect(screen.getByText('isLoggedIn: false')).toBeInTheDocument();
        expect(screen.getByText('employee: none')).toBeInTheDocument();
        expect(localStorage.getItem('token')).toBeNull();
        expect(localStorage.getItem('employee')).toBeNull();
    });
});
