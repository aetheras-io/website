import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { getStyles, usingClasses, ABOUT_STYLES } from "../utils/Style-Const";
import Typography from "@material-ui/core/Typography";
import en_US from '../data/aboutUs/en_US';
import zh_TW from '../data/aboutUs/zh_TW';
import { injectIntl, FormattedMessage } from 'react-intl';
import TeamMember from "./TeamMember.js";

const localeData = { en: en_US, zh: zh_TW };

const About = props => {
    const { classes, intl } = props;
    const locale = intl.locale;
    const about = localeData[locale];
    const messageDOM = about.message.split('\n').map((message, idx) => (
        <p className={usingClasses(classes, 'bodyText')} key={idx}>
            {message}
        </p>
    ));
    console.log(messageDOM)
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

export default withStyles(getStyles(ABOUT_STYLES))(injectIntl(About));
