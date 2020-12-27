import React, { Component } from "react";

class Media extends Component {
    render() {
        return (
            // <div className="col-md-4 col-sm-4 col-xs-4">
            <div className={this.props.media}>
                <a href={this.props.url} rel="noopener" target="_blank">
                    <img src={this.props.src} alt={this.props.alt}></img>
                </a>
            </div>
        );
    }
}

export default Media;
