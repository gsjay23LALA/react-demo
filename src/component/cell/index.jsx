import React, { Component } from 'react'
import { render } from 'react-dom';
import './index.css'

class cell extends Component {
    handleClick(i) {
        window.location.href = this.props.item[i].url
    }
    render() {
        return (
            <div>
                {
                    //通过props传值
                    this.props.item.map((item, i) => {
                        return (
                                <div className="cell" onClick={this.handleClick.bind(this, i)} key={i}>
                                    <div className="cell-img"><img src={item.cover} alt="" /></div>
                                    <div className="cell-title"><h4>{item.title}</h4><p>{item.published}</p></div>
                                </div>
                           )
                    })
                }
            </div>
        )
    }
}
export default cell
