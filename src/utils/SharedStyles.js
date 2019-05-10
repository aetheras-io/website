export const STYLES_CONST = Object.freeze({
    spacing: 8,
    letterSpacing: 0.8,
    navHeight: '56px',
})

export const SHARED_STYLES = Object.freeze({
    
    section: {
        width: '80%',
        minHeight: '240px',
        margin: '0 auto',
        padding: `${STYLES_CONST.spacing * 4}px ${STYLES_CONST.spacing * 2}px`
    },
    headLine: {
        letterSpacing: `${STYLES_CONST.letterSpacing * 3}px`
    },
    titleText: {
        letterSpacing: `${STYLES_CONST.letterSpacing * 3}px`
    },
    subTitleText: {
        marginBottom: `${STYLES_CONST.spacing * 1.5}px`,
        letterSpacing: `${STYLES_CONST.letterSpacing * 3}px`
    },
    bodyText: {
        fontSize: '1.15rem',
        letterSpacing: `${STYLES_CONST.letterSpacing}px`,
        lineHeight: '1.8rem'
    },
    anchor: {
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