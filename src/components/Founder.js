import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { SHARED_STYLES } from "../utils/shared-styles";
import { usingClasses } from "../utils/utils";
import { injectIntl, FormattedMessage } from 'react-intl';
import IntlComponent from './shared/IntlComponent';

class Founder extends IntlComponent {
    render() {
        const { classes } = this.props;
        const { intlData } = this.state;

        if (!intlData) {
            return null;
        }

        const founderList = intlData.founder;

        if (!founderList) {
            return null;
        }
        const founderDOM = getFounderListDOM(founderList, classes);
        return (
            <section className={usingClasses(classes, 'section')}>
                <div id="founder" className={usingClasses(classes, 'anchor')} />
                <span className={usingClasses(classes, 'titleText')}>
                    <FormattedMessage
                        id="founder_title"
                        defaultMessage={'Founder'}
                    />
                </span>
                <div className={usingClasses(classes, 'founderList')}>
                    {founderDOM}
                </div>
                <Button variant="outlined" color="primary" className={usingClasses(classes, 'outlinedButton')}>
                    <Link to="/about" className={usingClasses(classes, 'buttonLink')}>
                        Button
                    </Link>
                </Button>
            </section>
        );
    }
};

const getFounderListDOM = (founderList, classes) => {
    let founderDOM = null;
    if (founderList && founderList.length > 0) {
        founderDOM = founderList.map((founder, idx) => (
            <div key={idx} className={usingClasses(classes, 'founderItem')}>
                <div className={usingClasses(classes, 'head')}>
                    <img src={founder.photo} alt="founder_photo" className={usingClasses(classes, 'photo')} />
                </div>
                <div className={usingClasses(classes, 'body')}>
                    <span className={usingClasses(classes, 'headLineText')}>
                        {founder.name}
                    </span>
                    <span className={usingClasses(classes, 'bodyText')}>
                        {founder.description}
                    </span>
                </div>
            </div>
        ))
    }
    return founderDOM;
}

const styles = Object.assign({ ...SHARED_STYLES }, {
    founderList: {
        width: '100%',
        marginTop: '20px',
        marginBottom: '72px'
    },
    founderItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:not(:last-child)': {
            marginBottom: '32px'
        }
    },
    head: {
        width: '100%',
        maxWidth: '360px',
        textAlign: 'center'
    },
    photo: {
        maxWidth: '360px'
    },
    body: {
        maxWidth: '360px',
        marginTop: '14px',
        marginLeft: '28px',
        display: 'flex',
        flexDirection: 'column',
    },
    headLineText: Object.assign({ ...SHARED_STYLES.headLineText }, {
        marginBottom: '40px'
    })
});

export default withStyles(styles)(injectIntl(Founder));
