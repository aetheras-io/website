import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { STYLES_CONST, SHARED_STYLES } from "../utils/shared-styles";
import { usingClasses } from "../utils/utils";
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
            <section className={usingClasses(classes, 'section') + usingClasses(classes, 'techSection')}>
                <div id="technology" className={usingClasses(classes, 'anchor')} />
                <span className={usingClasses(classes, 'titleText')}>
                    <FormattedMessage
                        id="tech_title"
                        defaultMessage={'Technology'}
                    />
                </span>
                <div className={usingClasses(classes, 'list')}>
                    <Grid container spacing={16}>
                        {techDOM}
                    </Grid>
                </div>
                <Button variant="outlined" color="primary" className={usingClasses(classes, 'outlinedButton')}>
                    <Link to="/whitepaper" className={usingClasses(classes, 'buttonLink')}>
                    <FormattedMessage
                        id="tech_button"
                        defaultMessage={'Whitepaper'}
                    />
                    </Link>
                </Button>
            </section>
        );
    }
};

const getTechDOM = (techList, classes) => {
    let techDOM = null;
    if (techList && techList.length > 0) {
        techDOM = techList.map((tech, idx) => (
            <Grid item xs={12} sm={4} key={idx}>
                <Paper elevation={1} className={usingClasses(classes, 'paper')}>
                    <div className={usingClasses(classes, 'head')}>
                        <img src={tech.icon} alt="tech_icon" className={usingClasses(classes, 'techIcon')}/>
                    </div>
                    <div className={usingClasses(classes, 'body')}>
                        <span className={usingClasses(classes, 'headLineText')}>
                            {tech.title}
                        </span>
                        <span className={usingClasses(classes, 'bodyText')}>
                            {tech.content}
                        </span>
                    </div>
                </Paper>
            </Grid>
        ))
    }
    return techDOM;
}

const styles = Object.assign({ ...SHARED_STYLES }, {
    techSection: {
        backgroundColor: 'rgba(76, 73, 72, 0.05)'
    },
    list: {
        width: '100%',
        marginTop: '12px',
        marginBottom: '72px'
    },
    head: {
        backgroundColor: STYLES_CONST.primaryColor,
        padding: '36px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    body: {
        display: 'flex',
        flexDirection: 'column',
        padding: '24px 40px 36px 40px'
    },
})

export default withStyles(styles)(injectIntl(Technology));
