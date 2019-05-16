import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

class ScrollToRoute extends Component {
    componentDidUpdate(prevProps) {
        const isRouteUpdate = this.props.path === this.props.location.pathname && this.props.location.pathname !== prevProps.location.pathname;
        const isAnchor = Boolean(this.props.location.hash);
        let element = document.getElementById('root');
        if (isAnchor) {
            const id = this.props.location.hash.replace('#', '');
            this.props.location.hash = ""
            element = document.getElementById(id);
        }
        if (isRouteUpdate || isAnchor) {
            setTimeout(() => {
                const behavior = isRouteUpdate ? 'instant' : 'smooth';
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