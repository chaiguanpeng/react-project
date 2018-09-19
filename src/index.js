import React from "react";
import ReactDom,{render} from "react-dom";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import Reg from "./containers/Reg/Reg";
import Detail from "./containers/Detail/Detail"
import ProviderRoute from "./ProviderRoute"
import TabBar from "./components/TabBar/TabBar"
import {HashRouter,Route,Switch} from "react-router-dom";
import store from "./store";
import {Provider} from "react-redux"
import async from "./asyncComponent";
let Lesson = async(()=>import("./containers/Lesson/Lesson"));
let Profile = async(()=>import("./containers/Profile/Profile"));
render(
    <Provider store={store}>
        <HashRouter>
            <div>
                <Switch>
                    <Route path = "/home" component = {Home}></Route>
                    {/*lesson进行权限校验 如果没有权限需要跳转到login进行登陆,成功后再跳回来*/}
                    <ProviderRoute path = "/lesson" component = {Lesson}></ProviderRoute>
                    <Route path = "/profile" component = {Profile}></Route>
                    <Route path = "/login" component = {Login}></Route>
                    <Route path = "/reg" component = {Reg}></Route>
                    <Route path = "/detail/:id" component = {Detail}></Route>
                </Switch>
                <TabBar />

            </div>
        </HashRouter>
    </Provider>
    ,document.getElementById('root'))