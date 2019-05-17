import React from 'react';
import { loadLocaleData } from '../../utils/utils';
import localeConfig from '../../i18n/locale-config';

class IntlComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            intlData: null
        };
        this.isMount = true;
    }

    safeSetState = (newState) => {
        if (this.isMount) {
            this.setState(newState);
        }
    }

    componentWillUnmount() {
        this.isMount = false;
    }

    componentDidMount() {
        this.loadLocaleData(this.props);
    }

    componentWillUpdate(nextProps) {
        const { intl } = this.props;

        if (!intl) {
            throw Error('intl not found');
        }

        if (nextProps.intl.locale !== intl.locale) {
            this.loadLocaleData(nextProps);
        }
    }

    loadLocaleData = (props) => {
        const { intl } = props;

        if (!intl) {
            throw Error('intl not found');
        }

        loadLocaleData(localeConfig, intl.locale, intl.defaultLocale).then(data => {
            this.safeSetState({ intlData: data });
        });
    }
}

export default IntlComponent;