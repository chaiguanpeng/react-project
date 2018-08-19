import React from "react";
import Header from '../../components/Header/Header'
import './index.less'
export default class Detail extends React.Component{
    render(){
        let lesson = this.props.location.state;
        if(!lesson){ //如果数据不存在进行数据请求，this.props.match.params.id
            lesson ={}
        }
        let {video,url} = lesson;
        return (
            <div className="detail">
                <Header title="详情页"/>
                <video src={video} poster={url} controls autoPlay></video>
            </div>
        )
    }
}