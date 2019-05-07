import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { getStyles, ABOUT_STYLES } from "../utils/Style-Const";
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
            <Grid item xs={6} sm={3} key={idx}>
                <Paper className={classes.paper}>
                    <img
                        src={member.avatar}
                        alt="avatar"
                        className={classes.avatar}
                    />
                    <Typography variant="body1" className={classes.bodyText}>
                        {member.name}
                    </Typography>
                    <Typography variant="body1" className={classes.subBodyText}>
                        {member.job}
                    </Typography>
                    <div className={classes.linkContainer}>
                        {member.github && (
                            <a href={member.github} target="_blank" rel="noopener noreferrer">
                                <img src="/images/github-icon.svg" alt="github-icon" className={classes.linkIcon} />
                            </a>
                        )}
                        {member.linkedIn && (
                            <a href={member.linkedIn} target="_blank" rel="noopener noreferrer">
                                <img src="/images/linkedin-icon.svg" alt="linkedin-icon" className={classes.linkIcon} />
                            </a>
                        )}
                        {member.mail && (
                            <a href={member.mail} target="_blank" rel="noopener noreferrer">
                                <img src="/images/mail-icon.svg" alt="mail-icon" className={classes.linkIcon} />
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
            <div className={classes.about}>
                <section className={classes.section}>
                    <Typography component="h2" variant="headline" className={classes.titleText}>
                        About Us
                    </Typography>
                    <p className={classes.bodyText}>
                        Aetheras aims to create software to improve lives, whether through
                        solving problems, providing entertainment, or both.
                    </p>
                    <p className={classes.bodyText}>
                        Our first project is a blockchain developed in house to service the
                        gaming industry’s trading market. The project's research and development
                        will enable us to build applications for many more verticals in the
                        future.
                    </p>
                    <p className={classes.bodyText}>
                        We believe blockchain technology, with its ability to promote
                        transparency and fairness, offers the world huge opportunities for
                        innovation.
                    </p>
                </section>
                <section className={classes.section}>
                    <Typography component="h2" variant="headline" className={classes.titleText}>
                        Team Member
                    </Typography>
                    <div className={classes.list}>
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
