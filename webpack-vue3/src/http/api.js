import fetcher from './fetch.js'
// import { fetchPrefix } from "@config/app.config";
let fetchPrefix = '/api/app'


/**
 * 获取token
 * @param {code，url} data 
 */
export const test = () => fetcher(`${fetchPrefix}/test`, {}, 'post', true, true)


