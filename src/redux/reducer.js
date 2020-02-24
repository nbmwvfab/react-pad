/*
用来根据老的state和指定的action生成并返回新的state的函数
 */
import {combineReducers} from 'redux'
import {
    SET_DEVICE_LIST,
    SET_USER,
    RESET_USER
} from './action-types'

const initDeviceList = []

function deviceList(state = initDeviceList, action) {
    console.log(11,action)
    switch (action.type) {
        case SET_DEVICE_LIST:
            return action.deviceList
        default:
            return state
    }
}
const initUser = {}
function user(state = initUser, action) {
    console.log(22,action)
    switch (action.type) {
        case SET_USER:
            console.log(action.user)
            return action.user
        case RESET_USER:
            return action.user
        default:
            return state
    }
}
export default combineReducers({
    deviceList,
    user
})