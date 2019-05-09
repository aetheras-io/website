import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { getStyles, usingClasses, TECH_STYLES } from '../utils/Style-Const';
import Typography from "@material-ui/core/Typography";
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import en_US from '../data/technology/en_US';
import zh_TW from '../data/technology/zh_TW';
import { injectIntl, FormattedMessage } from 'react-intl';

const localeData = { en: en_US, zh: zh_TW };

const Technology = props => {
    const { classes, intl } = props;
    const locale = intl.locale;
    const technology = localeData[locale] ? localeData[locale] : localeData[intl.defaultLocale];
    const techDOM = getTechDOM(technology, classes);
    return (
        <section className={usingClasses(classes, 'section')}>
            <div id="technology" className={usingClasses(classes, 'anchor')} />
            <Typography component="h2" variant="headline" className={usingClasses(classes, 'headLine')}>
                <FormattedMessage
                    id="tech_title"
                    defaultMessage={'Technology'}
                />
            </Typography>
            <div className={usingClasses(classes, 'list')}>
                <Grid container spacing={16}>
                    {techDOM}
                </Grid>
            </div>
        </section>
    );
};

const getTechDOM = (techList, classes) => {
    let techDOM = null;
    if (techList && techList.length > 0) {
        techDOM = techList.map((tech, idx) => (
            <Grid item xs={12} sm={6} key={idx}>
                <Paper elevation={1} className={usingClasses(classes, 'paper')}>
                    <Typography variant="title" className={usingClasses(classes, 'subTitleText')}>
                        {tech.title}
                    </Typography>
                    <Typography variant="body1" className={usingClasses(classes, 'bodyText')}>
                        {tech.content}
                    </Typography>
                </Paper>
            </Grid>
        ))
    }
    return techDOM;
}

export default withStyles(getStyles(TECH_STYLES))(injectIntl(Technology));
