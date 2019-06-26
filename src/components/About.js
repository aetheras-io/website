import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { SHARED_STYLES } from "../utils/shared-styles";
import { usingClasses } from "../utils/utils";
import { injectIntl, FormattedMessage } from 'react-intl';
import TeamMember from "./TeamMember.js";
import IntlComponent from './shared/IntlComponent';
import Paragraph from "./shared/Paragraph";
import JoinUs from './Join-Us';

class About extends IntlComponent {
    render() {
        const { classes } = this.props;
        const { intlData } = this.state;

        if (!intlData) {
            return null;
        }

        const aboutUs = intlData.about_us;

        if (!aboutUs) {
            return null;
        }

        return (
            <div className={usingClasses(classes, 'wrapper')}>
                <section className={usingClasses(classes, 'section') + usingClasses(classes, 'aboutSection')}>
                    <span className={usingClasses(classes, 'titleText')}>
                        <FormattedMessage
                            id="about_title"
                            defaultMessage={'Our Culture'}
                        />
                    </span>
                    <div className={usingClasses(classes, 'body')}>
                        <Paragraph messages={aboutUs} />
                    </div>
                    <img src="/images/about_ill.svg" alt="about_ill" className={usingClasses(classes, 'aboutIll')} />
                </section>
                <TeamMember />
                <JoinUs />
            </div>
        );
    }
};

const styles = Object.assign({...SHARED_STYLES}, {
    aboutSection: {
        backgroundColor: '#FFF8F4',
        padding: '160px 20%'
    },
    subTitleText: Object.assign({...SHARED_STYLES.subTitleText}, {
        marginBottom: '60px'
    }),
    body: {
        marginBottom: '60px'
    },
    aboutIll: {
        width: '100%'
    }
});

export default withStyles(styles)(injectIntl(About));
