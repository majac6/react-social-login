# @majac/react-social-login

> Social Login Module For React

[![NPM](https://img.shields.io/npm/v/@majac/react-social-login.svg)](https://www.npmjs.com/package/@majac/react-social-login) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @majac/react-social-login
```

## Demo

[Demo Link](https://majac6.github.io/react-social-login/)

## Update Logs

#### 1.0.4

##### Korean
- 페이스북 로그인부분 토큰값과 이메일 추가적으로 나오도록 수정.

##### English
- Fixed token value and email added to Facebook login.

#### 1.0.3

##### Korean
- 데모 링크 추가
- 구글 로그인의 리턴값에 ID 항목을 추가하고, 변환되기 전 리턴값을 origin 의 키 값으로 제공합니다.

##### English
- Provide Demo
- Return JSON to google Added ID And Origin that include google auth origin return JSON

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
