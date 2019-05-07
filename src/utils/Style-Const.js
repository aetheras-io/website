export const getStyles = (styles) => {
    return Object.assign({ ...SHARED_STYLES }, styles);
}

const spacing = 8;
const letterSpacing = 0.8;
const navHeight = '64px';

export const SHARED_STYLES = Object.freeze({
    section: {
        width: '80%',
        minHeight: '240px',
        margin: '0 auto',
        padding: `${spacing * 4}px ${spacing * 2}px`
    },
    titleText: {
        letterSpacing: `${letterSpacing * 3}px`
    },
    subTitleText: {
        marginBottom: `${spacing * 1.5}px`,
        letterSpacing: `${letterSpacing * 3}px`
    },
    bodyText: {
        fontSize: '1.2315rem',
        letterSpacing: `${letterSpacing}px`,
        lineHeight: '2rem'
    },
    archor: {
        transform: 'translateY(-72px)'
    },
    build: {
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buildIcon: {
        fontSize: '64px',
        animation: 'buildIcon 3s ease-out infinite'
    }
});

export const NAVBAR_STYLES = Object.freeze({
    navbar: {
        color: 'rgba(0,0,0,0.82)',
        backgroundColor: 'rgba(255, 255, 255, 0.72)'
    },
    titleLink: {
        width: 'fit-content',
        padding: `${spacing * 0.5}px`,
        letterSpacing: `${letterSpacing * 4}px`,
        backgroundColor: 'rgba(255, 255, 255, 0.9)'
    },
    linkText: {
        textDecoration: 'unset',
        letterSpacing: `${letterSpacing * 2}px`
    },
    linkContainer: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    link: {
        display: 'inline-flex',
        padding: `${spacing}px`,
        margin: `0 ${spacing}px`,
        backgroundColor: 'rgba(255, 255, 255, 0.9)'
    }
});

export const COVER_STYLES = Object.freeze({
    cover: {
        width: '100%',
        height: '600px',
        marginTop: navHeight,
        background: 'url("/images/background.png") 50% center'
    },
    logoContainer: {
        height: '600px',
        width: '332px',
        paddingTop: '120px',
        paddingLeft: `${spacing * 4}px`,
        float: 'left'
    },
    logoImg: {
        display: 'inline',
        width: '75vw',
        maxWidth: '300px'
    },
    titleContainer: {
        width: 'calc(100% - 332px)',
        height: '100%',
        paddingLeft: `${spacing * 6}px`,
        float: 'right',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'baseline'
    },
    title: {
        letterSpacing: `${letterSpacing * 4}px`,
        transform: `translateY(-${spacing * 3}px)`,
        marginBottom: `${spacing * 1.5}px`
    },
    slogan: {
        transform: `translateY(-${spacing * 3}px)`,
    }
});

export const NEWS_STYLES = Object.freeze({
    titleDate: {
        marginLeft: '24px',
        fontSize: '0.95rem',
        color: 'rgba(0, 0, 0, 0.63)',
        display: 'inline-block',
        transform: 'translateY(1px)'
    },
    newsBody: {
        padding: `${spacing * 2}px 0`,
        display: 'flex',
        flexDirection: 'column'
    },
    bodyText: Object.assign({ ...SHARED_STYLES.bodyText }, {
        marginTop: `${spacing}px`,
        marginBottom: 0
    }),
    moreLink: {
        fontSize: '1.1rem',
        letterSpacing: `${letterSpacing}px`,
        display: 'inline-flex',
        alignSelf: 'flex-end',
        justifySelf: 'flex-end'
    },
})

export const TECH_STYLES = Object.freeze({
    list: {
        width: '100%',
        marginTop: `calc(1em + ${spacing}px)`
    },
    paper: {
        padding: `${spacing * 2}px`
    },
    subTitleText: Object.assign({ ...SHARED_STYLES.subTitleText }, {
        textAlign: 'center'
    }),
    bodyText: Object.assign({ ...SHARED_STYLES.bodyText }, {
        textAlign: 'center'
    })
})

export const PARTNER_STYLES = Object.freeze({
    container: {
        marginTop: `${spacing}px`,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    link: {
        textDecoration: 'unset',
        marginRight: `${spacing * 2}px`,
        marginBottom: `${spacing}px`
    },
    item: {
        padding: `${spacing}px`,
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.1rem',
        letterSpacing: `${letterSpacing}px`,
        color: 'rgba(0, 0, 0, 0.74)'
    },
    avatar: {
        height: '64px'
    }
})

export const FOOTER_STYLES = Object.freeze({
    footer: {
        height: '200px',
        width: '100%',
        padding: '0 10%',
        backgroundColor: 'rgba(0, 0, 0, 0.82)',
        position: 'absolute',
        bottom: '0'
    },
    gridContainer: {
        height: '100%',
        position: 'relative'
    },
    gridItem: {
        height: '100%',
        padding: `${spacing * 1.5}px`,
    },
    subTitleText: Object.assign({ ...SHARED_STYLES.subTitleText }, {
        color: 'whitesmoke',
    }),
    linkText: {
        color: 'whitesmoke',
        fontSize: '0.955rem',
        letterSpacing: `${letterSpacing * 1.5}px`
    },
    copyright: {
        height: '24px',
        position: 'absolute',
        bottom: '8px',
        right: '16px',
        color: 'whitesmoke',
    }
});

export const ABOUT_STYLES = Object.freeze({
    about: {
        marginTop: navHeight,
        minHeight: 'calc(100vh - 264px)'
    },
    list: {
        width: '100%',
        marginTop: `calc(1em + ${spacing}px)`
    },
    paper: {
        padding: `${spacing * 2}px`
    },
    subTitleText: {
        textAlign: 'center',
        marginBottom: `${spacing * 1.5}px`,
        letterSpacing: `${letterSpacing * 3}px`
    },
    avatar: {
        width: '64px',
        margin: '0 auto',
        borderRadius: '100%',
        display: 'block',
        marginBottom: `${spacing}px`,
    },
    linkIcon: {
        width: '24px',
        opacity: '0.54',
        marginRight: `${spacing}px`,
        '&:hover': {
            opacity: '0.84'
        }
    },
    subBodyText: {
        fontSize: '1rem',
        color: 'rgba(0, 0, 0, 0.63)',
        marginBottom: `${spacing * 2}px`
    }
})

export const NOTFOUND_STYLES = Object.freeze({
    notFound: {
        marginTop: navHeight,
        height: '600px',
        background: 'url("/images/background.png") 50% center'
    },
    titleText: {
        fontSize: '4rem',
        letterSpacing: `${letterSpacing * 8}px`,
        marginTop: `${spacing * 4}px`,
        color: 'rgba(0, 0, 0, 0.64)'
    },
    body: {
        marginTop: `${spacing * 10}px`
    },
    bodyText: {
        fontSize: '1.7rem',
        letterSpacing: `${letterSpacing * 2}px`,
        lineHeight: '2.3rem',
        color: 'rgba(0, 0, 0, 0.64)'
    }
})