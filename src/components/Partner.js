import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { getStyles, usingClasses, PARTNER_STYLES } from '../utils/Style-Const';
import Typography from "@material-ui/core/Typography";

const partnerList = [
    {
        logo: '/images/logo.png',
        name: 'Aetheras',
        link: 'https://www.aetheras.io/'
    },
    {
        logo: '/images/logo.png',
        name: '薩摩亞商毅成科技有限公司',
        link: 'https://www.aetheras.io/'
    },
    {
        logo: '/images/logo.png',
        name: 'Aetheras',
        link: 'https://www.aetheras.io/'
    },
    {
        logo: '/images/logo.png',
        name: 'Heimdal Holdings Corp.',
        link: 'https://www.aetheras.io/'
    },
    {
        logo: '/images/logo.png',
        name: 'Aetheras',
        link: 'https://www.aetheras.io/'
    }
];

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

const Partner = props => {
    const { classes } = props;
    const partnerDOM = getPartnerDOM(partnerList, classes);
    return (
        <section className={usingClasses(classes, 'section')}>
            <div id="partner" className={usingClasses(classes, 'anchor')} />
            <Typography component="h2" variant="headline" className={usingClasses(classes, 'titleText')}>
                Partner
            </Typography>
            <div className={usingClasses(classes, 'container')}>
                {partnerDOM}
            </div>
        </section>
    );
};

export default withStyles(getStyles(PARTNER_STYLES))(Partner);
