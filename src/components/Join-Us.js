import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { SHARED_STYLES } from "../utils/shared-styles";
import { usingClasses } from "../utils/utils";
import { injectIntl, FormattedMessage } from 'react-intl';
import CONST from '../utils/const';

const JoinUs = (props) => {
    const { classes } = props;

    return (
        <section className={usingClasses(classes, 'section') + usingClasses(classes, 'joinUsSection')}>
            <div id="join_us" className={usingClasses(classes, 'anchor')} />
            <span className={usingClasses(classes, 'titleText')}>
                <FormattedMessage
                    id="join_us_title"
                    defaultMessage={'We are Hiring'}
                />
            </span>
            <span className={usingClasses(classes, 'subTitleText')}>
                <FormattedMessage
                    id="join_us_message"
                    defaultMessage={'We are currently hiring for various roles at our Taipei office. Please visit our 104 page for details'}
                />
            </span>
            <Button variant="contained" color="primary" className={usingClasses(classes, 'button')}>
                <a
                    target="_blank"
                    href={CONST.recruitURL}
                    rel="noopener noreferrer"
                    className={usingClasses(classes, 'buttonLink')}
                >
                    Button
                </a>
            </Button>
        </section>
    );
};

const styles = Object.assign({ ...SHARED_STYLES }, {
    joinUsSection: {
        background: 'url("/images/hiring_bg.png")',
        backgroundSize: 'cover'
    },
    subTitleText: Object.assign({...SHARED_STYLES.subTitleText}, {
        marginBottom: '72px'
    })
});

export default withStyles(styles)(injectIntl(JoinUs));
