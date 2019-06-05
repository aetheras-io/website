import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import { STYLES_CONST, SHARED_STYLES } from "../utils/shared-styles";
import { usingClasses } from "../utils/utils";
import Grid from "@material-ui/core/Grid";
import { injectIntl, FormattedMessage } from 'react-intl';
import IntlComponent from "./shared/IntlComponent";
import CONST from "../utils/const";


class TeamMember extends IntlComponent {
    render() {
        const { classes } = this.props;
        const { intlData } = this.state;

        if (!intlData) {
            return null;
        }
        const founder = intlData.founder;
        const teamMember = intlData.team_member;

        if (!teamMember || !teamMember.length) {
            return null;
        }

        const founderDOM = getFounderDOM(founder, classes);
        const teamMemberDOM = getTeamMemberDOM(teamMember, classes);
        return (
            <section className={usingClasses(classes, 'section') + usingClasses(classes, 'teamMemberSection')}>
                <span className={usingClasses(classes, 'titleText')}>
                    <FormattedMessage
                        id="team_member_title"
                        defaultMessage={'Our Members'}
                    />
                </span>
                <div className={usingClasses(classes, 'founderList')}>
                    {founderDOM}
                </div>
                <div id="to-top-trigger" />
                <div className={usingClasses(classes, 'memberList')}>
                    <Grid container spacing={0}>
                        {teamMemberDOM}
                    </Grid>
                </div>
                <Button variant="outlined" color="primary" className={usingClasses(classes, 'outlinedButton')}>
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
    }
};

const getFounderDOM = (founderList, classes) => {
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
                        <span className={usingClasses(classes, 'highLight')}>/</span>
                        <span className={usingClasses(classes, 'titleDesc')}>
                            <FormattedMessage 
                                id="founder_title"
                                defaultMessage="Founder"
                            />
                        </span>
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

const getTeamMemberDOM = (teamMember, classes) => {
    let teamMemberDOM = null;
    if (teamMember && teamMember.length > 0) {
        teamMemberDOM = teamMember.map((member, idx) => (
            <Grid item xs={12} sm={12} md={3} lg={3} key={idx} className={usingClasses(classes, 'memberItem')}>
                <img
                    src={member.photo}
                    alt="member_photo"
                    className={usingClasses(classes, 'memberPhoto')}
                />
                <span className={usingClasses(classes, 'memberName')}>
                    {member.name}
                </span>
                <span className={usingClasses(classes, 'memberJob')}>
                    {member.job}
                </span>
            </Grid>
        ))
    }
    return teamMemberDOM;
}

const styles = Object.assign({ ...SHARED_STYLES }, {
    teamMemberSection: {
        backgroundColor: '#FFF8F4'
    },
    founderList: {
        marginBottom: '87px',
        width: '75%'
    },
    founderItem: {
        display: 'flex',
        alignItems: 'center',
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
        marginBottom: '40px',
        display: 'inline-flex',
        alignItems: 'center'
    }),
    highLight: {
        fontSize: '20px',
        margin: '0 7px',
        color: STYLES_CONST.primaryColor
    },
    titleDesc: {
        fontSize: '20px',
        fontWeight: '600'
    },
    memberList: {
        width: '100%',
        marginBottom: '72px',
    },
    memberItem: {
        padding: `11px`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    memberPhoto: {
        width: '100%',
        maxWidth: '360px',
        marginBottom: '24px',
    },
    memberName: Object.assign({ ...SHARED_STYLES.headLineText }, {
        marginBottom: '16px'
    }),
    memberJob: Object.assign({ ...SHARED_STYLES.bodyText }, {
        fontWeight: '600'
    }),
    linkIcon: {
        width: '24px',
        opacity: '0.54',
        marginRight: '8px',
        '&:hover': {
            opacity: '0.84'
        }
    }
})

export default withStyles(styles)(injectIntl(TeamMember));
