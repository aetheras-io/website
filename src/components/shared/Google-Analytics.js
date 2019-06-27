import ReactGA from 'react-ga';
import { withRouter } from "react-router";

const GoogleAnalytics = props => {
    ReactGA.set({ page: props.location.pathname });
    ReactGA.pageview(props.location.pathname);
    return null;
}

export default withRouter(GoogleAnalytics);