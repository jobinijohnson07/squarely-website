import React, { Component } from 'react'
import './borderAnimeButton.scss';
class BorderAnimeButton extends Component{
    render() {
        return(
            <div className={`btn-border-light ${this.props.class}`}>
                <div className='dot' style={{backgroundColor: `${this.props.dotColor}`}}></div>
                <div class="btn-border-light-inner" style={{width:`${this.props.width}`}}>
                    <a href="#" style={{color:`${this.props.color}`}}>{this.props.label}</a>
                </div>
            </div>
        )
    }
}
export default BorderAnimeButton;