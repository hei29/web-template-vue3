// mock/user.ts
export default [
    {
      url: '/api/login',  // 注意：这里不需要转义斜杠
      method: 'post',
      response: ({ body }) => {
        console.log('Mock login request body:', body);
        const { username, password } = body;
        
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
      },
    }
  ];