/**
 * 需要使用到sign验证和token验证时引入headerSetSign、headerSetToken
 */
// import { headerSetSign, headerSetToken } from '@utils'

import axios from 'axios'

const instance = axios.create({
  baseUrl: '',
  timeout: 10000,
  withCredentials: false,
  onUploadProgress: e=>{
    console.log('上传进度', parseInt((e.loaded / e.total) * 100))
  }
  
})

export default async function (url, data = {}, method = "", notToken, notSign, cb) {
  console.log('aaa', arguments)
  
  instance[cb] = cb;
  const defaultMethod = {
    OPTIONS: "OPTIONS",
    GET: "GET",
    HEAD: "HEAD",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",
    TRACE: "TRACE",
    CONNECT: "CONNECT",
  };
  method = defaultMethod[method.toUpperCase()] ? defaultMethod[method.toUpperCase()] : "GET";
  const responseType = data["responseType"] ? data["responseType"] : "json";
  const headers = data["headers"] ? data["headers"] : { 'content-type': 'application/json' };


  /**
   * 需要使用到sign验证和token验证时
   */
  if (!notSign) {
    let _signObj = await headerSetSign();
    headers.encryptSign = _signObj.encryptSign;
    headers.signIv = _signObj.signIv;
  }
  if (!notToken) {
    let _tokenObj = await headerSetToken();
    console.log('_tokenObj', _tokenObj)
    if (_tokenObj.error == 0) {
      headers.encryptToken = _tokenObj.data.encryptToken;
      headers.tokenIv = _tokenObj.data.tokenIv;
    } else if (_tokenObj.error == 2) {
      return _tokenObj;
    } else {
      return { code: 1, data: {}, msg: "获取token失败"}
    }
  }

  data = data["params"] ? data["params"] : data;
  const requestObj = {url, headers, method, responseType};

  if(method == "PUT" || method == "POST" || method == "PATCH"){
    requestObj.data = data;
  }else{
    requestObj.params = data
  }
  return instance.request(requestObj).then((respone) => {
    return respone.data
  })
}