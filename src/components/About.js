import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { SHARED_STYLES } from "../utils/shared-styles";
import { usingClasses } from "../utils/utils";
import Typography from "@material-ui/core/Typography";
import { injectIntl, FormattedMessage } from 'react-intl';
import TeamMember from "./TeamMember.js";
import IntlComponent from './shared/IntlComponent';
import Paragraph from "./shared/Paragraph";

class About extends IntlComponent {
    render() {
        const { classes } = this.props;
        const { intlData } = this.state;

        if (!intlData) {
            return null;
        }

        const aboutUs = intlData.aboutUs;

        if (!aboutUs) {
            return null;
        }

        return (
            <div className={usingClasses(classes, 'wrapper')}>
                <section className={usingClasses(classes, 'section')}>
                    <Typography component="h2" variant="headline" className={usingClasses(classes, 'headLine')}>
                        <FormattedMessage
                            id="aboutUs_title"
                            defaultMessage={'About Us'}
                        />
                    </Typography>
                    <Paragraph messages={aboutUs} />
                </section>
                <TeamMember />
            </div>
        );
    }
};

const styles = SHARED_STYLES;

export default withStyles(styles)(injectIntl(About));
