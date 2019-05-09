import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { getStyles, usingClasses } from '../utils/Style-Const';
import Typography from "@material-ui/core/Typography";
import en_US from '../data/joinUs/en_US';
import zh_TW from '../data/joinUs/zh_TW';
import { injectIntl, FormattedMessage } from 'react-intl';

const localeData = { en: en_US, zh: zh_TW };

const link = 'https://www.104.com.tw/jobbank/custjob/index.php?r=cust&j=48524a733c3e466f383a426b40463e2193131312f483e527109j56&jobsource=checkc'

const JoinUs = props => {
    const { classes, intl } = props;
    const locale = intl.locale;
    const messages = localeData[locale] ? localeData[locale] : localeData[intl.defaultLocale];
    return (
        <section className={usingClasses(classes, 'section')}>
            <div id="joinUs" className={usingClasses(classes, 'anchor')} />
            <Typography component="h2" variant="headline" className={usingClasses(classes, 'titleText')}>
                <FormattedMessage
                    id="joinUs_title"
                    defaultMessage={'We are Hiring!'}
                />
            </Typography>
            <p className={usingClasses(classes, 'bodyText')}>
                {messages.messageBeforeLink}
                <a target="_blank" href={link} rel="noopener noreferrer">
                    {messages.link}
                </a>
                {messages.messageAfterLink}
            </p>
        </section>
    );
};

export default withStyles(getStyles({}))(injectIntl(JoinUs));
