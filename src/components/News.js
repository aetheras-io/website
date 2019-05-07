import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { getStyles, NEWS_STYLES } from '../utils/Style-Const';
import Typography from '@material-ui/core/Typography';

const data = [
    {
        id: 0,
        title: 'blockchain technology',
        short: 'We believe blockchain technology, with its ability to promote transparency and fairness, offers the world huge opportunities for innovation.',
        link: 'https://www.aetheras.io/',
        date: '2019-05-07T07:34:23.259Z'
    },
    {
        id: 1,
        title: 'blockchain technology',
        short: 'We believe blockchain technology, with its ability to promote transparency and fairness, offers the world huge opportunities for innovation.',
        link: 'https://www.aetheras.io/',
        date: '2019-05-06T12:32:13.221Z'
    },
    {
        id: 2,
        title: 'blockchain technology',
        short: 'We believe blockchain technology, with its ability to promote transparency and fairness, offers the world huge opportunities for innovation.',
        link: 'https://www.aetheras.io/',
        date: '2019-05-05T02:13:45.722Z'
    }
]

class News extends React.Component {
    state = {
        newsList: []
    }

    componentDidMount() {
        this.setState({ newsList: data });
    }

    getNewsDOM = (newsList, classes) => {
        let newsDOM = <React.Fragment></React.Fragment>
        if (newsList && newsList.length > 0) {
            newsDOM = newsList.map(news => (
                <div className={classes.newsBody} key={news.id}>
                    <Typography component="h2" variant="title" className={classes.titleText}>
                        {news.title}
                        <span className={classes.titleDate}>{new Date(news.date).toLocaleString()}</span>
                    </Typography>
                    <p className={classes.bodyText}>
                        {news.short}
                        <br />
                        ...
                    </p>
                    <a target="_blank" href={news.link} className={classes.moreLink}>
                        More
                    </a>
                </div>
            ))
        }
        return newsDOM;
    }

    render() {
        const { classes } = this.props;
        const { newsList } = this.state;
        const newsDOM = this.getNewsDOM(newsList, classes);
        return (
            <section className={classes.section}>
                <div id="news" className={classes.archor} />
                <Typography component="h2" variant="headline" className={classes.titleText}>
                    News
                    </Typography>
                {newsDOM}
            </section>

        );
    }
};

export default withStyles(getStyles(NEWS_STYLES))(News);
