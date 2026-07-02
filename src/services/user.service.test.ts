// import '@testing-library/jest-dom';
// import { loginUser } from './user.service';

// describe('', () => {

//     it('test login status', async () => {
//         const user = {email: 'aditya.k@ems.local', password: 'pass1234'};
//         const response = await loginUser(user);
//         console.log(response);
//         expect(response.status).toBe(200);
//     });

// });



import '@testing-library/jest-dom';
import api from './api.service';
import { loginUser, registerUser, logoutUser } from './user.service';

jest.mock('./api.service');

const mockedApi = api as jest.Mocked<typeof api>;

describe('user.service', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('loginUser posts credentials to /api/auth/login and returns the response', async () => {
        const credentials = { email: 'trainee@example.com', password: 'secret123' };
        mockedApi.post.mockResolvedValue({ data: { token: 'jwt-abc', employee: { id: 1 } } });

        const result = await loginUser(credentials);

        expect(mockedApi.post).toHaveBeenCalledTimes(1);
        expect(mockedApi.post).toHaveBeenCalledWith('/api/auth/login', credentials);
        expect(result.data.token).toBe('jwt-abc');
    });

    test('loginUser propagates rejection when the API call fails', async () => {
        mockedApi.post.mockRejectedValue(new Error('Network Error'));

        await expect(
            loginUser({ email: 'trainee@example.com', password: 'wrong' })
        ).rejects.toThrow('Network Error');
    });

    test('registerUser posts the new user payload to /api/auth/register', async () => {
        const newUser = { email: 'new@example.com', password: 'secret123', name: 'New Trainee' };
        mockedApi.post.mockResolvedValue({ data: { id: 42 } });

        const result = await registerUser(newUser);

        expect(mockedApi.post).toHaveBeenCalledWith('/api/auth/register', newUser);
        expect(result.data.id).toBe(42);
    });

    test('logoutUser posts to /api/auth/logout with no body', async () => {
        mockedApi.post.mockResolvedValue({ data: {} });

        await logoutUser();

        expect(mockedApi.post).toHaveBeenCalledWith('/api/auth/logout');
    });
});

