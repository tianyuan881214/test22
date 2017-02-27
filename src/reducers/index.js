/**
 * Created by admin on 2017/2/20.
 */
import redu from "./Reducer"
import {combineReducers} from "redux"
import {reducer  as form } from "redux-form"
export default combineReducers({
    redu,form
})