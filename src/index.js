/**
 * @class SocialLogin
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SocialLogin extends Component {
  state = {
    facebook: false,
    google: false
  }

  componentDidMount() {
    this.initSocialService()
  }

  handleClick = () => {
    const { facebook, google } = this.state
    const { options: originOptions } = this.props
    const options = {
      provider: 'facebook',
      onSuccess: res => {
        console.warn('Need your func at onSuccess Attr!', res)
      },
      onFail: res => {
        console.warn('Need your func at onFail Attr!', res)
      },
      ...originOptions,
      fields: 'email,first_name,last_name,picture,middle_name,name,gender'
    }
    const { provider, onSuccess, onFail, fields, appId } = options

    if (provider === 'facebook') {
      window.FB.login(
        res => {
          // console.log(res)
          if (res.authResponse) {
            // 로그인 성공
            window.FB.api(
              '/me',
              res => {
                res.picture = res.picture.data.url
                res.origin = FB.getAuthResponse()
                res.token = res.origin.accessToken
                onSuccess(res)
              },
              { fields: fields }
            )
          } else {
            onFail(res)
          }
        },
        { scope: 'public_profile,email', return_scopes: false }
      )
    } else if (provider === 'google') {
      const googleLoginBtnElement = document.getElementById(
        'button-social-google'
      )

      gapi.load('auth2', () => {
        // Retrieve the singleton for the GoogleAuth library and set up the client.
        const auth2 = gapi.auth2.init({
          client_id: appId,
          cookiepolicy: 'single_host_origin',
          scope: 'profile'
        })
        auth2.attachClickHandler(
          googleLoginBtnElement,
          {},
          res => {
            res = {
              email: res.w3.U3,
              first_name: res.w3.ofa,
              last_name: res.w3.wea,
              picture: res.w3.Paa,
              id: res.w3.Eea,
              origin: res
            }
            onSuccess(res)
          },
          error => {
            onFail(error)
          }
        )

        if (!google) {
          this.setState({ google: true })
          googleLoginBtnElement.click()
        }
      })
    }
  }

  initSocialService = () => {
    const { options: originOptions } = this.props
    const { facebook, google } = this.state
    const options = {
      provider: 'facebook',
      version: '3.0',
      lang: 'en_US',
      ...originOptions
    }
    const { lang, provider, appId, version } = options

    if (appId === '' || appId === null || appId === undefined) return false

    if (provider === 'facebook') {
      if (facebook) return
      // 이미 init 되었을 경우 아래 동작을 수행하지 않음.

      // FB 가 준비되면 실행될 함수를 담아둠.
      window.fbAsyncInit = () => {
        window.FB.init({
          appId: appId,
          version: `v${version}`,
          autoLogAppEvents: true
        })
      }
      // FaceBook SDK Script 파일을 현재 Doc에 Tag 형태로 삽입
      ;((d, s, id) => {
        const element = d.getElementsByTagName(s)[0]
        const fjs = element
        let js = element
        if (d.getElementById(id)) return
        js = d.createElement(s)
        js.id = id
        js.src = `https://connect.facebook.net/${lang}/sdk.js`
        fjs.parentNode.insertBefore(js, fjs)
        this.setState({
          facebook: true
        })
      })(document, 'script', 'facebook-jssdk')
    } else if (provider === 'google') {
      if (typeof window.gapi !== 'undefined') {
        return false
      }
      // 이미 init 되었을 경우 아래 동작을 수행하지 않음.

      ;((d, s, id) => {
        const element = d.getElementsByTagName(s)[0]
        const fjs = element
        let js = element
        if (d.getElementById(id)) return
        js = d.createElement(s)
        js.id = id
        js.src = 'https://apis.google.com/js/platform.js'
        fjs.parentNode.insertBefore(js, fjs)
      })(document, 'script', 'google-jssdk')
    }
  }

  render() {
    const { handleClick, props } = this
    const { options, component } = props
    const { provider } = options
    return (
      <div id={`button-social-${provider}`} onClick={handleClick}>
        {component}
      </div>
    )
  }
}

SocialLogin.defaultProps = {
  component: <button>You Must have [component] attribute!</button>
}

SocialLogin.propTypes = {
  options: PropTypes.object.isRequired
}

export default SocialLogin
