import React from "react";
import {Link} from "react-router-dom"
import Header from "../../components/Header/Header";
import "./index.less"
export default class Login extends React.Component{
    render(){
        return (
            <div className="login container">
               <Header title="登陆"/>
                <ul>
                    <li><input type="text"/></li>
                    <li><input type="text"/></li>
                    <li><Link to="/reg">前往注册</Link></li>
                    <li>
                        <button>登陆</button>
                    </li>
                </ul>
            </div>
        )
    }
}