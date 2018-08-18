import React from "react";
import ReactDom,{render} from "react-dom";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import Reg from "./containers/Reg/Reg";

import Lesson from "./containers/Lesson/Lesson";
import Profile from "./containers/Profile/Profile";
import TabBar from "./components/TabBar/TabBar"
import {HashRouter,Route,Switch} from "react-router-dom";
import store from "./store";
import {Provider} from "react-redux"
render(
    <Provider store={store}>
        <HashRouter>
            <div>
                <Switch>
                    <Route path = "/home" component = {Home}></Route>
                    <Route path = "/lesson" component = {Lesson}></Route>
                    <Route path = "/profile" component = {Profile}></Route>
                    <Route path = "/login" component = {Login}></Route>
                    <Route path = "/reg" component = {Reg}></Route>
                </Switch>
                <TabBar />
            </div>
        </HashRouter>
    </Provider>
    ,document.getElementById('root'))