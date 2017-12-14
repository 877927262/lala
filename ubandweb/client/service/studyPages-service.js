/**
 * Created by johnbryant on 2017/3/17.
 */
import fetch from '../utilities/fetch-util'

export default class studyPagesService {

  static getAllDepartment () {
    return fetch('get', '/getAllDepartment')
  };


}
