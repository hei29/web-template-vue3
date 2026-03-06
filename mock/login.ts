import Mock from 'mockjs'

Mock.mock('/\/api\/login/', 'post', (data: object) => {
    const { username, password } = data as any;
    if (username === 'admin' && password === 'admin') {
        return {
            code: 0,
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