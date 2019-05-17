export const usingClasses = (classes, name) => {
    if (!classes[name]) {
        return name;
    }
    return `${name} ${classes[name]}`;
}

export const loadLocaleData = async (localeConfig, currentLocale, defaultLocale) => {
    const config = localeConfig.find(l => l.locale === currentLocale)
        || localeConfig.find(l => l.locale === defaultLocale);    
    const data = await config.file().then(res => res.default);
    return data;
}