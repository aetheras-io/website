export const usingClasses = (classes, name) => {
    if (!classes[name]) {
        return name;
    }
    return `${name} ${classes[name]} `;
}

export const loadLocaleData = async (localeConfig, currentLocale, defaultLocale) => {
    const config = localeConfig.find(l => l.locale === currentLocale)
        || localeConfig.find(l => l.locale === defaultLocale);    
    const data = await config.file().then(res => res.default);
    return data;
}

export const debounce = (func, wait = 20, immediate = true) =>{
    let timeout;
    return function() {
      const context = this;
      const args = arguments;
      const later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }