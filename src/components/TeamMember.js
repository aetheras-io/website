import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { STYLES_CONST, SHARED_STYLES } from "../utils/shared-styles";
import { usingClasses } from "../utils/utils";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { injectIntl, FormattedMessage } from 'react-intl';
import IntlComponent from "./shared/IntlComponent";


class TeamMember extends IntlComponent {
    render() {
        const { classes } = this.props;
        const { intlData } = this.state;

        if (!intlData) {
            return null;
        }

        const teamMember = intlData.teamMember;

        if (!teamMember || !teamMember.length) {
            return null;
        }

        const teamMemberDOM = getTeamMemberDOM(teamMember, classes);
        return (
            <section className={usingClasses(classes, 'section')}>
                <Typography component="h2" variant="headline" className={usingClasses(classes, 'headLine')}>
                    <FormattedMessage
                        id="teamMember_title"
                        defaultMessage={'Team Member'}
                    />
                </Typography>
                <div className={usingClasses(classes, 'list')}>
                    <Grid container spacing={16}>
                        {teamMemberDOM}
                    </Grid>
                </div>
            </section>
        );
    }
};

const getTeamMemberDOM = (teamMember, classes) => {
    let teamMemberDOM = null;
    if (teamMember && teamMember.length > 0) {
        teamMemberDOM = teamMember.map((member, idx) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={idx}>
                <Paper className={usingClasses(classes, 'paper')}>
                    <img
                        src={member.avatar}
                        alt="avatar"
                        className={usingClasses(classes, 'avatar')}
                    />
                    <Typography variant="body1" className={usingClasses(classes, 'bodyText')}>
                        {member.name}
                    </Typography>
                    <Typography variant="body1" className={usingClasses(classes, 'subBodyText')}>
                        {member.job}
                    </Typography>
                    <div className={usingClasses(classes, 'linkContainer')}>
                        {member.github && (
                            <a href={member.github} target="_blank" rel="noopener noreferrer">
                                <img src="/images/github-icon.svg" alt="github-icon" className={usingClasses(classes, 'linkIcon')} />
                            </a>
                        )}
                        {member.linkedIn && (
                            <a href={member.linkedIn} target="_blank" rel="noopener noreferrer">
                                <img src="/images/linkedin-icon.svg" alt="linkedin-icon" className={usingClasses(classes, 'linkIcon')} />
                            </a>
                        )}
                        {member.mail && (
                            <a href={member.mail} target="_blank" rel="noopener noreferrer">
                                <img src="/images/mail-icon.svg" alt="mail-icon" className={usingClasses(classes, 'linkIcon')} />
                            </a>
                        )}
                    </div>
                </Paper>
            </Grid>
        ))
    }
    return teamMemberDOM;
}

const styles = Object.assign({ ...SHARED_STYLES }, {
    list: {
        width: '100%',
        marginTop: `calc(1em + ${STYLES_CONST.spacing}px)`
    },
    paper: {
        padding: `${STYLES_CONST.spacing * 2}px`
    },
    subTitleText: {
        textAlign: 'center',
        marginBottom: `${STYLES_CONST.spacing * 1.5}px`,
        letterSpacing: `${STYLES_CONST.letterSpacing * 3}px`
    },
    avatar: {
        width: '64px',
        margin: '0 auto',
        borderRadius: '100%',
        display: 'block',
        marginBottom: `${STYLES_CONST.spacing}px`,
    },
    linkIcon: {
        width: '24px',
        opacity: '0.54',
        marginRight: `${STYLES_CONST.spacing}px`,
        '&:hover': {
            opacity: '0.84'
        }
    },
    subBodyText: {
        fontSize: '1rem',
        color: 'rgba(0, 0, 0, 0.63)',
        marginBottom: `${STYLES_CONST.spacing * 2}px`
    }
})

export default withStyles(styles)(injectIntl(TeamMember));
