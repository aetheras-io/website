import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { STYLES_CONST, SHARED_STYLES } from "../utils/shared-styles";
import { usingClasses } from "../utils/utils";
import Typography from "@material-ui/core/Typography";
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { injectIntl, FormattedMessage } from 'react-intl';
import IntlComponent from './shared/IntlComponent';


class Technology extends IntlComponent {
    render() {
        const { classes } = this.props;
        const { intlData } = this.state;

        if (!intlData) {
            return null;
        }

        const technology = intlData.technology;

        if (!technology) {
            return null;
        }

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
    }
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

const styles = Object.assign({ ...SHARED_STYLES }, {
    list: {
        width: '100%',
        marginTop: `calc(1em + ${STYLES_CONST.spacing}px)`
    },
    paper: {
        padding: `${STYLES_CONST.spacing * 2}px`
    },
    subTitleText: Object.assign({ ...SHARED_STYLES.subTitleText }, {
        textAlign: 'center'
    }),
    bodyText: Object.assign({ ...SHARED_STYLES.bodyText }, {
        textAlign: 'center'
    })
})

export default withStyles(styles)(injectIntl(Technology));
