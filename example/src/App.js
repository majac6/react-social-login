import React, { Component } from 'react';

import SocialLogin from '@majac/react-social-login';

export default class App extends Component {
  state = {
    facebook: '230341774161033',
    google:
      '908589904410-evstjaeri2ahnvbu8ivvjghmo1uujttn.apps.googleusercontent.com'
  };

  render() {
    const { facebook, google } = this.state;
    return (
      <div>
        <h1>FaceBook And Google Login Component</h1>
        <SocialLogin
          options={{
            provider: 'facebook',
            appId: facebook,
            onSuccess: res => {
              console.log('Login Success', res);
            },
            onFail: error => {
              console.log('Login Fail', error);
            }
          }}
          component={<button>FaceBook Login</button>}
        />

        <SocialLogin
          options={{
            provider: 'google',
            appId: google,
            onSuccess: res => {
              console.log('Login Success', res);
            },
            onFail: error => {
              console.log('Login Fail', error);
            }
          }}
          component={<button>Google Login</button>}
        />
      </div>
    );
  }
}
