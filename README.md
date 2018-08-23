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

#### 1.0.9

##### Korean

- 버그 수정

##### English

- Bug Fix

#### 1.0.8

##### Korean

- 버그 수정

##### English

- Bug Fix

#### 1.0.7

##### Korean

- 페이스북 로그인 창을 불필요하게 호출하지 않도록 변경.
- 페이스북, 구글 SDK 가 존재할 경우 반복해서 init 하지 않록 변경.

##### English

- Change your Facebook login window to avoid unnecessary calls.
- If Facebook or Google SDK exists, change repeatedly without init.

#### 1.0.6

##### Korean

- 페이스북 로그인부분 토큰값과 이메일 추가적으로 나오도록 수정.
- **긴급수정** 1.0.4 버전에서 페이스북 로그인 이후 이메일 값이 정상적으로 리턴되지 않는 문제 해결.

##### English

- Fixed token value and email added to Facebook login.
- **HOTFIX** You get user email address when Facebook Logined.

#### 1.0.4 & 1.0.5

- Deleted Version

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
