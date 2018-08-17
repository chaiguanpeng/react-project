import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
export default class Home extends Component {
    constructor(){
        super();
        this.state = {index:0}
    }
    render() {
        console.log(this.props);
        let opts = {continuous: true,auto:1000,transitionEnd: (index)=> {
                this.setState({index})
            }};
        return (
            <div className="home-slider">
                <ReactSwipe className="carousel" swipeOptions={opts}>
                    {this.props.lists.map((item,index)=>(
                        <div key={index}>
                            <img src={item} alt=""/>
                        </div>
                        )
                    )}
                </ReactSwipe>
                <ul className="home-slider-dots">
                    {this.props.lists.map((item,index)=>(
                        <li key={index} className={index===this.state.index?"active":""}></li>
                    ))}
                </ul>
            </div>
        )
    }
}