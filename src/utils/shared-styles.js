export const STYLES_CONST = Object.freeze({
    primaryColor: '#FF7D2F',
    secondaryColor: '#FF4D4D',
    fontColor: '#4C4948',
    jobColor: '#949291',
    letterSpacing: 1,
    navHeight: '80px',
    footerHeight: '275px'
})

export const SHARED_STYLES = Object.freeze({
    wrapper: {
        paddingTop: STYLES_CONST.navHeight,
        paddingBottom: STYLES_CONST.footerHeight,
    },
    section: {
        width: '100%',
        padding: '72px 10%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    container: {
        width: '100%',
        height: '100%',
        maxWidth: 'calc(1180px)',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        minWidth: '221px',
        height: '64px',
        borderRadius: '32px',
        padding: '5px 32px',
        fontSize: '28px',
        fontWeight: '700',
        letterSpacing: '1px',
        textTransform: 'none',
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: STYLES_CONST.secondaryColor
        },
        '&:focus': {
            backgroundColor: '#E54545'
        }
    },
    outlinedButton: {
        minWidth: '221px',
        height: '64px',
        borderRadius: '32px',
        padding: '5px 32px',
        fontSize: '28px',
        fontWeight: '700',
        letterSpacing: '1px',
        textTransform: 'none',
        boxShadow: 'none',
        '&:hover': {
            color: 'white',
            backgroundColor: STYLES_CONST.primaryColor
        },
        '&:focus': {
            color: 'white',
            backgroundColor: STYLES_CONST.secondaryColor
        }
    },
    buttonLink: {
        textDecoration: 'none'
    },
    flatButton: {
        transition: 'all 0.3s',
        '&:hover': {
            backgroundColor: 'unset'
        },
        '&.active': {
            color: STYLES_CONST.primaryColor
        }
    },
    titleText: {
        fontSize: '40px',
        fontWeight: '700',
        letterSpacing: `${STYLES_CONST.letterSpacing}px`,
        marginBottom: '60px'
    },
    subTitleText: {
        fontSize: '24px',
        fontWeight: '500',
        letterSpacing: `${STYLES_CONST.letterSpacing}px`,
        marginBottom: '48px',
        maxWidth: '880px'
    },
    headLineText: {
        fontSize: '28px',
        fontWeight: '700',
        letterSpacing: `${STYLES_CONST.letterSpacing}px`,
        marginBottom: '16px'
    },
    bodyText: {
        fontSize: '16px',
        letterSpacing: `${STYLES_CONST.letterSpacing}px`,
        lineHeight: '24px'
    },
    paragraph: {
        fontSize: '24px',
        lineHeight: '36px',
        letterSpacing: `${STYLES_CONST.letterSpacing}px`,
        marginTop: '0',
        marginBottom: '28px',
        textAlign: 'center',
        fontWeight: '500',
        maxWidth: '880px',
        '&:last-child': {
            marginBottom: '0'
        }
    },
    anchor: {
        position: 'absolute',
        top: '0',
        left: '0'
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
    },
    illImg: {
        maxWidth: '100%'
    }
});