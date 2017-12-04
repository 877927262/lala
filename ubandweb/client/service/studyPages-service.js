/**
 * Created by johnbryant on 2017/3/17.
 */
import fetch from '../utilities/fetch-util'

export default class studyPagesService {

  static getClazzList (status,token) {
    return fetch('get', '/clazzes', token,{'status':status})
  };

  static getClazzDetail (clazzId,token) {
    return fetch('get', `/clazz/${clazzId}`, token)
  };

  static getCourseIntroduction (clazzId,token) {
    return fetch('get',  `/clazz/${clazzId}/introduction`, token)
  };

  static getCourseStrategy (clazzId,token) {
    return fetch('get', `/clazz/${ clazzId }/strategy`, token)
  };

}
