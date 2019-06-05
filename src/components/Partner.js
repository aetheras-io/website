import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { STYLES_CONST, SHARED_STYLES } from "../utils/shared-styles";
import { usingClasses } from "../utils/utils";
import Typography from "@material-ui/core/Typography";
import { injectIntl, FormattedMessage } from 'react-intl';
import IntlComponent from './shared/IntlComponent';

class Partner extends IntlComponent {
    render() {
        const { classes } = this.props;
        const { intlData } = this.state;

        if (!intlData) {
            return null;
        }

        const partner = intlData.partner;

        if (!partner || !partner.length) {
            return null;
        }

        const partnerDOM = getPartnerDOM(partner, classes);
        return (
            <section className={usingClasses(classes, 'section')}>
                <div id="partner" className={usingClasses(classes, 'anchor')} />
                <Typography component="h2" variant="headline" className={usingClasses(classes, 'titleText')}>
                    <FormattedMessage
                        id="partner_title"
                        defaultMessage={'Partner'}
                    />
                </Typography>
                <div className={usingClasses(classes, 'container')}>
                    {partnerDOM}
                </div>
            </section>
        );
    }
};

const getPartnerDOM = (partnerList, classes) => {
    let partnerDOM = null;
    if (partnerList && partnerList.length > 0) {
        partnerDOM = partnerList.map((partner, idx) => (
            <a href={partner.link} className={usingClasses(classes, 'link')} target="_blank" rel="noopener noreferrer" key={idx}>
                <div className={usingClasses(classes, 'item')}>
                    <img
                        src={partner.logo}
                        alt="Logo"
                        className={usingClasses(classes, 'avatar')}
                    />
                    {partner.name}
                </div>
            </a>
        ));
    }
    return partnerDOM;
}

const styles = Object.assign({ ...SHARED_STYLES }, {
    container: {
        marginTop: '8px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    link: {
        textDecoration: 'unset',
        marginRight: '16px',
        marginBottom: '8px'
    },
    item: {
        padding: '8px',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.1rem',
        letterSpacing: `${STYLES_CONST.letterSpacing}px`,
        color: 'rgba(0, 0, 0, 0.74)'
    },
    avatar: {
        height: '64px',
        marginRight: '4px'
    }
})

export default withStyles(styles)(injectIntl(Partner));
