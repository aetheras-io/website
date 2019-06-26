import React from 'react';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { SHARED_STYLES } from "../utils/shared-styles";
import { usingClasses } from "../utils/utils";
import { injectIntl, FormattedMessage } from 'react-intl';

const NotFound = props => {
    const { classes } = props;
    return (
        <div className={usingClasses(classes, 'notFound')}>
            <section className={usingClasses(classes, 'section')}>
                <span className={usingClasses(classes, 'titleText')}>
                    <FormattedMessage
                        id="not_found_title"
                        defaultMessage={'Page Not Found'}
                    />
                </span>
                    <p className={usingClasses(classes, 'paragraph')}>
                        <FormattedMessage
                            id="not_found_message"
                            defaultMessage={'The page you visited either does not exist or has been moved in a website reshuffle.'}
                        />
                    </p>
                    <Button variant="contained" color="primary" className={usingClasses(classes, 'button')}>
                        <Link to="/" className={usingClasses(classes, 'buttonLink')}>
                            <FormattedMessage
                                id="home_button"
                                defaultMessage={'Home'}
                            />                            
                        </Link>
                    </Button>
            </section>
        </div>
    );
}

const styles = Object.assign({ ...SHARED_STYLES }, {
    notFound: Object.assign({ ...SHARED_STYLES.wrapper }, {
        background: 'url("/images/background.png") 50% center'
    }),
    paragraph: Object.assign({...SHARED_STYLES.paragraph}, {
        marginBottom: '72px'
    })
})

export default withStyles(styles)(injectIntl(NotFound))
