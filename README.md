# @majac/react-social-login

> Social Login Module For React

[![NPM](https://img.shields.io/npm/v/@majac/react-social-login.svg)](https://www.npmjs.com/package/@majac/react-social-login) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @majac/react-social-login
```

## Usage

```jsx
import React, { Component } from 'react';

import SocialLogin from '@majac/react-social-login';

class Example extends Component {
  render() {
    return (
      <SocialLogin
        options={{
          provider: 'facebook or google',
          appId: 'Your App ID',
          onSuccess: res => {
            console.log('Login Success', res);
          },
          onFail: error => {
            console.log('Login Fail', error);
          }
        }}
        component={<button>FaceBook Login</button>}
      />
    );
  }
}
```

## License

MIT © [majac6](https://github.com/majac6)
