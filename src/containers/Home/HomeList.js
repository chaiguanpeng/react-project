import React from "react";
export default class HomeList extends React.Component{
    render(){
        console.log(this.props.lists);
        return (
            <div className="home-list">
                <ul>
                    {this.props.lists.map((item,index)=>(
                        <li key={index}>
                            <img src={item.url} alt=""/>
                            <p>{item.title}</p>
                            <span>{item.price}</span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

