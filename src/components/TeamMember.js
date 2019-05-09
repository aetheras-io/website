import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { getStyles, usingClasses, ABOUT_STYLES } from "../utils/Style-Const";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import en_US from '../data/teamMember/en_US';
import zh_TW from '../data/teamMember/zh_TW';
import { injectIntl, FormattedMessage } from 'react-intl';

const localeData = { en: en_US, zh: zh_TW };

const TeamMember = props => {
    const { classes, intl } = props;
    const locale = intl.locale;
    const teamMember = localeData[locale] ? localeData[locale] : localeData[intl.defaultLocale];
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

export default withStyles(getStyles(ABOUT_STYLES))(injectIntl(TeamMember));
