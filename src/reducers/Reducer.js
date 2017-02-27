/**
 * Created by admin on 2017/2/17.
 */
import {createReducer} from "redux-act"
import {simpleForm} from "../actions/Action"

export default createReducer({
    [simpleForm]: (state, payload) =>
    {alert(payload.user)
        // return {...payload}}
        return{
            username:payload.user,
            password:payload.passWord
        }
    }
},{username:"abc",password:"1111"}
)

















