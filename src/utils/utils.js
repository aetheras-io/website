export const usingClasses = (classes, name) => {
    if (!classes[name]) {
        return name;
    }
    return `${name} ${classes[name]}`;
}