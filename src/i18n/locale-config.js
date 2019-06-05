const localeConfig = [
    {
        code: 'us',
        locale: 'en',
        languageCode: 'en-us',
        display: 'English',
        shortDisplay: 'EN',
        file: () => import('./messages/en_US')
    },
    {
        code: 'tw',
        locale: 'zh',
        languageCode: 'zh-tw',
        display: '繁體中文',
        shortDisplay: '繁',
        file: () => import('./messages/zh_TW')
    }
]

export default localeConfig;