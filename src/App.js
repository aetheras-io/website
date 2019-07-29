import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';
import { addLocaleData, IntlProvider } from 'react-intl';
import zh from 'react-intl/locale-data/zh';
import en from 'react-intl/locale-data/en';
import localeConfig from './i18n/locale-config';
import ReactGA from 'react-ga';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { STYLES_CONST } from './utils/shared-styles';
import ScrollToRoute from './components/shared/ScrollToRoute';
import IntlComponent from './components/shared/IntlComponent';
import GoogleAnalytics from './components/shared/Google-Analytics';
import Home from './components/Home';
import About from './components/About';
import Whitepaper from './components/Whitepaper';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { debounce } from './utils/utils';
import { Button } from '@material-ui/core';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import 'hamburgers/dist/hamburgers.min.css';
import './styles/app.css';
import CONST from './utils/const';

addLocaleData([...en, ...zh]);

const theme = createMuiTheme({
    palette: {
        primary: {
            main: STYLES_CONST.primaryColor,
            contrastText: '#fff',
        },
        secondary: {
            main: STYLES_CONST.secondaryColor,
            contrastText: '#fff',
        },
    },
    typography: {
        fontFamily: [
            'Montserrat',
            '-apple-system',
            'Roboto',
            'sans-serif',
        ].join(','),
    },
});


class App extends IntlComponent {
    constructor(props) {
        super(props);
        // const browserLanguage = (navigator.language || navigator.browserLanguage).toLowerCase();
        // this.defaultLocale = (localeConfig.find(l => l.languageCode === browserLanguage || l.locale === browserLanguage) || localeConfig[0]);
        this.defaultLocale = localeConfig.find(l => l.languageCode === 'en-us');
        this.state = {
            network: 'Loading...',
            currentLocale: this.defaultLocale,
            showToTopButton: false
        };
        ReactGA.initialize(CONST.googleAnalyticsID);
    }

    setLocale = (locale) => {
        this.setState({ currentLocale: locale });
    }

    componentDidMount() {
        const { currentLocale } = this.state;
        if (currentLocale) {
            this.loadLocaleData({
                intl: {
                    locale: currentLocale.locale,
                    defaultLocale: this.defaultLocale.locale
                }
            });
        }
        window.addEventListener('scroll', debounce(this.handleScroll));
    }

    componentWillUpdate(nextProps, nextState) {
        const { currentLocale } = this.state;
        if (nextState.currentLocale.locale !== currentLocale.locale) {
            this.loadLocaleData({
                intl: {
                    locale: nextState.currentLocale.locale,
                    defaultLocale: this.defaultLocale.locale
                }
            });
        }
    }

    handleScroll = e => {
        const triggerElement = document.getElementById('to-top-trigger');
        if (triggerElement) {
            const triggerHeight = triggerElement.offsetTop - (window.innerHeight + 50);
            this.safeSetState({ showToTopButton: window.scrollY > triggerHeight });
        } else {
            this.safeSetState({ showToTopButton: false });
        }
    }

    scrollToTop = () => {
        const ele = document.getElementById('root');
        ele.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => this.safeSetState({ showToTopButton: false}), 300);
    }

    render() {
        const { currentLocale, intlData, showToTopButton } = this.state;

        if (!intlData) {
            return null;
        }

        return (
            <MuiThemeProvider theme={theme}>
                <IntlProvider locale={currentLocale.locale} messages={intlData.static}>
                    <React.Fragment>
                        <CssBaseline />
                        <Router>
                            <React.Fragment>
                                <GoogleAnalytics />
                                <Navbar locale={localeConfig} setLocale={this.setLocale} />
                                <Switch>
                                    <ScrollToRoute exact path="/" component={Home} />
                                    <ScrollToRoute path="/about" component={About} />
                                    <ScrollToRoute path="/agora" component={Whitepaper} />                                    
                                    <ScrollToRoute
                                        exact
                                        path="/404"
                                        status={404}
                                        component={NotFound}
                                    />
                                    <Redirect to="/404" />
                                </Switch>
                                <Footer />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={'to-top-button' + (showToTopButton ? ' active' : '')}
                                    onClick={this.scrollToTop}
                                >
                                    <ArrowUpward />
                                </Button>
                            </React.Fragment>
                        </Router>
                    </React.Fragment>
                </IntlProvider>
            </MuiThemeProvider>
        );
    }
}

export default App;
