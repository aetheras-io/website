import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { getStyles, usingClasses, PARTNER_STYLES } from '../utils/Style-Const';
import Typography from "@material-ui/core/Typography";
import partner from '../data/partner';
import { injectIntl, FormattedMessage } from 'react-intl';

const Partner = props => {
    const { classes } = props;
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

export default withStyles(getStyles(PARTNER_STYLES))(injectIntl(Partner));
