import React from "react";
import "../../common/index.less"
import "./TabBar.less";
import {NavLink} from "react-router-dom";
export default class TabBar extends React.Component{
    render(){
        return (
            <nav className="nav-bar">
                <NavLink to="/home">
                    <i className="iconfont icon-shouye"></i>
                    <span>首页</span>
                </NavLink>
                <NavLink to="/lesson">
                    <i className="iconfont icon-react"></i>
                    <span>我的课程</span>
                </NavLink>
                <NavLink to="/profile">
                    <i className="iconfont icon-grzx"></i>
                    <span>个人中心</span>
                </NavLink>
            </nav>
        )
    }
}