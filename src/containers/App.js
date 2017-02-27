/**
 * Created by admin on 2017/2/17.
 */

import ShowForm from "../componets/ShowForm"
import SimpleForm from "../componets/SimpleForm"
import {connect} from "react-redux"
import {simpleForm} from "../actions/Action"
import React,{Component} from "react"


class App extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
                <div>
                    <SimpleForm   onClick={ (value)=>{this.props.simpleForm(value)} }  />
                    <ShowForm username={this.props.username} />
                </div>
        )
    }
}

const mapStateToProps=(state)=>{
    console.log(state.redu.username)
    console.log(state.redu.password)
    return{
        username:state.redu.username,
        password:state.redu.password
    }
}
export default connect(mapStateToProps,{simpleForm})(App)













