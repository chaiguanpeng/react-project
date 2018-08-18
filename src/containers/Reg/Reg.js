import React from "react";
import Header from "../../components/Header/Header";
import {Link} from "react-router-dom"
import "./index.less"
export default class Reg extends React.Component{
    render(){
        return (
            <div className="login container">
               <Header title="注册"/>
                <ul>
                    <li><input type="text"/></li>
                    <li><input type="text"/></li>
                    <li>
                        <button>注册</button></li>
                </ul>
            </div>
        )
    }
}