/**
 * Created by admin on 2017/2/17.
 */
import {Field,reduxForm} from "redux-form"
import React from "react"


const SimpleForm=(props)=>{
    const {handleSubmit,onClick,reset,invalid,submitting}=props
    return(
            <form onSubmit={handleSubmit(onClick)}>
                <div>
                    <Field name="user" component="input" type="text" placeholder="user"></Field>
                </div>
                <div>
                    <Field name="passWord" component="input" type="password" placeholder="password"></Field>
                </div>
                <div>
                    <button type="submit" disabled={invalid || submitting} >submit</button>
                    <button type="button" disabled={invalid || submitting} onClick={reset}>reset</button>
                </div>
            </form>
        )
}
const defaultValue={user:123,passWord:1111}
const validate=(value)=>{
    const errors={}
    if(!value.user){
        errors.user="Required"
    }
    if(!value.passWord){
        errors.passWord="Requred"
    }
    return errors
}
export default reduxForm({
    form:"coo",
    initialValues: defaultValue
})(SimpleForm)


