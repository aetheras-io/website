import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { STYLES_CONST, SHARED_STYLES } from "../utils/SharedStyles";
import { usingClasses } from "../utils/utils";
import Typography from "@material-ui/core/Typography";
import en_US from '../data/aboutUs/en_US';
import zh_TW from '../data/aboutUs/zh_TW';
import { injectIntl, FormattedMessage } from 'react-intl';
import TeamMember from "./TeamMember.js";

const localeData = { en: en_US, zh: zh_TW };

const About = props => {
    const { classes, intl } = props;
    const locale = intl.locale;
    const about = localeData[locale] ? localeData[locale] : localeData[intl.defaultLocale];
    const messageDOM = about.message.split('\n').map((message, idx) => (
        <p className={usingClasses(classes, 'bodyText')} key={idx}>
            {message}
        </p>
    ));
    return (
        <div className={usingClasses(classes, 'about')}>
            <section className={usingClasses(classes, 'section')}>
                <Typography component="h2" variant="headline" className={usingClasses(classes, 'headLine')}>
                    <FormattedMessage
                        id="aboutUs_title"
                        defaultMessage={'About Us'}
                    />
                </Typography>
                {messageDOM}
            </section>
            <TeamMember />
        </div>
    );
};

const styles = Object.assign({ ...SHARED_STYLES }, {
    about: {
        marginTop: STYLES_CONST.navHeight,
        minHeight: '400px',
    }
})

export default withStyles(styles)(injectIntl(About));
