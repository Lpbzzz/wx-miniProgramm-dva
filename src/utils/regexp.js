/*
 * @Date: 2019-09-09 11:16:07
 * @LastEditors: Lpbzzz
 * @LastEditTime: 2019-09-09 13:39:13
 */

export function RegNumber(params){
    const reg = /^\d{0,11}$/
    return reg.test(params)
}