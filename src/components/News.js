import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { STYLES_CONST, SHARED_STYLES } from "../utils/SharedStyles";
import { usingClasses } from "../utils/utils";
import Typography from '@material-ui/core/Typography';
import en_US from '../data/news/en_US';
import zh_TW from '../data/news/zh_TW';
import { injectIntl, FormattedMessage } from 'react-intl';

const localeData = { en: en_US, zh: zh_TW };

const News = props => {
    const { classes, intl } = props;
    const locale = intl.locale;
    const news = localeData[locale] ? localeData[locale] : localeData[intl.defaultLocale];
    const newsDOM = getNewsDOM(news, classes, locale);
    return (
        <section className={usingClasses(classes, 'section')}>
            <div id="news" className={usingClasses(classes, 'anchor')} />
            <Typography component="h2" variant="headline" className={usingClasses(classes, 'headLine')}>
                <FormattedMessage
                    id="news_title"
                    defaultMessage={'News'}
                />
            </Typography>
            {newsDOM}
        </section>

    );
};

const getNewsDOM = (newsList, classes, locale) => {
    let newsDOM = <React.Fragment></React.Fragment>
    if (newsList && newsList.length > 0) {
        newsDOM = newsList.map((news, idx) => (
            <div className={usingClasses(classes, 'newsBody')} key={idx}>
                <Typography component="h2" variant="title" className={usingClasses(classes, 'titleText')}>
                    {news.title}
                    <span className={usingClasses(classes, 'titleDate')}>{new Date(news.date).toLocaleString(locale)}</span>
                </Typography>
                <p className={usingClasses(classes, 'bodyText')}>
                    {news.short}
                </p>
                <a target="_blank" href={news.link} className={usingClasses(classes, 'moreLink')}>
                    <FormattedMessage
                        id="more_link"
                        defaultMessage={'More'}
                    />
                </a>
            </div>
        ))
    }
    return newsDOM;
}

const styles = Object.assign({ ...SHARED_STYLES }, {
    titleDate: {
        marginLeft: '24px',
        fontSize: '0.95rem',
        color: 'rgba(0, 0, 0, 0.63)',
        display: 'inline-block',
        transform: 'translateY(1px)'
    },
    newsBody: {
        padding: `${STYLES_CONST.spacing * 2}px 0`,
        display: 'flex',
        flexDirection: 'column'
    },
    bodyText: Object.assign({ ...SHARED_STYLES.bodyText }, {
        margin: `${STYLES_CONST.spacing}px 0`,
        overflow: 'hidden',
        maxHeight: '96px'
    }),
    moreLink: {
        fontSize: '1.1rem',
        letterSpacing: `${STYLES_CONST.letterSpacing}px`,
        display: 'inline-flex',
        alignSelf: 'flex-end',
        justifySelf: 'flex-end'
    },
})

export default withStyles(styles)(injectIntl(News));
