const localeConfig = [
    {
        code: 'us',
        locale: 'en',
        languageCode: 'en-us',
        file: () => import('./messages/en_US')
    },
    {
        code: 'tw',
        locale: 'zh',
        languageCode: 'zh-tw',
        file: () => import('./messages/zh_TW')
    }
]

export default localeConfig;