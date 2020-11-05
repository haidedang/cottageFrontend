import React, { Component } from "react";
import Instagram from "../../lib/Instagram";
import Media from "./Media";
import FeedPageStyles from './Feed.module.css'

class Feed extends Component {
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
            .catch((error) => this.setState({ error }));
    }

    render() {
        if (this.state.error) throw this.state.error;

        const className = this.state.loading
            ? [this.props.className, this.props.classNameLoading].join(" ")
            : this.props.className;

        return (
                <div className={[FeedPageStyles.wrapper, 'row', 'no-gutters'].join(' ')}>
                    {this.state.media.map((media, index) => (
                        <Media key={index} src={media.src} url={media.url} alt={media.alt} />
                    ))}
                </div>
          
        );
    }
}

export default Feed;
