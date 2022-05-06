import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { STYLES_CONST, SHARED_STYLES } from "../utils/shared-styles";
import { usingClasses } from "../utils/utils";
import Paper from '@material-ui/core/Paper';
import ArrowForward from '@material-ui/icons/ArrowForward';
import { injectIntl, FormattedMessage } from 'react-intl';
import IntlComponent from './shared/IntlComponent';
import CONST from '../utils/const';

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
                <div className={usingClasses(classes, 'container')}>
                    <span className={usingClasses(classes, 'titleText')}>
                        <FormattedMessage
                            id="tech_title"
                            defaultMessage={'Technology'}
                        />
                    </span>
                    <div className={usingClasses(classes, 'list')}>
                        {techDOM}
                    </div>
                    <Button color="primary" className={usingClasses(classes, 'flatButton')}>
                        <a href={CONST.chainURL} className={usingClasses(classes, 'buttonLink')}>
                            <FormattedMessage
                                id="tech_button"
                                defaultMessage={'More Details'}
                            />
                            <ArrowForward className={usingClasses(classes, 'arrowIcon')} />
                        </a>
                    </Button>
                </div>
            </section>
        );
    }
};

const getTechDOM = (techList, classes) => {
    let techDOM = null;
    if (techList && techList.length > 0) {
        techDOM = techList.map((tech, idx) => (
            <div className={usingClasses(classes, 'techItem')} key={idx}>
                <Paper elevation={1} className={usingClasses(classes, 'paper')}>
                    <div className={usingClasses(classes, 'head')}>
                        <img src={tech.icon} alt="tech_icon" className={usingClasses(classes, 'techIcon')} />
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
            </div>
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
        marginBottom: '72px',
        display: 'flex',
        marginLeft: '-10px',
        marginRight: '-10px'
    },
    techItem: {
        width: '33.3%',
        paddingLeft: '10px',
        paddingRight: '10px'
    },
    head: {
        backgroundColor: STYLES_CONST.primaryColor,
        padding: '36px 0',
        borderRadius: '4px 4px 0 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    body: {
        display: 'flex',
        flexDirection: 'column',
        padding: '24px 32px 36px 32px'
    },
    paper: {
        height: '100%'
    },
    headLineText: Object.assign({ ...SHARED_STYLES.headLineText }, {
        fontSize: '24px'
    }),
    bodyText: Object.assign({ ...SHARED_STYLES.bodyText }, {
        fontWeight: '500'
    }),
    flatButton: Object.assign({ ...SHARED_STYLES.flatButton }, {
        fontSize: '28px',
        fontWeight: '700',
        textTransform: 'unset',
        '&:hover': {
            backgroundColor: 'unset',
        }
    }),
    arrowIcon: {
        fontSize: '24px',
        marginLeft: '4px',
        transform: 'translateY(3px)',
    }
})

export default withStyles(styles)(injectIntl(Technology));
