import React, { Component } from "react";
import MediaPageStyles from './Media.module.css'

class Media extends Component {
    render() {
        return (
            // <div className="col-md-4 col-sm-4 col-xs-4">
            <div className="col-md-4 col-sm-4 col-xs-4 col-4 ">
                <a className={MediaPageStyles.img} href={this.props.url} rel="noopener" target="_blank">
                    <img className={MediaPageStyles.img} src={this.props.src} alt={this.props.alt}></img>
                </a>
            </div>
        );
    }
}

export default Media;
