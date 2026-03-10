import Mock from 'mockjs'

Mock.mock('/api/login', 'post', (data: object) => {
    console.log('Mock login request data:', data);
    const { username, password } = data as any;
    if (username === 'admin' && password === 'admin') {
        return {
            code: 0,
            message: 'Login successful',
            data: {
                token: 'mock-token',
                userInfo: {
                    name: 'Admin User',
                    email: '',
                    avatar: 'https://i.pravatar.cc/150?img=1',
                },
            },
        };
    } else {
        return {
            code: 1,
            msg: 'Invalid username or password',
        };
    }
});