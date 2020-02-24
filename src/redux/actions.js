import {
    SET_USER,
    SET_DEVICE_LIST
} from './action-types'
import {reqLoginBus} from '../api'
import storageUtils from "../utils/storageUtils";
import {message} from "antd";

export const setDeviceList = (deviceList) => ({type: SET_DEVICE_LIST, deviceList})
export const setUser = (user) => ({type: SET_USER, user})
export const login = (username, password, orgid) => {
    return async dispatch => {
        // 1. 执行异步ajax请求
        const result = await reqLoginBus(username, password, orgid)  // {status: 0, data: user} {status: 1, msg: 'xxx'}
        if (result.code === 0) {
            const deviceList = result.data.rowsdata
            dispatch(setDeviceList(deviceList))
            const user = {userId:result.data.userId,userName:result.data.userName,orgId:result.data.orgId}
            dispatch(setUser(user))
            storageUtils.saveUser(user)
        } else {
            message.error("获取角色信息失败")
        }

    }
}