export const STYLES_CONST = Object.freeze({
    primaryColor: '#FF7D2F',
    secondaryColor: '#FF4D4D',
    fontColor: '#4C4948',
    letterSpacing: 1,
    navHeight: '90px',
    footerHeight: '275px'
})

export const SHARED_STYLES = Object.freeze({
    wrapper: {
        paddingTop: STYLES_CONST.navHeight,
        paddingBottom: STYLES_CONST.footerHeight,
    },
    section: {
        width: '100%',
        padding: `160px 10%`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: '221px',
        height: '64px',
        borderRadius: '32px',
        fontSize: '28px',
        fontWeight: '700',
        letterSpacing: `${STYLES_CONST.letterSpacing * 2.5}px`,
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
        width: '221px',
        height: '64px',
        borderRadius: '32px',
        fontSize: '28px',
        fontWeight: '700',
        letterSpacing: `${STYLES_CONST.letterSpacing * 2.5}px`,
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
        fontSize: '28px',
        fontWeight: '500',
        letterSpacing: `${STYLES_CONST.letterSpacing}px`,
        marginBottom: '48px'
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
        fontSize: '28px',
        lineHeight: '36px',
        letterSpacing: `${STYLES_CONST.letterSpacing}px`,
        marginTop: '0',
        marginBottom: '28px',
        textAlign: 'center',
        fontWeight: '500',
        '&:last-child': {
            marginBottom: '0'
        }
    },
    anchor: {
        transform: 'translateY(-160px)'
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