import React from "react";
import { withStyles } from "@material-ui/core/styles";

import { STYLES_CONST, SHARED_STYLES } from "../utils/shared-styles";
import { usingClasses } from "../utils/utils";
// import Grid from "@material-ui/core/Grid";
import { injectIntl, FormattedMessage } from 'react-intl';
import IntlComponent from "./shared/IntlComponent";
// import CONST from "../utils/const";


class TeamMember extends IntlComponent {
    render() {
        const { classes } = this.props;
        const { intlData } = this.state;

        if (!intlData) {
            return null;
        }
        const founder = intlData.founder;
        const teamMember = intlData.team_member;

        if ((!founder || !founder.length) && (!teamMember || !teamMember.length)) {
            return null;
        }

        const founderDOM = getFounderDOM(founder, classes);
        const teamMemberDOM = getTeamMemberDOM(teamMember, classes);
        return (
            <section className={usingClasses(classes, 'section') + usingClasses(classes, 'teamMemberSection')}>
                <div className={usingClasses(classes, 'container')}>
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
                        {teamMemberDOM}
                    </div>
                </div>
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
                    </span>
                    <span className={usingClasses(classes, 'bodyText')}>
                        <FormattedMessage
                            id="founder_title"
                            defaultMessage="Co-Founder"
                        />
                    </span>
                    {/* <span className={usingClasses(classes, 'bodyText')}>
                        {founder.description}
                    </span> */}
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
            <div key={idx} className={usingClasses(classes, 'memberItem')}>
                <div className={usingClasses(classes, 'head')}>
                    <img src={member.photo} alt="memeber_photo" className={usingClasses(classes, 'photo')} />
                </div>
                <div className={usingClasses(classes, 'body')}>
                    <span className={usingClasses(classes, 'headLineText')}>
                        {member.name}
                    </span>
                    <span className={usingClasses(classes, 'bodyText')}>
                        {member.job}
                    </span>
                </div>
            </div>
        ))
    }
    return teamMemberDOM;
}

const styles = Object.assign({ ...SHARED_STYLES }, {
    teamMemberSection: {
        backgroundColor: '#FFF'
    },
    founderList: {
        width: '75%',
        maxWidth: '690px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    founderItem: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginRight: '30px',
        marginLeft: '30px',
        marginBottom: '80px'
    },
    head: {
        width: '100%',
        maxWidth: '180px',
        textAlign: 'center'
    },
    photo: {
        maxWidth: '180px',
        borderRadius: '16px'
    },
    body: {
        marginTop: '3px',
        display: 'flex',
        flexDirection: 'column',        
    },
    headLineText: Object.assign({ ...SHARED_STYLES.headLineText }, {
        fontSize: '20px',
        marginBottom: '2px',
        color: STYLES_CONST.primaryColor
    }),    
    bodyText: Object.assign({
        fontSize: '14px',
        fontWeight: '600',
        color: STYLES_CONST.jobColor
    }),
    memberList: {
        width: '100%',
        maxWidth: '690px',
        marginBottom: '72px',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },
    memberItem: {
        display: 'flex',
        flexDirection: 'column',        
        justifyContent: 'flex-start',
        marginRight: '16px',
        marginLeft: '16px',
        marginBottom: '32px'
    },
    memberPhoto: {
        width: '100%',
        maxWidth: '180px',
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
