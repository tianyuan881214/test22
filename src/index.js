/**
 * Created by admin on 2017/2/17.
 */
import React,{Component} from "react"
import {render} from "react-dom"

const app=document.createElement("div")
document.body.appendChild(app)

import reducer from "./reducers/index"
import App from "./containers/App"
import {Provider} from "react-redux"
import {createStore} from "redux"

const store=createStore(reducer)

render(
    // <h1>hello test22</h1>,
    <Provider store={store}>
        <App/>
    </Provider>,
    app
)