/**
 * Created by johnbryant on 2017/3/13.
 */
import 'whatwg-fetch';

export default async(type = 'GET', url = '', token = '', data = {}, method = 'fetch', returnRes = false) => {
  type = type.toUpperCase();
  var baseUrl = '/web';
  url = baseUrl + url;

  if (type == 'GET') {
    // 数据拼接字符串
    let dataStr = '';
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&';
    })

    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
      url = url + '?' + dataStr;
    }
  }

  // 默认使用fetch
  if (window.fetch && method == 'fetch') {

    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('X-Auth-Token', token);

    let requestConfig = {
      method: type,
      headers: headers
    };

    if (type == 'POST' || type == 'PUT') {
      Object.defineProperty(requestConfig, 'body', {
        value: JSON.stringify(data)
      })
    }

    try {
      var response = await fetch(url, requestConfig);
      if (returnRes) {
        return response
      } else {
        var responseJson = await response.json();
        return responseJson;
      }
    } catch (error) {
      throw new Error(error)
    }


  } else {
    // 使用XMLHttpRequest
    let requestObj;
    if (window.XMLHttpRequest) {
      requestObj = new XMLHttpRequest();
    } else {
      requestObj = new ActiveXObject;
    }

    let sendData = '';
    if (type == 'POST') {
      sendData = JSON.stringify(data)
    }

    requestObj.open(type, url, true);
    requestObj.setRequestHeader("Accept", "application/json");
    requestObj.setRequestHeader("Content-type", "application/json");
    requestObj.setRequestHeader("X-Auth-Token", token);
    requestObj.send(sendData);

    return new Promise((resolve, reject) => {
      requestObj.onreadystatechange = () => {
        if (requestObj.readyState == 4) {
          if (requestObj.status == 200) {
            let obj = requestObj.response
            if (typeof obj !== 'object') {
              obj = JSON.parse(obj)
            }
            return resolve(obj)
          } else {
            return reject(new Error(requestObj))
          }
        }
      }
    })
  }
}
