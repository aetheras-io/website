import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { STYLES_CONST, SHARED_STYLES } from "../utils/shared-styles";
import { usingClasses } from "../utils/utils";
import Typography from '@material-ui/core/Typography';
import { injectIntl, FormattedMessage, FormattedDate, FormattedTime } from 'react-intl';
import IntlComponent from './shared/IntlComponent';

class News extends IntlComponent {
    render() {
        const { classes } = this.props;
        const { intlData } = this.state;

        if (!intlData) {
            return null;
        }

        const news = intlData.news;

        if (!news || !news.length) {
            return null;
        }

        return (
            <section className={usingClasses(classes, 'section')}>
                <div id="news" className={usingClasses(classes, 'anchor')} />
                <Typography component="h2" variant="headline" className={usingClasses(classes, 'headLine')}>
                    <FormattedMessage
                        id="news_title"
                        defaultMessage={'News'}
                    />
                </Typography>
                {news.map((news, idx) => (
                    <div className={usingClasses(classes, 'newsBody')} key={idx}>
                        <Typography component="h2" variant="title" className={usingClasses(classes, 'titleText')}>
                            {news.title}
                            <span className={usingClasses(classes, 'titleDate')}>
                                <FormattedDate value={news.date} />
                            </span>
                            <span className={usingClasses(classes, 'titleTime')}>
                                <FormattedTime value={news.date} />
                            </span>
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
                ))}
            </section>
        );
    }
};

const styles = Object.assign({ ...SHARED_STYLES }, {
    titleDate: {
        marginLeft: '24px',
        fontSize: '0.95rem',
        color: 'rgba(0, 0, 0, 0.63)',
        display: 'inline-block',
        transform: 'translateY(1px)'
    },
    titleTime: {
        marginLeft: '8px',
        fontSize: '0.95rem',
        color: 'rgba(0, 0, 0, 0.63)',
        display: 'inline-block',
        transform: 'translateY(1px)'
    },
    newsBody: {
        padding: '16px 0',
        display: 'flex',
        flexDirection: 'column'
    },
    bodyText: Object.assign({ ...SHARED_STYLES.bodyText }, {
        margin: '8px 0',
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
