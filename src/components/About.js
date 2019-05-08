import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { getStyles, usingClasses, ABOUT_STYLES } from "../utils/Style-Const";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Navbar from "./Navbar";
import Footer from "./Footer";

const teamMember = [
    {
        name: 'Name',
        job: 'Job',
        avatar: '/images/logo.png',
        github: 'https://www.aetheras.io/',
        linkedIn: 'https://www.aetheras.io/',
        mail: 'https://www.aetheras.io/'
    },
    {
        name: 'Name',
        job: 'Job',
        avatar: '/images/logo.png',
        github: 'https://www.aetheras.io/',
        linkedIn: 'https://www.aetheras.io/',
        mail: 'https://www.aetheras.io/'
    },
    {
        name: 'Name',
        job: 'Job',
        avatar: '/images/logo.png',
        github: 'https://www.aetheras.io/',
        linkedIn: 'https://www.aetheras.io/',
        mail: 'https://www.aetheras.io/'
    }
]

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

const About = props => {
    const { classes } = props;
    const teamMemberDOM = getTeamMemberDOM(teamMember, classes);
    return (
        <React.Fragment>
            <Navbar />
            <div className={usingClasses(classes, 'about')}>
                <section className={usingClasses(classes, 'section')}>
                    <Typography component="h2" variant="headline" className={usingClasses(classes, 'headLine')}>
                        About Us
                    </Typography>
                    <p className={usingClasses(classes, 'bodyText')}>
                        Aetheras aims to create software to improve lives, whether through
                        solving problems, providing entertainment, or both.
                    </p>
                    <p className={usingClasses(classes, 'bodyText')}>
                        Our first project is a blockchain developed in house to service the
                        gaming industry’s trading market. The project's research and development
                        will enable us to build applications for many more verticals in the
                        future.
                    </p>
                    <p className={usingClasses(classes, 'bodyText')}>
                        We believe blockchain technology, with its ability to promote
                        transparency and fairness, offers the world huge opportunities for
                        innovation.
                    </p>
                </section>
                <section className={usingClasses(classes, 'section')}>
                    <Typography component="h2" variant="headline" className={usingClasses(classes, 'headLine')}>
                        Team Member
                    </Typography>
                    <div className={usingClasses(classes, 'list')}>
                        <Grid container spacing={16}>
                            {teamMemberDOM}
                        </Grid>
                    </div>
                </section>
                <Footer />
            </div>
        </React.Fragment>
    );
};

export default withStyles(getStyles(ABOUT_STYLES))(About);
