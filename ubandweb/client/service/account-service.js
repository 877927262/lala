/**
 * Created by johnbryant on 2017/3/17.
 */
import fetch from '../utilities/fetch-util'

export default class AccountService {
  static getWechatAuth (url) {
    return fetch('get', '/wechat/auth', null, {
      'url': url
    })
  }

  static wechatLogin (code) {
    return fetch('post', '/wechat/auth', null, {
      'code': code
    }, 'fetch', true)
  };

  static getInfo (token) {
    return fetch('get', '/account', token)
  };

}
