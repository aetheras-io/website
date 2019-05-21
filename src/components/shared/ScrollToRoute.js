import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

class ScrollToRoute extends Component {

    componentDidMount() {
        if (this.props.location.state) {
            this.props.location.state.shouldScroll = false;
        }
    }

    componentDidUpdate(prevProps) {
        const state = this.props.location.state;
        if (state && state.shouldScroll) {
            this.props.location.state.shouldScroll = false;
            const isRouteUpdate = this.props.path === this.props.location.pathname && this.props.location.pathname !== prevProps.location.pathname;
            const behavior = isRouteUpdate ? 'instant' : 'smooth'
            setTimeout(() => {
                const element = document.getElementById(state.anchor || 'root');
                element.scrollIntoView({ behavior: behavior });
            }, 0);
        }
    }

    render() {
        const { component: Component, ...rest } = this.props;
        return <Route {...rest} render={props => (<Component {...props} />)} />;
    }
}

export default withRouter(ScrollToRoute);