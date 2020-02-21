import React, {Component} from 'react'
import {HashRouter, Route, Switch} from "react-router-dom";

import Login from "./pages/login/login";
import Main from "./pages/main/main";
/*
应用的根组件
 */
export default class App extends Component {


  render () {
    return (
        <HashRouter>
          <Switch> {/*只匹配其中一个*/}
            <Route path='/login' component={Login}></Route>
            <Route path='/' component={Main}></Route>
          </Switch>
        </HashRouter>
    )
  }
}