import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { getStyles, usingClasses, NEWS_STYLES } from '../utils/Style-Const';
import Typography from '@material-ui/core/Typography';
import news from '../data/news';

const News = props => {
    const { classes } = props;
    const newsDOM = getNewsDOM(news, classes);
    return (
        <section className={usingClasses(classes, 'section')}>
            <div id="news" className={usingClasses(classes, 'anchor')} />
            <Typography component="h2" variant="headline" className={usingClasses(classes, 'headLine')}>
                News
            </Typography>
            {newsDOM}
        </section>

    );
};

const getNewsDOM = (newsList, classes) => {
    let newsDOM = <React.Fragment></React.Fragment>
    if (newsList && newsList.length > 0) {
        newsDOM = newsList.map((news, idx) => (
            <div className={usingClasses(classes, 'newsBody')} key={idx}>
                <Typography component="h2" variant="title" className={usingClasses(classes, 'titleText')}>
                    {news.title}
                    <span className={usingClasses(classes, 'titleDate')}>{new Date(news.date).toLocaleString()}</span>
                </Typography>
                <p className={usingClasses(classes, 'bodyText')}>
                    {news.short}
                    <br />
                    ...
                </p>
                <a target="_blank" href={news.link} className={usingClasses(classes, 'moreLink')}>
                    More
                </a>
            </div>
        ))
    }
    return newsDOM;
}

export default withStyles(getStyles(NEWS_STYLES))(News);
