/*
用来根据老的state和指定的action生成并返回新的state的函数
 */
import {combineReducers} from 'redux'
import {
    SET_HEAD_TITLE,
    RECEIVE_USER,
    RESET_USER
} from './action-types'

const initHeadTitle = ''

function headTitle(state = initHeadTitle, action) {
    switch (action.type) {
        case SET_HEAD_TITLE:
            return action.data
        default:
            return state
    }
}
const initUser = {}
function user(state = initUser, action) {
    switch (action.type) {
        case RECEIVE_USER:
            return action.user
        case RESET_USER:
            return {}
        default:
            return state
    }
}
export default combineReducers({
    headTitle,
    user
})