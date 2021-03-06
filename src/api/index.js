/*
要求: 能根据接口文档定义接口请求
包含应用中所有接口请求函数的模块
每个函数的返回值都是promise

基本要求: 能根据接口文档定义接口请求函数
 */
import ajax from './ajax'
import '../mock/mockdata'
const BASE = '/api/p'

// export const reqQueryRoles = (userid) => ajax(BASE + '/common/', {tranCode:'LoginPermission', userid,jsbm:''}, 'POST')
export const reqLoginBus = (userCode,password,branchNo) => ajax(BASE + '/customize/920001', {userCode,password,branchNo}, 'POST')