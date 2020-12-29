import React, { Component } from "react";
import Instagram from "../lib/Instagram";
import Media from "./Media";

class InstaFeed extends Component {
    static defaultProps = {
        className: "",
        classNameLoading: "",
        getFeedFn: Instagram.getFeed,
    };

    constructor(props) {
        super(props);

        this.state = { loading: true, media: [] };
    }

    componentDidMount() {
        this.props
            .getFeedFn(this.props.userName)
            .then((media) => this.setState({ loading: false, media: media }))
            .catch((error) => {
                console.log('FUCK THIS')
                alert('FUCK')
            }
             );
    }

    render() {
        if (this.state.error) throw this.state.error;
        
        return (
                <div className={this.props.footer}>
                    {this.state.media.map((media, index) => (
                        <Media media={this.props.media} key={index} src={media.src} url={media.url} alt={media.alt} />
                    ))}
                </div>
        );
    }
}

export default InstaFeed;
