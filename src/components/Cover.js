import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { getStyles, usingClasses, COVER_STYLES } from '../utils/Style-Const';
import Typography from '@material-ui/core/Typography';
import { injectIntl, FormattedMessage } from 'react-intl';

const Cover = props => {
    const { classes } = props;
    return (
        <section className={usingClasses(classes, 'cover')}>
            <div id="cover" className={usingClasses(classes, 'anchor')} />
            <div className={usingClasses(classes, 'logoContainer')}>
                <img
                    src="/images/logo.png"
                    alt="Logo"
                    className={usingClasses(classes, 'logoImg')}
                />
                <div className={usingClasses(classes, 'titleContainer')}>
                    <Typography
                        id="logo-title"
                        variant="h4"
                        color="inherit"
                        className={usingClasses(classes, 'title')}>
                        AETHERAS
                    </Typography>
                    <Typography
                        id="logo-slogan"
                        variant="h6"
                        color="inherit"
                        className={usingClasses(classes, 'slogan')}>
                        <FormattedMessage
                            id="slogan"
                            defaultMessage={'Make the world more flexible with blockchain technology.'}
                        />
                    </Typography>
                </div>
            </div>
        </section>
    );
};

export default withStyles(getStyles(COVER_STYLES))(injectIntl(Cover));
