import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

class ScrollToRoute extends Component {
    componentDidUpdate(prevProps) {
        const isRouteUpdate = this.props.path === this.props.location.pathname && this.props.location.pathname !== prevProps.location.pathname;
        const isAnchor = this.props.location.hash !== '';
        if (isAnchor) {
            setTimeout(() => {
                const id = this.props.location.hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    const behavior = isRouteUpdate ? 'instant' : 'smooth';
                    element.scrollIntoView({ behavior: behavior })
                };
            }, 0);
            setTimeout(() => {
                window.history.pushState(null, '', this.props.location.pathname);
            }, 500)
        } else if (isRouteUpdate) {
            window.scrollTo(0, 0)
        }
    }

    render() {
        const { component: Component, ...rest } = this.props;
        return <Route {...rest} render={props => (<Component {...props} />)} />;
    }
}

export default withRouter(ScrollToRoute);