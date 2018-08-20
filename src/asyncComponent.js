import React from "react";
import 'babel-polyfill';
export default function (func) {
    return class Proxy extends React.Component{
        constructor(){
            super();
            this.state = {component:null}
        }
        async componentDidMount(){
            let {default:component} = await func();
            this.setState({component});
        }
        render(){
            let C = this.state.component;
            return C? <C/>:null
        }
    }
}